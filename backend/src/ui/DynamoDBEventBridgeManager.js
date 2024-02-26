import dotenv from "dotenv";
dotenv.config();
import AWS from "aws-sdk";
import fs from "fs";
import archiver from "archiver";
import {
  SchedulerClient,
  CreateScheduleCommand,
} from "@aws-sdk/client-scheduler";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EventBridge.html

export default class DynamoDBEventBridgeManager {
  constructor() {
    this.dynamodb = new AWS.DynamoDB();
    this.docClient = new AWS.DynamoDB.DocumentClient();
  }

  // this is a users "schedule"
  async createTable(schedule, name = "schedule") {
    let tableName = name;

    try {
      // First, check if the table exists
      await this.describeTable(tableName);
    } catch (err) {
      // good error
      if (err.code === "ResourceNotFoundException") {
        // Table doesn't exist, create a new one
        return await this.createDynamoDBTable(tableName, schedule);
      } else {
        // bad error
        console.log("Error idkkkkkkkkkkkkkk", err);
        return false;
      }
    } finally {
      // If table exists, delete it
      try {
        await this.deleteTable(tableName);
        await this.waitForTableNotExists(tableName);
        // Then create a new one
      } catch (err) {
        console.log(
          "Error deleting table (probably fine, means it never existed in first place hopefully)",
          err
        );
      }

      try {
        return await this.createDynamoDBTable(tableName, schedule);
      } catch (err) {
        console.log("Error creating table", err);
        return false;
      }
    }
  }

  // this is to fetch data from dynamoDB
  async fetchTable(tableName) {
    const params = {
      TableName: tableName,
    };

    return new Promise((resolve, reject) => {
      this.docClient.scan(params, (err, data) => {
        if (err) {
          console.log("Error", err);
          reject(err);
        } else {
          console.log("fetch success");
          resolve(data);
        }
      });
    });
  }

  convertToZip(string, name) {
    return new Promise((resolve, reject) => {
      let zip = new archiver("zip");
      let output = fs.createWriteStream(name + ".zip");
      fs.writeFileSync("index.mjs", string);
      zip.append(string, { name: "index.mjs" });
      // pipe archive data to the file
      zip.pipe(output);
      zip.on("error", reject);
      output.on("close", () => resolve(zip));
      zip.finalize();
    });
  }

  //https://docs.aws.amazon.com/lambda/latest/dg/example_lambda_Invoke_section.html
  async transformFunctions(
    list_funcs,
    tableName = "test",
    time = "0000",
    funcName = "water"
  ) {
    if (list_funcs.length == 0) {
      return;
    }
    const lambda = new AWS.Lambda();
    lambda
      .getFunction({ FunctionName: tableName + "_" + funcName })
      .promise()
      .then(async (data) => {
        console.log(`Function ${funcName} exists.`);
        console.log(tableName + "_" + funcName + "_" + time);
        await this.convertToZip(initial, tableName + "_" + funcName);
        let arn = await this.createLambdaFunction(
          tableName + "_" + funcName,
          fs.readFileSync(tableName + "_" + funcName + ".zip")
        );
        await this.createEventBridgeRule(
          arn,
          time,
          tableName + "_" + funcName + "_" + time
        );
        return;
      })
      .catch((err) => {
        if (err.code === "ResourceNotFoundException") {
          console.log(`Function ${funcName} does not exist.`);
        } else {
          console.log(err, err.stack);
        }
      });

    let initial = `
    import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

    export const handler = async (event) => {
      let temp;
      let _;
      let body = "Done";
      let statusCode = '200';
      const invoke = async (funcName, payload) => {
        const client = new LambdaClient({});
        const command = new InvokeCommand({
          FunctionName: funcName,
          Payload: JSON.stringify(payload),
          LogType: "Tail",
          InvocationType: "RequestResponse",
        });

        const { Payload, LogResult } = await client.send(command);
        const result = Buffer.from(Payload).toString();
        const logs = Buffer.from(LogResult, "base64").toString();
        return { logs, result };
      };
      
    `;

    let boolcheck = false;
    let ifCheck = false;
    // reset everything
    for (let i = 0; i < list_funcs.length; i++) {
      boolcheck = false;
      ifCheck = false;
      let cmd = list_funcs[i];
      if (cmd === "}" || cmd === "{" || cmd.startsWith("else")) {
        initial += cmd;
        continue;
      }
      if (cmd.startsWith("if")) {
        ifCheck = true;
        cmd = cmd.substring(cmd.indexOf("(") + 1, cmd.indexOf(")") + 1);
        if (cmd.startsWith("!")) {
          cmd = cmd.substring(1);
          boolcheck = true;
        }
      }

      let func = cmd.substring(0, cmd.indexOf("("));
      let rest = cmd.substring(cmd.indexOf("(") + 1, cmd.length - 1);
      if (rest.includes(",")) {
        rest = rest.split(",");
      } else {
        rest = [rest];
      }

      if (ifCheck) {
        initial += `
          _, temp = await invoke("${func}", {"tableName": "${tableName}", "var1": ${
          rest[0]
        }, "var2": ${rest[1] ? rest[1] : '""'}});
          
          if (${boolcheck ? "!" : ""}(JSON.parse(temp.result).body==="true")) 
            `;
      } else if (func.length > 0) {
        let transform = `
          _, temp = await invoke("${func}", {"tableName": "${tableName}", "var1": ${
          rest[0]
        }, "var2": ${rest[1] ? rest[1] : '""'}});
          `;
        initial += transform;
      }
    }
    initial += `
          return {
            statusCode,
            body,
        };
      }
      `;
    console.log(tableName + "_" + funcName + "_" + time);
    await this.convertToZip(initial, tableName + "_" + funcName);
    let arn = await this.createLambdaFunction(
      tableName + "_" + funcName,
      fs.readFileSync(tableName + "_" + funcName + ".zip")
    );
    this.createEventBridgeRule(
      arn,
      time,
      tableName + "_" + funcName + "_" + time
    );
  }

  createLambdaFunction(name, zip) {
    const lambda = new AWS.Lambda();
    const params = {
      Code: { ZipFile: zip },
      FunctionName: name,
      Handler: "index.handler",
      Role: "arn:aws:iam::975050298432:role/jaren",
      Runtime: "nodejs20.x",
    };

    return new Promise((resolve, reject) => {
      lambda.createFunction(params, (err, data) => {
        if (err) {
          console.log("Error", err);
          reject(err);
        } else {
          console.log("Success", data);
          console.log("TEH ARNNNNNNNN", data.FunctionArn);
          resolve(data.FunctionArn);
        }
      });
    });
  }

  timeToCron(time) {
    const hour = time.substring(0, 2);
    const minute = time.substring(2);
    return `cron(${minute} ${hour} * * ? *)`;
  }
  async createEventBridgeRule(lambdaArn, time, name) {
    const cronexp = this.timeToCron(time);
    const client = new SchedulerClient();
    console.log(cronexp);
    const input = {
      // CreateScheduleInput
      Name: name, // required
      ScheduleExpression: cronexp, // required
      State: "ENABLED",
      ScheduleExpressionTimezone: "America/Los_Angeles",
      Target: {
        // Target
        Arn: lambdaArn, // required
        RoleArn: "arn:aws:iam::975050298432:role/jaren", // required
      },
      FlexibleTimeWindow: {
        // FlexibleTimeWindow
        Mode: "FLEXIBLE", // required
        MaximumWindowInMinutes: 10,
      },
    };
    const command = new CreateScheduleCommand(input);
    const response = await client.send(command);
    console.log(response, "AFTER EVENTBRIDGESCHEDULER SENTS!!!!!!!!!!");
  }

  // EVERYTHING BELOW THIS ARE HELPER FUNCTIONS
  // EVERYTHING BELOW THIS ARE HELPER FUNCTIONS
  // EVERYTHING BELOW THIS ARE HELPER FUNCTIONS
  // EVERYTHING BELOW THIS ARE HELPER FUNCTIONS

  async createDynamoDBTable(tableName, schedule) {
    const params = {
      TableName: tableName,
      KeySchema: [
        { AttributeName: "name", KeyType: "HASH" }, //Partition key
      ],
      AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };

    try {
      await this.dynamodb.createTable(params);
      await this.waitForTableExists(tableName);
      return this.fillTable(tableName, schedule);
    } catch (err) {
      console.log("Error", err);
      return false;
    }
  }

  describeTable = (tableName) => {
    return new Promise((resolve, reject) => {
      this.dynamodb.describeTable({ TableName: tableName }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };

  deleteTable = (tableName) => {
    return new Promise((resolve, reject) => {
      this.dynamodb.deleteTable({ TableName: tableName }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };

  waitForTableNotExists = (tableName) => {
    return new Promise((resolve, reject) => {
      this.dynamodb.waitFor(
        "tableNotExists",
        { TableName: tableName },
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });
  };

  createDynamoDBTable(tableName, schedule) {
    const params = {
      TableName: tableName,
      KeySchema: [
        { AttributeName: "name", KeyType: "HASH" }, //Partition key
      ],
      AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };

    this.dynamodb.createTable(params, (err, data) => {
      if (err) {
        console.log("Error", err);
        return false;
      } else {
        console.log("Table Created");
        // Wait for the table to become ACTIVE
        this.dynamodb.waitFor(
          "tableExists",
          { TableName: tableName },
          (err, data) => {
            if (err) {
              console.log(err, err.stack); // an error occurred
              return false;
            } else {
              console.log("Table is ACTIVE"); // successful response
              // Now you can insert items
              return this.fillTable(tableName, schedule);
            }
          }
        );
      }
    });
  }

  // helper function to fill the table with some data
  async fillTable(tableName, schedule) {
    console.log(schedule);
    const items = [];
    for (let i = 0; i < schedule.projects.length; i++) {
      items.push({
        type: "project",
        name: schedule.projects[i].name,
        description: schedule.projects[i]?.description,
        date: schedule.projects[i]?.date,
        status: schedule.projects[i]?.status,
        priority: schedule.projects[i]?.priority,
        tasks: schedule.projects[i]?.tasks?.map((task) => task.name),
        users: schedule.projects[i]?.users?.map((user) => user.name),
        deadline: schedule.projects[i]?.deadline,
        deps: schedule.projects[i]?.deps?.map((dep) => dep.name),
      });
    }

    for (let i = 0; i < schedule.tasks.length; i++) {
      items.push({
        type: "task",
        name: schedule.tasks[i].name,
        description: schedule.tasks[i]?.description,
        date: schedule.tasks[i]?.date,
        status: schedule.tasks[i]?.status,
        priority: schedule.tasks[i]?.priority,
        deadline: schedule.tasks[i]?.deadline,
        users: schedule.tasks[i]?.users?.map((user) => user.name),
        deps: schedule.tasks[i]?.deps?.map((dep) => dep.name),
      });
      if (schedule.tasks[i]?.reminder) {
        let reminder = schedule.tasks[i]?.reminder;
        let time = reminder.getTime();
        let func = reminder.getFuncName();
        console.log(schedule.funcs.get(func));
        await this.transformFunctions(
          schedule.funcs.get(func),
          tableName,
          time,
          func
        );
      }
    }

    for (let i = 0; i < schedule.users.length; i++) {
      items.push({
        type: "user",
        name: schedule.users[i].name,
        email: schedule.users[i]?.email,
        tasks: schedule.users[i]?.tasks?.map((task) => task.name),
        projects: schedule.users[i]?.projects?.map((projects) => projects.name),
        additional: schedule.users[i]?.additional,
      });
    }

    // Insert items into the table
    const params = {
      RequestItems: {
        [tableName]: items.map((item) => ({
          PutRequest: {
            Item: item,
          },
        })),
      },
    };

    this.docClient.batchWrite(params, (err, data) => {
      if (err) {
        console.log("Error", err);
        return false;
      } else {
        console.log("Item Inserted");
        return true;
      }
    });
  }
}
