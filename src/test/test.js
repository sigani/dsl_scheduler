import antlr4, { Parser } from "antlr4";
import TaskProjectLexer from "../parser/TaskProjectLexer.js";
import TaskProjectParser from "../parser/TaskProjectParser.js";
import TaskProjectParserListener from "../parser/TaskProjectParserListener.js";
import TaskProjectParserVisitor from "../parser/TaskProjectParserVisitor.js";
import Program from "../ast/Program.js";
import ParserTreeToAST from "../parser/ParserTreeToAST.js";

describe("Evaluator", function () {
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
    it("yuhei test", function () {
      const input =
        "task   task1   {  \n" +
        '  name: "Task 1",\n' +
        '  description: "This is a sample task",\n' +
        '  deadline: "2024-02-20",\n' +
        '  status: "In Progress",\n' +
        "  priority: 2,\n" +
        "};\n" +
        'task task2 "Task 2";' +
        "project project1 {\n" +
        '  name: "project 1",\n' +
        '  description: "This is a sample project",\n' +
        '  deadline: "2024-02-20",\n' +
        "  tasks: {task1},\n" +
        "};\n" +
        "project project2 {  task1, task2 };\n" +
        "user yuhei {\n" +
        '  name: "Yuhei Arimoto",\n' +
        '  email: "yuhei61627@icloud.com",\n' +
        "  tasks: {task2, task1},\n" +
        '  additional: {"test"  :   "test"   , "TTE" :"TESD"},\n' +
        "};\n";

      const chars = new antlr4.InputStream(input);
      const lexer = new TaskProjectLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new TaskProjectParser(tokens);
      const visitor = new ParserTreeToAST();

      const program = parser.program().accept(visitor);

      console.log(input);
      console.log(program);
    });
  });
});
