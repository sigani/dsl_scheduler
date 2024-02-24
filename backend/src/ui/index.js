import antlr4 from "antlr4";
import TaskProjectLexer from "../parser/TaskProjectLexer.js";
import TaskProjectParser from "../parser/TaskProjectParser.js";
import ParserTreeToAST from "../parser/ParserTreeToAST.js";

export default class TaskProjectDSL {
  constructor() {}

  static createProgram(code) {
    try {
      const chars = new antlr4.InputStream(code);
      const lexer = new TaskProjectLexer(chars);

      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new TaskProjectParser(tokens);

      // Create error listener
      const errorListener = {
        syntaxError: function (
          recognizer,
          offendingSymbol,
          line,
          column,
          msg,
          e
        ) {
          throw new Error(`Line ${line}:${column} - ${msg}`);
        },
      };

      parser.removeErrorListeners();
      parser.addErrorListener(errorListener);
      const visitor = new ParserTreeToAST();
      const program = parser.program().accept(visitor);
      return program;
    } catch (error) {
      console.log("Error parsing code");
      console.error(error);
      return null;
    }
  }
}
