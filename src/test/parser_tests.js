import antlr4 from "antlr4";
import TaskProjectLexer from "../parser/TaskProjectLexer.js";
import TaskProjectParser from "../parser/TaskProjectParser.js";

describe("Tokenizer", function () {
  describe("Basic tests", function () {
    it("should parse task project", function () {
      const input = `
        task task1 { 
          name: "Task 1", 
          description: "This is a sample task", 
          deadline: "2024-02-20", 
          status: "In Progress",
          priority: 2,
      };
        `;
      const chars = new antlr4.InputStream(input);
      const lexer = new TaskProjectLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new TaskProjectParser(tokens);
      const tree = parser.program();
      console.log(tree);
    });

    // it("should parse user declaration", function () {
    //   const input =
    //     'user user23 { name: "John Doe", email: "john.doe@example.com", tasks: {task1:task2, task3:task4}, projects: {project1:project2} };';
    //   const chars = new antlr4.InputStream(input);
    //   const lexer = new TaskProjectLexer(chars);
    //   const tokens = new antlr4.CommonTokenStream(lexer);
    // });
  });
});
