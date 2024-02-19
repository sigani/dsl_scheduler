import antlr4, {Parser} from 'antlr4';
import TaskProjectLexer from "./parser/TaskProjectLexer.js";
import TaskProjectParser from "./parser/TaskProjectParser.js";
import TaskProjectParserListener from "./parser/TaskProjectParserListener.js";
import TaskProjectParserVisitor from "./parser/TaskProjectParserVisitor.js";
import Program from "./ast/Program.js";
import ParserTreeToAST from "./parser/ParserTreeToAST.js";

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

console.log(program);