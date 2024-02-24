import express from "express";
import cors from "cors";
import TaskProjectDSL from "./ui/index.js";
import DynamoDBEventBridgeManager from "./ui/DynamoDBEventBridgeManager.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/project", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", async (req, res) => {
  console.log(req.body);
  let data = req.body;
  let nameOfSchedule = data.name;
  let code = data.code;

  // convert code into Program object
  let program = TaskProjectDSL.createProgram(code);
  if (program === null) {
    console.log("Invalid code");
    res.status(400).send("Invalid code");
  }
  let dbmanager = new DynamoDBEventBridgeManager();
  await dbmanager.createTable(program, nameOfSchedule);
  res.status(200).send("Data submitted successfully!");
});

app.get("/fetch", async (req, res) => {
  let name = req.query.name;
  console.log(name);
  let dbmanager = new DynamoDBEventBridgeManager();
  let data = await dbmanager.fetchTable(name);
  res.status(200).send(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
