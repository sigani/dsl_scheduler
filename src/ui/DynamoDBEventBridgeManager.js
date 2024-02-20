import dotenv from "dotenv";
dotenv.config();
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default class DynamoDBEventBridgeManager {
  constructor() {
    this.dynamodb = new AWS.DynamoDB();
    this.docClient = new AWS.DynamoDB.DocumentClient();
  }

  createTable(schedule) {
    let tableName = "test-table";
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
      } else {
        console.log("Table Created", data);
        // Wait for the table to become ACTIVE
        this.dynamodb.waitFor(
          "tableExists",
          { TableName: tableName },
          (err, data) => {
            if (err) {
              console.log(err, err.stack); // an error occurred
            } else {
              console.log("Table is ACTIVE", data); // successful response

              // Now you can insert items
              this.fillTable(tableName, schedule);
            }
          }
        );
      }
    });
  }

  fillTable(tableName, schedule) {
    const params = {
      TableName: tableName,
      Item: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    };

    this.docClient.put(params, (err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Item Inserted", data);
      }
    });
  }
}
