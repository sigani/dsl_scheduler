export default class DynamoDBEventBridgeManager {
  sendToDynamoDB(schedule) {
    console.log("Sending to DynamoDB");
    console.log(schedule);
  }

  getFromDynamoDB(nameOfSchedule) {
    console.log("Getting from DynamoDB");
  }
}
