
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
      
    
          _, temp = await invoke("ping", {"tableName": "school", "var1": "Jaren", "var2": "REMINDER TO STAN NEWJEANS"});
          
          _, temp = await invoke("ping", {"tableName": "school", "var1": "minji", "var2": "ping sent to jaren so he stans newjeans!!!"});
          
          return {
            statusCode,
            body,
        };
      }
      