import antlr4, { CharStreams } from "antlr4";
import TaskProjectLexer from "./parser/TaskProjectLexer.js";
import TaskProjectParser from "./parser/TaskProjectParser.js";
import ParserTreeToAST from "./parser/ParserTreeToAST.js";
import DynamoDBEventBridgeManager from "./ui/DynamoDBEventBridgeManager.js";

// const input =
//     "task   task1   {  \n" +
//     "  name: \"Task 1\",\n" +
//     "  description: \"This is a sample task\",\n" +
//     "  deadline: \"2024-02-20\",\n" +
//     "  status: \"In Progress\",\n" +
//     "  priority: 2,\n" +
//     "}\;\n" +
//     "task task2 \"Task 2\"\;" +
//     "project project1 {\n" +
//     "  name: \"project 1\",\n" +
//     "  description: \"This is a sample project\",\n" +
//     "  deadline: \"2024-02-20\",\n" +
//     "  tasks: {task1},\n" +
//     "}\;\n" +
//     "project project2 {  task1, task2 }\;\n" +
//     "user yuhei {\n" +
//     "  name: \"Yuhei Arimoto\",\n" +
//     "  email: \"yuhei61627@icloud.com\",\n" +
//     "  tasks: {task2, task1},\n" +
//     "  additional: {\"test\"  :   \"test\"   , \"TTE\" :\"TESD\"},\n" +
//     "}\;\n";

// const input =
//     "task task1 {\n" +
//     "  name: \"Task 1\",\n" +
//     "  description: \"This is a sample task\",\n" +
//     "  deadline: \"2024-02-20\",\n" +
//     "  status: \"In Progress\",\n" +
//     "  priority: 2,\n" +
//     "}\;\n" +
//     "task task2 \"Task 2\"\;" +
//     "task task3 {\n" +
//     "  name: \"Task 3\",\n" +
//     "  description: \"This is a sample task\",\n" +
//     "  deadline: \"2024-02-20\",\n" +
//     "  status: \"In Progress\",\n" +
//     "  priority: 1,\n" +
//     "  deps: {task2, task1},\n" +
//     "}\;\n" +
//     "user yuhei {\n" +
//     "  name: \"Yuhei Arimoto\",\n" +
//     "  email: \"yuhei61627@icloud.com\",\n" +
//     "  tasks: {task2, task1},\n" +
//     "}\;\n" ;

const chars = CharStreams.fromPathSync("input.txt");
const lexer = new TaskProjectLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new TaskProjectParser(tokens);
const visitor = new ParserTreeToAST();
const program = parser.program().accept(visitor);
let dbmanager = new DynamoDBEventBridgeManager();
dbmanager.transformFunctions(program);
// console.log(program.funcs);

// for (let statement of parser.program().func()[0].functionBody().funcFields()[2].conditional().getChild(0)) {
//     console.log(statement.getText());
// }
