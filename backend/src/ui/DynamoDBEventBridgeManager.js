import dotenv from "dotenv";
dotenv.config();
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html
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
    }

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
      return false;
    }

    try {
      return await this.createDynamoDBTable(tableName, schedule);
    } catch (err) {
      console.log("Error creating table", err);
      return false;
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
      await this.createTable(params);
      await this.waitForTableExists(tableName);
      return this.fillTable(tableName, schedule);
    } catch (err) {
      console.log("Error", err);
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
        console.log("Table Created", data);
        // Wait for the table to become ACTIVE
        this.dynamodb.waitFor(
          "tableExists",
          { TableName: tableName },
          (err, data) => {
            if (err) {
              console.log(err, err.stack); // an error occurred
              return false;
            } else {
              console.log("Table is ACTIVE", data); // successful response
              // Now you can insert items
              return this.fillTable(tableName, schedule);
            }
          }
        );
      }
    });
  }

  // helper function to fill the table with some data
  fillTable(tableName, schedule) {
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
      });
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
        console.log("Item Inserted", data);
        return true;
      }
    });
  }
}
