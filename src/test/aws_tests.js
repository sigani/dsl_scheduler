import DynamoDBEventBridgeManager from "../ui/DynamoDBEventBridgeManager.js";
import Task from "../ast/Task.js";
import Project from "../ast/Project.js";
import Program from "../ast/Program.js";
import { expect } from "chai";

describe("AWS", function () {
  describe("DynamoDB", function () {
    it("should insert a table into the db", async function () {
      this.timeout(30000); // 30 seconds (aws is sooo slow)
      // Create Task objects
      let task1 = new Task(
        "",
        "Task 1",
        "This is a sample task",
        "2024-02-20",
        "In Progress",
        2,
        null
      );
      let task2 = new Task(
        "",
        "Task 2",
        "This is a sample task",
        "2024-02-20",
        "In Progress",
        69,
        null
      );
      let tasks = [task1, task2];

      // Create Project objects
      let project1 = new Project(
        "",
        "Project 1",
        "This is a sample project",
        "2024-02-20",
        "In Progress",
        2,
        null,
        null,
        tasks
      );
      let projects = [project1];

      // Create Program object
      let program = new Program(tasks, projects);
      let manager = new DynamoDBEventBridgeManager();
      await manager.createTable(program);
    });

    it("should fetch a table from the db", async function () {
      this.timeout(30000); // 30 seconds (aws is sooo slow)
      let results;
      let manager = new DynamoDBEventBridgeManager();
      results = await manager.fetchTable("test-table");
      console.log(results);
      expect(results).to.not.be.null;
    });

    it("should fetch empty object", async function () {
      this.timeout(30000); // 30 seconds (aws is sooo slow)
      let results;
      let manager = new DynamoDBEventBridgeManager();
      try {
        results = await manager.fetchTable("HAVGJBKDASKWJSHDB");
        fail();
      } catch (err) {
        console.log(err);
        expect(err).to.not.be.null;
      }
    });
  });
});
