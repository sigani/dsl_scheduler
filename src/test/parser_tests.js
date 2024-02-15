// referenced https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md
const assert = require("assert");
const antlr4 = require("antlr4");
const TaskProjectLexer = require("../parser/TaskProjectLexer").TaskProjectLexer;
const TaskProjectParser =
  require("../parser/TaskProjectParser").TaskProjectParser;

describe("Tokenizer", function () {
  describe("Basic tests", function () {
    it("should parse task project", function () {
      const input =
        'task "Sample Task" { name: "Task 1", description: "This is a sample task", deadline: "2024-02-20", status: "In Progress" };';
      const chars = new antlr4.InputStream(input);
      const lexer = new TaskProjectLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new TaskProjectParser(tokens);
      parser.buildParseTrees = true;
      const tree = parser.taskProject();

      assert.strictEqual(tree.parser._syntaxErrors, 0);
    });

    it("should parse user declaration", function () {
      const input =
        'user "Sample User" { name: "John Doe", email: "john.doe@example.com", tasks: {task1:task2, task3:task4}, projects: {project1:project2} };';
      const chars = new antlr4.InputStream(input);
      const lexer = new TaskProjectLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new TaskProjectParser(tokens);
      parser.buildParseTrees = true;
      const tree = parser.user_decl();

      assert.strictEqual(tree.parser._syntaxErrors, 0);
    });
  });
});
