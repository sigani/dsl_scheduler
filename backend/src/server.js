import express from "express";
import cors from "cors";
import TaskProjectDSL from "./ui/index.js";
import DynamoDBEventBridgeManager from "./ui/DynamoDBEventBridgeManager.js";
import ParseHTML from "./parser/ASTtoHTML.js";

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
  try {
    let program = TaskProjectDSL.createProgram(code);
    let dbmanager = new DynamoDBEventBridgeManager();
    let test = await dbmanager.createTable(program, nameOfSchedule);
    console.log(test);
    res
      .status(200)
      .send(
        "Table successfully created!  It may take a few moments to reflect on the server"
      );
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

app.get("/fetch", async (req, res) => {
  let name = req.query.name;
  let dbmanager = new DynamoDBEventBridgeManager();
  let data = await dbmanager.fetchTable(name);
  let helper = new ParseHTML();
  let response = helper.getHTML(data);
  res.status(200).send(response);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
