// Generated from src/parser/TaskProjectLexer.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,29,337,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,1,0,4,0,61,8,0,11,0,12,0,62,1,0,1,0,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,5,1,74,8,1,10,1,12,1,77,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,5,2,89,8,2,10,2,12,2,92,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,101,8,
3,10,3,12,3,104,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,113,8,4,10,4,12,4,116,
9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,132,8,5,
10,5,12,5,135,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,148,8,
6,10,6,12,6,151,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,162,8,7,10,7,
12,7,165,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,178,8,8,10,
8,12,8,181,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,190,8,9,10,9,12,9,193,9,9,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,203,8,10,10,10,12,10,206,9,
10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,216,8,11,10,11,12,11,219,
9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,229,8,12,10,12,12,12,232,
9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,245,8,13,
10,13,12,13,248,9,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,5,14,263,8,14,10,14,12,14,266,9,14,1,15,1,15,1,15,1,15,1,15,
1,15,5,15,274,8,15,10,15,12,15,277,9,15,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,5,16,286,8,16,10,16,12,16,289,9,16,1,17,1,17,5,17,293,8,17,10,17,12,17,
296,9,17,1,18,1,18,5,18,300,8,18,10,18,12,18,303,9,18,1,18,1,18,1,19,4,19,
308,8,19,11,19,12,19,309,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,
24,1,25,1,25,1,26,1,26,1,27,4,27,327,8,27,11,27,12,27,328,1,27,1,27,1,28,
4,28,334,8,28,11,28,12,28,335,0,0,29,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,
21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,1,0,7,2,0,9,9,32,32,2,
0,65,90,97,122,3,0,48,57,65,90,97,122,1,0,34,34,1,0,48,57,3,0,9,10,13,13,
32,32,2,0,10,10,13,13,358,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,
31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,
0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,1,60,1,0,0,0,3,66,1,0,0,0,5,78,1,0,0,0,
7,93,1,0,0,0,9,105,1,0,0,0,11,117,1,0,0,0,13,136,1,0,0,0,15,152,1,0,0,0,
17,166,1,0,0,0,19,182,1,0,0,0,21,194,1,0,0,0,23,207,1,0,0,0,25,220,1,0,0,
0,27,233,1,0,0,0,29,249,1,0,0,0,31,267,1,0,0,0,33,278,1,0,0,0,35,290,1,0,
0,0,37,297,1,0,0,0,39,307,1,0,0,0,41,311,1,0,0,0,43,313,1,0,0,0,45,315,1,
0,0,0,47,317,1,0,0,0,49,319,1,0,0,0,51,321,1,0,0,0,53,323,1,0,0,0,55,326,
1,0,0,0,57,333,1,0,0,0,59,61,7,0,0,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,
0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,6,0,0,0,65,2,1,0,0,0,66,67,5,116,
0,0,67,68,5,97,0,0,68,69,5,115,0,0,69,70,5,107,0,0,70,71,5,32,0,0,71,75,
1,0,0,0,72,74,3,55,27,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,
1,0,0,0,76,4,1,0,0,0,77,75,1,0,0,0,78,79,5,112,0,0,79,80,5,114,0,0,80,81,
5,111,0,0,81,82,5,106,0,0,82,83,5,101,0,0,83,84,5,99,0,0,84,85,5,116,0,0,
85,86,5,32,0,0,86,90,1,0,0,0,87,89,3,55,27,0,88,87,1,0,0,0,89,92,1,0,0,0,
90,88,1,0,0,0,90,91,1,0,0,0,91,6,1,0,0,0,92,90,1,0,0,0,93,94,5,117,0,0,94,
95,5,115,0,0,95,96,5,101,0,0,96,97,5,114,0,0,97,98,5,32,0,0,98,102,1,0,0,
0,99,101,3,55,27,0,100,99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,
1,0,0,0,103,8,1,0,0,0,104,102,1,0,0,0,105,106,5,110,0,0,106,107,5,97,0,0,
107,108,5,109,0,0,108,109,5,101,0,0,109,110,5,58,0,0,110,114,1,0,0,0,111,
113,3,55,27,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,
0,0,0,115,10,1,0,0,0,116,114,1,0,0,0,117,118,5,100,0,0,118,119,5,101,0,0,
119,120,5,115,0,0,120,121,5,99,0,0,121,122,5,114,0,0,122,123,5,105,0,0,123,
124,5,112,0,0,124,125,5,116,0,0,125,126,5,105,0,0,126,127,5,111,0,0,127,
128,5,110,0,0,128,129,5,58,0,0,129,133,1,0,0,0,130,132,3,55,27,0,131,130,
1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,12,1,0,0,0,135,
133,1,0,0,0,136,137,5,100,0,0,137,138,5,101,0,0,138,139,5,97,0,0,139,140,
5,100,0,0,140,141,5,108,0,0,141,142,5,105,0,0,142,143,5,110,0,0,143,144,
5,101,0,0,144,145,5,58,0,0,145,149,1,0,0,0,146,148,3,55,27,0,147,146,1,0,
0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,14,1,0,0,0,151,149,
1,0,0,0,152,153,5,115,0,0,153,154,5,116,0,0,154,155,5,97,0,0,155,156,5,116,
0,0,156,157,5,117,0,0,157,158,5,115,0,0,158,159,5,58,0,0,159,163,1,0,0,0,
160,162,3,55,27,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,
1,0,0,0,164,16,1,0,0,0,165,163,1,0,0,0,166,167,5,112,0,0,167,168,5,114,0,
0,168,169,5,105,0,0,169,170,5,111,0,0,170,171,5,114,0,0,171,172,5,105,0,
0,172,173,5,116,0,0,173,174,5,121,0,0,174,175,5,58,0,0,175,179,1,0,0,0,176,
178,3,55,27,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,
0,0,0,180,18,1,0,0,0,181,179,1,0,0,0,182,183,5,100,0,0,183,184,5,101,0,0,
184,185,5,112,0,0,185,186,5,115,0,0,186,187,5,58,0,0,187,191,1,0,0,0,188,
190,3,55,27,0,189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,
0,0,0,192,20,1,0,0,0,193,191,1,0,0,0,194,195,5,117,0,0,195,196,5,115,0,0,
196,197,5,101,0,0,197,198,5,114,0,0,198,199,5,115,0,0,199,200,5,58,0,0,200,
204,1,0,0,0,201,203,3,55,27,0,202,201,1,0,0,0,203,206,1,0,0,0,204,202,1,
0,0,0,204,205,1,0,0,0,205,22,1,0,0,0,206,204,1,0,0,0,207,208,5,101,0,0,208,
209,5,109,0,0,209,210,5,97,0,0,210,211,5,105,0,0,211,212,5,108,0,0,212,213,
5,58,0,0,213,217,1,0,0,0,214,216,3,55,27,0,215,214,1,0,0,0,216,219,1,0,0,
0,217,215,1,0,0,0,217,218,1,0,0,0,218,24,1,0,0,0,219,217,1,0,0,0,220,221,
5,116,0,0,221,222,5,97,0,0,222,223,5,115,0,0,223,224,5,107,0,0,224,225,5,
115,0,0,225,226,5,58,0,0,226,230,1,0,0,0,227,229,3,55,27,0,228,227,1,0,0,
0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,26,1,0,0,0,232,230,
1,0,0,0,233,234,5,112,0,0,234,235,5,114,0,0,235,236,5,111,0,0,236,237,5,
106,0,0,237,238,5,101,0,0,238,239,5,99,0,0,239,240,5,116,0,0,240,241,5,115,
0,0,241,242,5,58,0,0,242,246,1,0,0,0,243,245,3,55,27,0,244,243,1,0,0,0,245,
248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,28,1,0,0,0,248,246,1,0,0,
0,249,250,5,97,0,0,250,251,5,100,0,0,251,252,5,100,0,0,252,253,5,105,0,0,
253,254,5,116,0,0,254,255,5,105,0,0,255,256,5,111,0,0,256,257,5,110,0,0,
257,258,5,97,0,0,258,259,5,108,0,0,259,260,5,58,0,0,260,264,1,0,0,0,261,
263,3,55,27,0,262,261,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,
0,0,0,265,30,1,0,0,0,266,264,1,0,0,0,267,268,5,115,0,0,268,269,5,101,0,0,
269,270,5,116,0,0,270,271,5,32,0,0,271,275,1,0,0,0,272,274,3,55,27,0,273,
272,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,32,1,0,0,
0,277,275,1,0,0,0,278,279,5,100,0,0,279,280,5,101,0,0,280,281,5,112,0,0,
281,282,5,115,0,0,282,283,5,32,0,0,283,287,1,0,0,0,284,286,3,55,27,0,285,
284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,34,1,0,0,
0,289,287,1,0,0,0,290,294,7,1,0,0,291,293,7,2,0,0,292,291,1,0,0,0,293,296,
1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,36,1,0,0,0,296,294,1,0,0,0,297,
301,5,34,0,0,298,300,8,3,0,0,299,298,1,0,0,0,300,303,1,0,0,0,301,299,1,0,
0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,301,1,0,0,0,304,305,5,34,0,0,305,
38,1,0,0,0,306,308,7,4,0,0,307,306,1,0,0,0,308,309,1,0,0,0,309,307,1,0,0,
0,309,310,1,0,0,0,310,40,1,0,0,0,311,312,5,58,0,0,312,42,1,0,0,0,313,314,
5,59,0,0,314,44,1,0,0,0,315,316,5,44,0,0,316,46,1,0,0,0,317,318,5,123,0,
0,318,48,1,0,0,0,319,320,5,125,0,0,320,50,1,0,0,0,321,322,5,40,0,0,322,52,
1,0,0,0,323,324,5,41,0,0,324,54,1,0,0,0,325,327,7,5,0,0,326,325,1,0,0,0,
327,328,1,0,0,0,328,326,1,0,0,0,328,329,1,0,0,0,329,330,1,0,0,0,330,331,
6,27,0,0,331,56,1,0,0,0,332,334,7,6,0,0,333,332,1,0,0,0,334,335,1,0,0,0,
335,333,1,0,0,0,335,336,1,0,0,0,336,58,1,0,0,0,23,0,62,75,90,102,114,133,
149,163,179,191,204,217,230,246,264,275,287,294,301,309,328,335,1,0,1,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class TaskProjectLexer extends antlr4.Lexer {

    static grammarFileName = "TaskProjectLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, "':'", "';'", "','", 
                         "'{'", "'}'", "'('", "')'" ];
	static symbolicNames = [ null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", 
                          "USER_DEF", "NAME", "DESCRIPTION", "DEADLINE", 
                          "STATUS", "PRIORITY", "DEPS", "USERS", "EMAIL", 
                          "TASKS", "PROJECTS", "ADDITIONAL", "SET", "SET_DEPS", 
                          "TEXT", "QUOTED_TEXT", "NUM", "COLON", "SEMICOLON", 
                          "COMMA", "OPEN_BRACES", "CLOSE_BRACES", "OPEN_PAREN", 
                          "CLOSE_PAREN", "SPACE", "NEWLINE" ];
	static ruleNames = [ "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", "USER_DEF", 
                      "NAME", "DESCRIPTION", "DEADLINE", "STATUS", "PRIORITY", 
                      "DEPS", "USERS", "EMAIL", "TASKS", "PROJECTS", "ADDITIONAL", 
                      "SET", "SET_DEPS", "TEXT", "QUOTED_TEXT", "NUM", "COLON", 
                      "SEMICOLON", "COMMA", "OPEN_BRACES", "CLOSE_BRACES", 
                      "OPEN_PAREN", "CLOSE_PAREN", "SPACE", "NEWLINE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

TaskProjectLexer.EOF = antlr4.Token.EOF;
TaskProjectLexer.LEADING_SPACE = 1;
TaskProjectLexer.TASK_DEF = 2;
TaskProjectLexer.PROJECT_DEF = 3;
TaskProjectLexer.USER_DEF = 4;
TaskProjectLexer.NAME = 5;
TaskProjectLexer.DESCRIPTION = 6;
TaskProjectLexer.DEADLINE = 7;
TaskProjectLexer.STATUS = 8;
TaskProjectLexer.PRIORITY = 9;
TaskProjectLexer.DEPS = 10;
TaskProjectLexer.USERS = 11;
TaskProjectLexer.EMAIL = 12;
TaskProjectLexer.TASKS = 13;
TaskProjectLexer.PROJECTS = 14;
TaskProjectLexer.ADDITIONAL = 15;
TaskProjectLexer.SET = 16;
TaskProjectLexer.SET_DEPS = 17;
TaskProjectLexer.TEXT = 18;
TaskProjectLexer.QUOTED_TEXT = 19;
TaskProjectLexer.NUM = 20;
TaskProjectLexer.COLON = 21;
TaskProjectLexer.SEMICOLON = 22;
TaskProjectLexer.COMMA = 23;
TaskProjectLexer.OPEN_BRACES = 24;
TaskProjectLexer.CLOSE_BRACES = 25;
TaskProjectLexer.OPEN_PAREN = 26;
TaskProjectLexer.CLOSE_PAREN = 27;
TaskProjectLexer.SPACE = 28;
TaskProjectLexer.NEWLINE = 29;



