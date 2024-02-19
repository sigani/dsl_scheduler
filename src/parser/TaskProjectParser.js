// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
const serializedATN = [4,1,30,330,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,1,0,1,1,1,1,5,1,41,8,1,10,
1,12,1,44,9,1,1,1,5,1,47,8,1,10,1,12,1,50,9,1,1,1,1,1,5,1,54,8,1,10,1,12,
1,57,9,1,1,1,5,1,60,8,1,10,1,12,1,63,9,1,1,1,5,1,66,8,1,10,1,12,1,69,9,1,
1,1,4,1,72,8,1,11,1,12,1,73,3,1,76,8,1,1,1,1,1,5,1,80,8,1,10,1,12,1,83,9,
1,1,1,1,1,5,1,87,8,1,10,1,12,1,90,9,1,1,1,1,1,5,1,94,8,1,10,1,12,1,97,9,
1,1,1,1,1,5,1,101,8,1,10,1,12,1,104,9,1,1,1,5,1,107,8,1,10,1,12,1,110,9,
1,1,1,3,1,113,8,1,1,1,1,1,1,2,1,2,5,2,119,8,2,10,2,12,2,122,9,2,1,2,5,2,
125,8,2,10,2,12,2,128,9,2,1,2,1,2,5,2,132,8,2,10,2,12,2,135,9,2,1,2,5,2,
138,8,2,10,2,12,2,141,9,2,1,2,5,2,144,8,2,10,2,12,2,147,9,2,1,2,4,2,150,
8,2,11,2,12,2,151,3,2,154,8,2,1,2,1,2,1,3,1,3,5,3,160,8,3,10,3,12,3,163,
9,3,1,3,5,3,166,8,3,10,3,12,3,169,9,3,1,3,1,3,5,3,173,8,3,10,3,12,3,176,
9,3,1,3,5,3,179,8,3,10,3,12,3,182,9,3,1,3,5,3,185,8,3,10,3,12,3,188,9,3,
1,3,4,3,191,8,3,11,3,12,3,192,1,3,1,3,1,4,1,4,1,4,5,4,200,8,4,10,4,12,4,
203,9,4,1,4,1,4,5,4,207,8,4,10,4,12,4,210,9,4,1,4,1,4,5,4,214,8,4,10,4,12,
4,217,9,4,1,4,3,4,220,8,4,1,4,5,4,223,8,4,10,4,12,4,226,9,4,5,4,228,8,4,
10,4,12,4,231,9,4,1,4,5,4,234,8,4,10,4,12,4,237,9,4,1,4,1,4,1,4,1,5,1,5,
5,5,244,8,5,10,5,12,5,247,9,5,1,5,1,5,5,5,251,8,5,10,5,12,5,254,9,5,1,5,
1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,265,8,6,10,6,12,6,268,9,6,1,6,1,6,3,
6,272,8,6,1,7,1,7,5,7,276,8,7,10,7,12,7,279,9,7,1,7,1,7,5,7,283,8,7,10,7,
12,7,286,9,7,1,7,5,7,289,8,7,10,7,12,7,292,9,7,1,7,1,7,1,8,1,8,3,8,298,8,
8,1,9,5,9,301,8,9,10,9,12,9,304,9,9,1,9,5,9,307,8,9,10,9,12,9,310,9,9,1,
9,1,9,5,9,314,8,9,10,9,12,9,317,9,9,1,9,5,9,320,8,9,10,9,12,9,323,9,9,1,
9,1,9,1,10,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,3,2,0,2,2,
5,6,1,0,4,6,2,0,2,2,4,6,376,0,33,1,0,0,0,2,38,1,0,0,0,4,116,1,0,0,0,6,157,
1,0,0,0,8,196,1,0,0,0,10,241,1,0,0,0,12,271,1,0,0,0,14,273,1,0,0,0,16,297,
1,0,0,0,18,302,1,0,0,0,20,326,1,0,0,0,22,32,3,2,1,0,23,32,3,4,2,0,24,32,
3,6,3,0,25,32,3,8,4,0,26,32,3,10,5,0,27,32,3,20,10,0,28,29,5,12,0,0,29,32,
5,24,0,0,30,32,3,18,9,0,31,22,1,0,0,0,31,23,1,0,0,0,31,24,1,0,0,0,31,25,
1,0,0,0,31,26,1,0,0,0,31,27,1,0,0,0,31,28,1,0,0,0,31,30,1,0,0,0,32,35,1,
0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,5,0,
0,1,37,1,1,0,0,0,38,42,5,1,0,0,39,41,5,21,0,0,40,39,1,0,0,0,41,44,1,0,0,
0,42,40,1,0,0,0,42,43,1,0,0,0,43,48,1,0,0,0,44,42,1,0,0,0,45,47,5,22,0,0,
46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,112,1,0,0,0,50,
48,1,0,0,0,51,55,5,25,0,0,52,54,5,22,0,0,53,52,1,0,0,0,54,57,1,0,0,0,55,
53,1,0,0,0,55,56,1,0,0,0,56,61,1,0,0,0,57,55,1,0,0,0,58,60,7,0,0,0,59,58,
1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,67,1,0,0,0,63,61,1,
0,0,0,64,66,5,22,0,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,
0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,72,5,26,0,0,71,51,1,0,0,0,72,73,1,0,0,
0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,71,1,0,0,0,75,76,1,0,0,0,
76,113,1,0,0,0,77,81,5,30,0,0,78,80,5,22,0,0,79,78,1,0,0,0,80,83,1,0,0,0,
81,79,1,0,0,0,81,82,1,0,0,0,82,113,1,0,0,0,83,81,1,0,0,0,84,88,5,25,0,0,
85,87,5,22,0,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,
91,1,0,0,0,90,88,1,0,0,0,91,95,5,21,0,0,92,94,5,22,0,0,93,92,1,0,0,0,94,
97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,108,1,0,0,0,97,95,1,0,0,0,98,102,
5,27,0,0,99,101,5,22,0,0,100,99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,
102,103,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,107,5,21,0,0,106,98,
1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,
110,108,1,0,0,0,111,113,5,26,0,0,112,75,1,0,0,0,112,77,1,0,0,0,112,84,1,
0,0,0,113,114,1,0,0,0,114,115,5,24,0,0,115,3,1,0,0,0,116,120,5,3,0,0,117,
119,5,21,0,0,118,117,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,
0,0,121,126,1,0,0,0,122,120,1,0,0,0,123,125,5,22,0,0,124,123,1,0,0,0,125,
128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,153,1,0,0,0,128,126,1,0,
0,0,129,133,5,25,0,0,130,132,5,22,0,0,131,130,1,0,0,0,132,135,1,0,0,0,133,
131,1,0,0,0,133,134,1,0,0,0,134,139,1,0,0,0,135,133,1,0,0,0,136,138,7,1,
0,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,
145,1,0,0,0,141,139,1,0,0,0,142,144,5,22,0,0,143,142,1,0,0,0,144,147,1,0,
0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,
150,5,26,0,0,149,129,1,0,0,0,150,151,1,0,0,0,151,149,1,0,0,0,151,152,1,0,
0,0,152,154,1,0,0,0,153,149,1,0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,
156,5,24,0,0,156,5,1,0,0,0,157,161,5,7,0,0,158,160,5,21,0,0,159,158,1,0,
0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,167,1,0,0,0,163,
161,1,0,0,0,164,166,5,22,0,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,
0,0,167,168,1,0,0,0,168,190,1,0,0,0,169,167,1,0,0,0,170,174,5,25,0,0,171,
173,5,22,0,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,
0,0,175,180,1,0,0,0,176,174,1,0,0,0,177,179,7,2,0,0,178,177,1,0,0,0,179,
182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,186,1,0,0,0,182,180,1,0,
0,0,183,185,5,22,0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,
187,1,0,0,0,187,189,1,0,0,0,188,186,1,0,0,0,189,191,5,26,0,0,190,170,1,0,
0,0,191,192,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,
195,5,24,0,0,195,7,1,0,0,0,196,197,5,7,0,0,197,201,5,9,0,0,198,200,5,22,
0,0,199,198,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,
204,1,0,0,0,203,201,1,0,0,0,204,208,5,25,0,0,205,207,5,22,0,0,206,205,1,
0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,229,1,0,0,0,210,
208,1,0,0,0,211,215,5,10,0,0,212,214,5,22,0,0,213,212,1,0,0,0,214,217,1,
0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,218,
220,5,27,0,0,219,218,1,0,0,0,219,220,1,0,0,0,220,224,1,0,0,0,221,223,5,22,
0,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,
228,1,0,0,0,226,224,1,0,0,0,227,211,1,0,0,0,228,231,1,0,0,0,229,227,1,0,
0,0,229,230,1,0,0,0,230,235,1,0,0,0,231,229,1,0,0,0,232,234,5,22,0,0,233,
232,1,0,0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,
0,0,237,235,1,0,0,0,238,239,5,26,0,0,239,240,5,24,0,0,240,9,1,0,0,0,241,
245,5,11,0,0,242,244,5,22,0,0,243,242,1,0,0,0,244,247,1,0,0,0,245,243,1,
0,0,0,245,246,1,0,0,0,246,248,1,0,0,0,247,245,1,0,0,0,248,252,5,25,0,0,249,
251,3,12,6,0,250,249,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,
0,0,253,255,1,0,0,0,254,252,1,0,0,0,255,256,5,26,0,0,256,257,5,24,0,0,257,
11,1,0,0,0,258,272,3,2,1,0,259,272,3,4,2,0,260,272,3,6,3,0,261,262,5,13,
0,0,262,266,5,24,0,0,263,265,5,22,0,0,264,263,1,0,0,0,265,268,1,0,0,0,266,
264,1,0,0,0,266,267,1,0,0,0,267,272,1,0,0,0,268,266,1,0,0,0,269,272,3,18,
9,0,270,272,3,14,7,0,271,258,1,0,0,0,271,259,1,0,0,0,271,260,1,0,0,0,271,
261,1,0,0,0,271,269,1,0,0,0,271,270,1,0,0,0,272,13,1,0,0,0,273,277,5,12,
0,0,274,276,5,22,0,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,
278,1,0,0,0,278,280,1,0,0,0,279,277,1,0,0,0,280,284,5,25,0,0,281,283,3,16,
8,0,282,281,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,
290,1,0,0,0,286,284,1,0,0,0,287,289,5,22,0,0,288,287,1,0,0,0,289,292,1,0,
0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,293,1,0,0,0,292,290,1,0,0,0,293,
294,5,26,0,0,294,15,1,0,0,0,295,298,3,14,7,0,296,298,3,12,6,0,297,295,1,
0,0,0,297,296,1,0,0,0,298,17,1,0,0,0,299,301,5,21,0,0,300,299,1,0,0,0,301,
304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,308,1,0,0,0,304,302,1,0,
0,0,305,307,5,22,0,0,306,305,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,
309,1,0,0,0,309,311,1,0,0,0,310,308,1,0,0,0,311,315,5,17,0,0,312,314,5,22,
0,0,313,312,1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,
321,1,0,0,0,317,315,1,0,0,0,318,320,5,21,0,0,319,318,1,0,0,0,320,323,1,0,
0,0,321,319,1,0,0,0,321,322,1,0,0,0,322,324,1,0,0,0,323,321,1,0,0,0,324,
325,5,24,0,0,325,19,1,0,0,0,326,327,5,13,0,0,327,328,5,24,0,0,328,21,1,0,
0,0,47,31,33,42,48,55,61,67,73,75,81,88,95,102,108,112,120,126,133,139,145,
151,153,161,167,174,180,186,192,201,208,215,219,224,229,235,245,252,266,
271,277,284,290,297,302,308,315,321];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "':'", 
                            null, "'{'", "'}'" ];
    static symbolicNames = [ null, "TASK_PROJ", "TASK_PROJ_FIELDS", "USER", 
                             "USER_FIELDS", "NAME_FIELD", "TASK_FIELD", 
                             "SET", "SET_FIELDS", "DEPS", "SET_DEPS", "FUNC", 
                             "COND", "CONDITIONALS", "COMP", "FUNC_INVK", 
                             "ANDOR", "EQ", "COMMENT", "TEXTARROW", "NUM", 
                             "TEXT", "WS", "COLON", "SC", "OB", "CB", "COMMA", 
                             "ORB", "CRB", "QUOTED_TEXT" ];
    static ruleNames = [ "program", "taskProject", "user_decl", "set_decl", 
                         "set_deps", "func_decl", "func_fields", "condition", 
                         "statement", "var_set", "func_invk" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TaskProjectParser.ruleNames;
        this.literalNames = TaskProjectParser.literalNames;
        this.symbolicNames = TaskProjectParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TaskProjectParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6437002) !== 0)) {
	            this.state = 31;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 22;
	                this.taskProject();
	                break;

	            case 2:
	                this.state = 23;
	                this.user_decl();
	                break;

	            case 3:
	                this.state = 24;
	                this.set_decl();
	                break;

	            case 4:
	                this.state = 25;
	                this.set_deps();
	                break;

	            case 5:
	                this.state = 26;
	                this.func_decl();
	                break;

	            case 6:
	                this.state = 27;
	                this.func_invk();
	                break;

	            case 7:
	                this.state = 28;
	                this.match(TaskProjectParser.COND);
	                this.state = 29;
	                this.match(TaskProjectParser.SC);
	                break;

	            case 8:
	                this.state = 30;
	                this.var_set();
	                break;

	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(TaskProjectParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	taskProject() {
	    let localctx = new TaskProjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TaskProjectParser.RULE_taskProject);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(TaskProjectParser.TASK_PROJ);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 39;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 45;
	            this.match(TaskProjectParser.WS);
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 71; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 51;
	                    this.match(TaskProjectParser.OB);
	                    this.state = 55;
	                    this._errHandler.sync(this);
	                    var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                        if(_alt===1) {
	                            this.state = 52;
	                            this.match(TaskProjectParser.WS); 
	                        }
	                        this.state = 57;
	                        this._errHandler.sync(this);
	                        _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	                    }

	                    this.state = 61;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while((((_la) & ~0x1f) === 0 && ((1 << _la) & 100) !== 0)) {
	                        this.state = 58;
	                        _la = this._input.LA(1);
	                        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 100) !== 0))) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                        this.state = 63;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    this.state = 67;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===22) {
	                        this.state = 64;
	                        this.match(TaskProjectParser.WS);
	                        this.state = 69;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    this.state = 70;
	                    this.match(TaskProjectParser.CB);
	                    this.state = 73; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===25);
	            }

	            break;

	        case 2:
	            this.state = 77;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===22) {
	                this.state = 78;
	                this.match(TaskProjectParser.WS);
	                this.state = 83;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 3:
	            this.state = 84;
	            this.match(TaskProjectParser.OB);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===22) {
	                this.state = 85;
	                this.match(TaskProjectParser.WS);
	                this.state = 90;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 91;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===22) {
	                this.state = 92;
	                this.match(TaskProjectParser.WS);
	                this.state = 97;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===27) {
	                this.state = 98;
	                this.match(TaskProjectParser.COMMA);
	                this.state = 102;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===22) {
	                    this.state = 99;
	                    this.match(TaskProjectParser.WS);
	                    this.state = 104;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 105;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 110;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 111;
	            this.match(TaskProjectParser.CB);
	            break;

	        }
	        this.state = 114;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user_decl() {
	    let localctx = new User_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TaskProjectParser.RULE_user_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(TaskProjectParser.USER);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 117;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 123;
	            this.match(TaskProjectParser.WS);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 149; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 129;
	                this.match(TaskProjectParser.OB);
	                this.state = 133;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 130;
	                        this.match(TaskProjectParser.WS); 
	                    }
	                    this.state = 135;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	                }

	                this.state = 139;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0)) {
	                    this.state = 136;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 141;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 145;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===22) {
	                    this.state = 142;
	                    this.match(TaskProjectParser.WS);
	                    this.state = 147;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 148;
	                this.match(TaskProjectParser.CB);
	                this.state = 151; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===25);
	        }

	        this.state = 155;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set_decl() {
	    let localctx = new Set_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TaskProjectParser.RULE_set_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(TaskProjectParser.SET);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 158;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 164;
	            this.match(TaskProjectParser.WS);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 170;
	            this.match(TaskProjectParser.OB);
	            this.state = 174;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 171;
	                    this.match(TaskProjectParser.WS); 
	                }
	                this.state = 176;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 116) !== 0)) {
	                this.state = 177;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 116) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===22) {
	                this.state = 183;
	                this.match(TaskProjectParser.WS);
	                this.state = 188;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 189;
	            this.match(TaskProjectParser.CB);
	            this.state = 192; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===25);
	        this.state = 194;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set_deps() {
	    let localctx = new Set_depsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TaskProjectParser.RULE_set_deps);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(TaskProjectParser.SET);
	        this.state = 197;
	        this.match(TaskProjectParser.DEPS);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 198;
	            this.match(TaskProjectParser.WS);
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 204;
	        this.match(TaskProjectParser.OB);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 205;
	                this.match(TaskProjectParser.WS); 
	            }
	            this.state = 210;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 211;
	            this.match(TaskProjectParser.SET_DEPS);
	            this.state = 215;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 212;
	                    this.match(TaskProjectParser.WS); 
	                }
	                this.state = 217;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	            }

	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 218;
	                this.match(TaskProjectParser.COMMA);
	            }

	            this.state = 224;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 221;
	                    this.match(TaskProjectParser.WS); 
	                }
	                this.state = 226;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	            }

	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 232;
	            this.match(TaskProjectParser.WS);
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 238;
	        this.match(TaskProjectParser.CB);
	        this.state = 239;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_decl() {
	    let localctx = new Func_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TaskProjectParser.RULE_func_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(TaskProjectParser.FUNC);
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 242;
	            this.match(TaskProjectParser.WS);
	            this.state = 247;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 248;
	        this.match(TaskProjectParser.OB);
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6434954) !== 0)) {
	            this.state = 249;
	            this.func_fields();
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 255;
	        this.match(TaskProjectParser.CB);
	        this.state = 256;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_fields() {
	    let localctx = new Func_fieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TaskProjectParser.RULE_func_fields);
	    try {
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.taskProject();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 259;
	            this.user_decl();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 260;
	            this.set_decl();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 261;
	            this.match(TaskProjectParser.CONDITIONALS);
	            this.state = 262;
	            this.match(TaskProjectParser.SC);
	            this.state = 266;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 263;
	                    this.match(TaskProjectParser.WS); 
	                }
	                this.state = 268;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
	            }

	            break;
	        case 17:
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 269;
	            this.var_set();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 270;
	            this.condition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TaskProjectParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(TaskProjectParser.COND);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 274;
	            this.match(TaskProjectParser.WS);
	            this.state = 279;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 280;
	        this.match(TaskProjectParser.OB);
	        this.state = 284;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 281;
	                this.statement(); 
	            }
	            this.state = 286;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	        }

	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 287;
	            this.match(TaskProjectParser.WS);
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 293;
	        this.match(TaskProjectParser.CB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TaskProjectParser.RULE_statement);
	    try {
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            this.condition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
	            this.func_fields();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_set() {
	    let localctx = new Var_setContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TaskProjectParser.RULE_var_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 299;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 304;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 308;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 305;
	            this.match(TaskProjectParser.WS);
	            this.state = 310;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 311;
	        this.match(TaskProjectParser.EQ);
	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 312;
	            this.match(TaskProjectParser.WS);
	            this.state = 317;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 318;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 324;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_invk() {
	    let localctx = new Func_invkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TaskProjectParser.RULE_func_invk);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.match(TaskProjectParser.CONDITIONALS);
	        this.state = 327;
	        this.match(TaskProjectParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TaskProjectParser.EOF = antlr4.Token.EOF;
TaskProjectParser.TASK_PROJ = 1;
TaskProjectParser.TASK_PROJ_FIELDS = 2;
TaskProjectParser.USER = 3;
TaskProjectParser.USER_FIELDS = 4;
TaskProjectParser.NAME_FIELD = 5;
TaskProjectParser.TASK_FIELD = 6;
TaskProjectParser.SET = 7;
TaskProjectParser.SET_FIELDS = 8;
TaskProjectParser.DEPS = 9;
TaskProjectParser.SET_DEPS = 10;
TaskProjectParser.FUNC = 11;
TaskProjectParser.COND = 12;
TaskProjectParser.CONDITIONALS = 13;
TaskProjectParser.COMP = 14;
TaskProjectParser.FUNC_INVK = 15;
TaskProjectParser.ANDOR = 16;
TaskProjectParser.EQ = 17;
TaskProjectParser.COMMENT = 18;
TaskProjectParser.TEXTARROW = 19;
TaskProjectParser.NUM = 20;
TaskProjectParser.TEXT = 21;
TaskProjectParser.WS = 22;
TaskProjectParser.COLON = 23;
TaskProjectParser.SC = 24;
TaskProjectParser.OB = 25;
TaskProjectParser.CB = 26;
TaskProjectParser.COMMA = 27;
TaskProjectParser.ORB = 28;
TaskProjectParser.CRB = 29;
TaskProjectParser.QUOTED_TEXT = 30;

TaskProjectParser.RULE_program = 0;
TaskProjectParser.RULE_taskProject = 1;
TaskProjectParser.RULE_user_decl = 2;
TaskProjectParser.RULE_set_decl = 3;
TaskProjectParser.RULE_set_deps = 4;
TaskProjectParser.RULE_func_decl = 5;
TaskProjectParser.RULE_func_fields = 6;
TaskProjectParser.RULE_condition = 7;
TaskProjectParser.RULE_statement = 8;
TaskProjectParser.RULE_var_set = 9;
TaskProjectParser.RULE_func_invk = 10;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_program;
    }

	EOF() {
	    return this.getToken(TaskProjectParser.EOF, 0);
	};

	taskProject = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TaskProjectContext);
	    } else {
	        return this.getTypedRuleContext(TaskProjectContext,i);
	    }
	};

	user_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(User_declContext);
	    } else {
	        return this.getTypedRuleContext(User_declContext,i);
	    }
	};

	set_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Set_declContext);
	    } else {
	        return this.getTypedRuleContext(Set_declContext,i);
	    }
	};

	set_deps = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Set_depsContext);
	    } else {
	        return this.getTypedRuleContext(Set_depsContext,i);
	    }
	};

	func_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_declContext);
	    } else {
	        return this.getTypedRuleContext(Func_declContext,i);
	    }
	};

	func_invk = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_invkContext);
	    } else {
	        return this.getTypedRuleContext(Func_invkContext,i);
	    }
	};

	COND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COND);
	    } else {
	        return this.getToken(TaskProjectParser.COND, i);
	    }
	};


	SC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.SC);
	    } else {
	        return this.getToken(TaskProjectParser.SC, i);
	    }
	};


	var_set = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Var_setContext);
	    } else {
	        return this.getTypedRuleContext(Var_setContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProgram(this);
		}
	}


}



class TaskProjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_taskProject;
    }

	TASK_PROJ() {
	    return this.getToken(TaskProjectParser.TASK_PROJ, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	OB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.OB);
	    } else {
	        return this.getToken(TaskProjectParser.OB, i);
	    }
	};


	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TEXT);
	    } else {
	        return this.getToken(TaskProjectParser.TEXT, i);
	    }
	};


	CB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.CB);
	    } else {
	        return this.getToken(TaskProjectParser.CB, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	TASK_PROJ_FIELDS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TASK_PROJ_FIELDS);
	    } else {
	        return this.getToken(TaskProjectParser.TASK_PROJ_FIELDS, i);
	    }
	};


	NAME_FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.NAME_FIELD);
	    } else {
	        return this.getToken(TaskProjectParser.NAME_FIELD, i);
	    }
	};


	TASK_FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TASK_FIELD);
	    } else {
	        return this.getToken(TaskProjectParser.TASK_FIELD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterTaskProject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTaskProject(this);
		}
	}


}



class User_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_user_decl;
    }

	USER() {
	    return this.getToken(TaskProjectParser.USER, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TEXT);
	    } else {
	        return this.getToken(TaskProjectParser.TEXT, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	OB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.OB);
	    } else {
	        return this.getToken(TaskProjectParser.OB, i);
	    }
	};


	CB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.CB);
	    } else {
	        return this.getToken(TaskProjectParser.CB, i);
	    }
	};


	USER_FIELDS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.USER_FIELDS);
	    } else {
	        return this.getToken(TaskProjectParser.USER_FIELDS, i);
	    }
	};


	NAME_FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.NAME_FIELD);
	    } else {
	        return this.getToken(TaskProjectParser.NAME_FIELD, i);
	    }
	};


	TASK_FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TASK_FIELD);
	    } else {
	        return this.getToken(TaskProjectParser.TASK_FIELD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterUser_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUser_decl(this);
		}
	}


}



class Set_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_set_decl;
    }

	SET() {
	    return this.getToken(TaskProjectParser.SET, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TEXT);
	    } else {
	        return this.getToken(TaskProjectParser.TEXT, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	OB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.OB);
	    } else {
	        return this.getToken(TaskProjectParser.OB, i);
	    }
	};


	CB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.CB);
	    } else {
	        return this.getToken(TaskProjectParser.CB, i);
	    }
	};


	USER_FIELDS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.USER_FIELDS);
	    } else {
	        return this.getToken(TaskProjectParser.USER_FIELDS, i);
	    }
	};


	NAME_FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.NAME_FIELD);
	    } else {
	        return this.getToken(TaskProjectParser.NAME_FIELD, i);
	    }
	};


	TASK_FIELD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TASK_FIELD);
	    } else {
	        return this.getToken(TaskProjectParser.TASK_FIELD, i);
	    }
	};


	TASK_PROJ_FIELDS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TASK_PROJ_FIELDS);
	    } else {
	        return this.getToken(TaskProjectParser.TASK_PROJ_FIELDS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSet_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSet_decl(this);
		}
	}


}



class Set_depsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_set_deps;
    }

	SET() {
	    return this.getToken(TaskProjectParser.SET, 0);
	};

	DEPS() {
	    return this.getToken(TaskProjectParser.DEPS, 0);
	};

	OB() {
	    return this.getToken(TaskProjectParser.OB, 0);
	};

	CB() {
	    return this.getToken(TaskProjectParser.CB, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	SET_DEPS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.SET_DEPS);
	    } else {
	        return this.getToken(TaskProjectParser.SET_DEPS, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.COMMA);
	    } else {
	        return this.getToken(TaskProjectParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSet_deps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSet_deps(this);
		}
	}


}



class Func_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_func_decl;
    }

	FUNC() {
	    return this.getToken(TaskProjectParser.FUNC, 0);
	};

	OB() {
	    return this.getToken(TaskProjectParser.OB, 0);
	};

	CB() {
	    return this.getToken(TaskProjectParser.CB, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	func_fields = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_fieldsContext);
	    } else {
	        return this.getTypedRuleContext(Func_fieldsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFunc_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFunc_decl(this);
		}
	}


}



class Func_fieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_func_fields;
    }

	taskProject() {
	    return this.getTypedRuleContext(TaskProjectContext,0);
	};

	user_decl() {
	    return this.getTypedRuleContext(User_declContext,0);
	};

	set_decl() {
	    return this.getTypedRuleContext(Set_declContext,0);
	};

	CONDITIONALS() {
	    return this.getToken(TaskProjectParser.CONDITIONALS, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	var_set() {
	    return this.getTypedRuleContext(Var_setContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFunc_fields(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFunc_fields(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_condition;
    }

	COND() {
	    return this.getToken(TaskProjectParser.COND, 0);
	};

	OB() {
	    return this.getToken(TaskProjectParser.OB, 0);
	};

	CB() {
	    return this.getToken(TaskProjectParser.CB, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitCondition(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_statement;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	func_fields() {
	    return this.getTypedRuleContext(Func_fieldsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Var_setContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_var_set;
    }

	EQ() {
	    return this.getToken(TaskProjectParser.EQ, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.TEXT);
	    } else {
	        return this.getToken(TaskProjectParser.TEXT, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.WS);
	    } else {
	        return this.getToken(TaskProjectParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterVar_set(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitVar_set(this);
		}
	}


}



class Func_invkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_func_invk;
    }

	CONDITIONALS() {
	    return this.getToken(TaskProjectParser.CONDITIONALS, 0);
	};

	SC() {
	    return this.getToken(TaskProjectParser.SC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterFunc_invk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitFunc_invk(this);
		}
	}


}




TaskProjectParser.ProgramContext = ProgramContext; 
TaskProjectParser.TaskProjectContext = TaskProjectContext; 
TaskProjectParser.User_declContext = User_declContext; 
TaskProjectParser.Set_declContext = Set_declContext; 
TaskProjectParser.Set_depsContext = Set_depsContext; 
TaskProjectParser.Func_declContext = Func_declContext; 
TaskProjectParser.Func_fieldsContext = Func_fieldsContext; 
TaskProjectParser.ConditionContext = ConditionContext; 
TaskProjectParser.StatementContext = StatementContext; 
TaskProjectParser.Var_setContext = Var_setContext; 
TaskProjectParser.Func_invkContext = Func_invkContext; 
