import antlr4 from 'antlr4';
import TaskProjectLexer from "./parser/TaskProjectLexer.js";
import TaskProjectParser from "./parser/TaskProjectParser.js";
import ParserTreeToAST from "./parser/ParserTreeToAST.js";
import ParseHTML from "./parser/ASTtoHTML.js";
import Task from "./ast/Task.js";
import Project from "./ast/Project.js";

const input =
    "task task1 {\n" +
    "  name: \"Task 1\",\n" +
    "  description: \"This is a sample task\",\n" +
    "  deadline: \"2024-02-20\",\n" +
    "  status: \"In Progress\",\n" +
    "  priority: 2,\n" +
    "}\;";

const chars = new antlr4.InputStream(input);
const lexer = new TaskProjectLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new TaskProjectParser(tokens);
const visitor = new ParserTreeToAST();

const program = parser.program().accept(visitor);

program.tasks = [program.tasks[0],
    new Task("task2", "Task 2", "The description task 2", "2024-02-20", "Not Started", 3, null, null),
    new Task("task3", "Task 3", "The description task 3", "2024-02-20", "Finished", 0, null, null),
    new Task("task4", "Task 4"),];

program.tasks[0].users = ["user1", "user2", "user3"];
program.tasks[0].deps = ["task1", "task2", "task3"];

program.projects = [
    new Project("project1", "Project 1", "The description of project 1", "2024-02-20", "Not Started", 3, null, null, program.tasks),
    new Project("project2", "Project 2", "The description of project 2", "2024-02-20", "Not Started", 3, null, null, [program.tasks[1]]),];

console.log(program);

//Convert the AST to HTML
let ex = new ParseHTML();
ex.programToHTML(program);


