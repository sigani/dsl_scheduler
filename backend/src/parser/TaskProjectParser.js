// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
import TaskProjectParserVisitor from './TaskProjectParserVisitor.js';

const serializedATN = [4,1,30,313,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,0,1,0,1,0,1,0,5,0,70,
8,0,10,0,12,0,73,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,81,8,1,1,1,1,1,1,2,1,2,
1,2,1,2,5,2,89,8,2,10,2,12,2,92,9,2,1,2,1,2,1,2,1,2,3,2,98,8,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,109,8,3,1,4,1,4,1,4,1,4,1,4,3,4,116,8,4,1,
4,1,4,1,5,1,5,1,5,1,5,5,5,124,8,5,10,5,12,5,127,9,5,1,5,1,5,1,5,1,5,3,5,
133,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,145,8,6,1,7,1,7,1,7,
1,7,3,7,151,8,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,159,8,8,10,8,12,8,162,9,8,1,
8,1,8,1,8,1,8,3,8,168,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,177,8,9,1,10,1,
10,1,10,1,10,1,10,1,10,5,10,185,8,10,10,10,12,10,188,9,10,1,10,1,10,1,10,
1,10,3,10,194,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,3,11,210,8,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,218,8,12,
10,12,12,12,221,9,12,1,12,1,12,1,12,1,12,3,12,227,8,12,1,12,1,12,1,12,1,
13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,
1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,
22,1,23,1,23,1,23,1,23,1,23,5,23,267,8,23,10,23,12,23,270,9,23,1,23,1,23,
1,23,1,23,3,23,276,8,23,1,23,1,23,1,24,1,24,1,24,5,24,283,8,24,10,24,12,
24,286,9,24,1,24,1,24,1,24,3,24,291,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,
26,1,26,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,31,
0,0,32,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,0,0,330,0,71,1,0,0,0,2,76,1,0,0,0,4,84,1,0,0,0,6,
108,1,0,0,0,8,110,1,0,0,0,10,119,1,0,0,0,12,144,1,0,0,0,14,146,1,0,0,0,16,
154,1,0,0,0,18,176,1,0,0,0,20,178,1,0,0,0,22,209,1,0,0,0,24,211,1,0,0,0,
26,231,1,0,0,0,28,234,1,0,0,0,30,237,1,0,0,0,32,240,1,0,0,0,34,243,1,0,0,
0,36,246,1,0,0,0,38,249,1,0,0,0,40,252,1,0,0,0,42,255,1,0,0,0,44,258,1,0,
0,0,46,261,1,0,0,0,48,279,1,0,0,0,50,294,1,0,0,0,52,298,1,0,0,0,54,300,1,
0,0,0,56,302,1,0,0,0,58,306,1,0,0,0,60,308,1,0,0,0,62,310,1,0,0,0,64,70,
3,2,1,0,65,70,3,8,4,0,66,70,3,14,7,0,67,70,3,20,10,0,68,70,3,24,12,0,69,
64,1,0,0,0,69,65,1,0,0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,73,
1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,
0,0,1,75,1,1,0,0,0,76,77,5,2,0,0,77,80,3,62,31,0,78,81,5,19,0,0,79,81,3,
4,2,0,80,78,1,0,0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,83,5,22,0,0,83,3,1,0,
0,0,84,90,5,24,0,0,85,86,3,6,3,0,86,87,5,23,0,0,87,89,1,0,0,0,88,85,1,0,
0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,97,1,0,0,0,92,90,1,0,0,
0,93,94,3,6,3,0,94,95,5,23,0,0,95,98,1,0,0,0,96,98,3,6,3,0,97,93,1,0,0,0,
97,96,1,0,0,0,98,99,1,0,0,0,99,100,5,25,0,0,100,5,1,0,0,0,101,109,3,26,13,
0,102,109,3,28,14,0,103,109,3,30,15,0,104,109,3,32,16,0,105,109,3,34,17,
0,106,109,3,38,19,0,107,109,3,40,20,0,108,101,1,0,0,0,108,102,1,0,0,0,108,
103,1,0,0,0,108,104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,
0,0,109,7,1,0,0,0,110,111,5,3,0,0,111,115,3,62,31,0,112,116,5,19,0,0,113,
116,3,10,5,0,114,116,3,48,24,0,115,112,1,0,0,0,115,113,1,0,0,0,115,114,1,
0,0,0,116,117,1,0,0,0,117,118,5,22,0,0,118,9,1,0,0,0,119,125,5,24,0,0,120,
121,3,12,6,0,121,122,5,23,0,0,122,124,1,0,0,0,123,120,1,0,0,0,124,127,1,
0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,132,1,0,0,0,127,125,1,0,0,0,128,
129,3,12,6,0,129,130,5,23,0,0,130,133,1,0,0,0,131,133,3,12,6,0,132,128,1,
0,0,0,132,131,1,0,0,0,133,134,1,0,0,0,134,135,5,25,0,0,135,11,1,0,0,0,136,
145,3,26,13,0,137,145,3,28,14,0,138,145,3,30,15,0,139,145,3,32,16,0,140,
145,3,34,17,0,141,145,3,38,19,0,142,145,3,40,20,0,143,145,3,42,21,0,144,
136,1,0,0,0,144,137,1,0,0,0,144,138,1,0,0,0,144,139,1,0,0,0,144,140,1,0,
0,0,144,141,1,0,0,0,144,142,1,0,0,0,144,143,1,0,0,0,145,13,1,0,0,0,146,147,
5,4,0,0,147,150,3,62,31,0,148,151,5,19,0,0,149,151,3,16,8,0,150,148,1,0,
0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,153,5,22,0,0,153,15,1,0,0,0,154,
160,5,24,0,0,155,156,3,18,9,0,156,157,5,23,0,0,157,159,1,0,0,0,158,155,1,
0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,167,1,0,0,0,162,
160,1,0,0,0,163,164,3,18,9,0,164,165,5,23,0,0,165,168,1,0,0,0,166,168,3,
18,9,0,167,163,1,0,0,0,167,166,1,0,0,0,168,169,1,0,0,0,169,170,5,25,0,0,
170,17,1,0,0,0,171,177,3,26,13,0,172,177,3,36,18,0,173,177,3,42,21,0,174,
177,3,44,22,0,175,177,3,46,23,0,176,171,1,0,0,0,176,172,1,0,0,0,176,173,
1,0,0,0,176,174,1,0,0,0,176,175,1,0,0,0,177,19,1,0,0,0,178,179,5,16,0,0,
179,180,3,62,31,0,180,186,5,24,0,0,181,182,3,22,11,0,182,183,5,23,0,0,183,
185,1,0,0,0,184,181,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,
0,0,187,193,1,0,0,0,188,186,1,0,0,0,189,190,3,22,11,0,190,191,5,23,0,0,191,
194,1,0,0,0,192,194,3,22,11,0,193,189,1,0,0,0,193,192,1,0,0,0,194,195,1,
0,0,0,195,196,5,25,0,0,196,197,5,22,0,0,197,21,1,0,0,0,198,210,3,26,13,0,
199,210,3,28,14,0,200,210,3,30,15,0,201,210,3,32,16,0,202,210,3,34,17,0,
203,210,3,36,18,0,204,210,3,38,19,0,205,210,3,40,20,0,206,210,3,42,21,0,
207,210,3,44,22,0,208,210,3,46,23,0,209,198,1,0,0,0,209,199,1,0,0,0,209,
200,1,0,0,0,209,201,1,0,0,0,209,202,1,0,0,0,209,203,1,0,0,0,209,204,1,0,
0,0,209,205,1,0,0,0,209,206,1,0,0,0,209,207,1,0,0,0,209,208,1,0,0,0,210,
23,1,0,0,0,211,212,5,16,0,0,212,213,5,17,0,0,213,219,5,24,0,0,214,215,3,
56,28,0,215,216,5,23,0,0,216,218,1,0,0,0,217,214,1,0,0,0,218,221,1,0,0,0,
219,217,1,0,0,0,219,220,1,0,0,0,220,226,1,0,0,0,221,219,1,0,0,0,222,223,
3,56,28,0,223,224,5,23,0,0,224,227,1,0,0,0,225,227,3,56,28,0,226,222,1,0,
0,0,226,225,1,0,0,0,227,228,1,0,0,0,228,229,5,25,0,0,229,230,5,22,0,0,230,
25,1,0,0,0,231,232,5,5,0,0,232,233,5,19,0,0,233,27,1,0,0,0,234,235,5,6,0,
0,235,236,5,19,0,0,236,29,1,0,0,0,237,238,5,7,0,0,238,239,5,19,0,0,239,31,
1,0,0,0,240,241,5,8,0,0,241,242,5,19,0,0,242,33,1,0,0,0,243,244,5,9,0,0,
244,245,5,20,0,0,245,35,1,0,0,0,246,247,5,12,0,0,247,248,5,19,0,0,248,37,
1,0,0,0,249,250,5,10,0,0,250,251,3,48,24,0,251,39,1,0,0,0,252,253,5,11,0,
0,253,254,3,48,24,0,254,41,1,0,0,0,255,256,5,13,0,0,256,257,3,48,24,0,257,
43,1,0,0,0,258,259,5,14,0,0,259,260,3,48,24,0,260,45,1,0,0,0,261,262,5,15,
0,0,262,268,5,24,0,0,263,264,3,50,25,0,264,265,5,23,0,0,265,267,1,0,0,0,
266,263,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,275,
1,0,0,0,270,268,1,0,0,0,271,272,3,50,25,0,272,273,5,23,0,0,273,276,1,0,0,
0,274,276,3,50,25,0,275,271,1,0,0,0,275,274,1,0,0,0,276,277,1,0,0,0,277,
278,5,25,0,0,278,47,1,0,0,0,279,284,5,24,0,0,280,281,5,18,0,0,281,283,5,
23,0,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,
290,1,0,0,0,286,284,1,0,0,0,287,288,5,18,0,0,288,291,5,23,0,0,289,291,5,
18,0,0,290,287,1,0,0,0,290,289,1,0,0,0,291,292,1,0,0,0,292,293,5,25,0,0,
293,49,1,0,0,0,294,295,3,52,26,0,295,296,5,21,0,0,296,297,3,54,27,0,297,
51,1,0,0,0,298,299,5,19,0,0,299,53,1,0,0,0,300,301,5,19,0,0,301,55,1,0,0,
0,302,303,3,58,29,0,303,304,5,28,0,0,304,305,3,60,30,0,305,57,1,0,0,0,306,
307,5,18,0,0,307,59,1,0,0,0,308,309,5,18,0,0,309,61,1,0,0,0,310,311,5,18,
0,0,311,63,1,0,0,0,23,69,71,80,90,97,108,115,125,132,144,150,160,167,176,
186,193,209,219,226,268,275,284,290];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "':'", "';'", 
                            "','", "'{'", "'}'", "'('", "')'", "'->'" ];
    static symbolicNames = [ null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", 
                             "USER_DEF", "NAME", "DESCRIPTION", "DEADLINE", 
                             "STATUS", "PRIORITY", "DEPS", "USERS", "EMAIL", 
                             "TASKS", "PROJECTS", "ADDITIONAL", "SET", "SET_DEPS", 
                             "TEXT", "QUOTED_TEXT", "NUM", "COLON", "SEMICOLON", 
                             "COMMA", "OPEN_BRACES", "CLOSE_BRACES", "OPEN_PAREN", 
                             "CLOSE_PAREN", "ARROW", "SPACE", "NEWLINE" ];
    static ruleNames = [ "program", "task", "taskBody", "taskProperty", 
                         "project", "projectBody", "projectProperty", "user", 
                         "userBody", "userProperty", "set", "setProperty", 
                         "setDepsArrowNotation", "setName", "setDescription", 
                         "setDeadline", "setStatus", "setPriority", "setEmail", 
                         "setDeps", "setUsers", "setTasks", "setProjects", 
                         "setAdditional", "array", "additional", "additionalKey", 
                         "additionalValue", "depsArrow", "left", "right", 
                         "varname" ];

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
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65564) !== 0)) {
	            this.state = 69;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 64;
	                this.task();
	                break;

	            case 2:
	                this.state = 65;
	                this.project();
	                break;

	            case 3:
	                this.state = 66;
	                this.user();
	                break;

	            case 4:
	                this.state = 67;
	                this.set();
	                break;

	            case 5:
	                this.state = 68;
	                this.setDepsArrowNotation();
	                break;

	            }
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
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



	task() {
	    let localctx = new TaskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TaskProjectParser.RULE_task);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(TaskProjectParser.TASK_DEF);
	        this.state = 77;
	        this.varname();
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 78;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 24:
	            this.state = 79;
	            this.taskBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 82;
	        this.match(TaskProjectParser.SEMICOLON);
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



	taskBody() {
	    let localctx = new TaskBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TaskProjectParser.RULE_taskBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 85;
	                this.taskProperty();
	                this.state = 86;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 93;
	            this.taskProperty();
	            this.state = 94;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 96;
	            this.taskProperty();
	            break;

	        }
	        this.state = 99;
	        this.match(TaskProjectParser.CLOSE_BRACES);
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



	taskProperty() {
	    let localctx = new TaskPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TaskProjectParser.RULE_taskProperty);
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 105;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 106;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 107;
	            this.setUsers();
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



	project() {
	    let localctx = new ProjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TaskProjectParser.RULE_project);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(TaskProjectParser.PROJECT_DEF);
	        this.state = 111;
	        this.varname();
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 112;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;

	        case 2:
	            this.state = 113;
	            this.projectBody();
	            break;

	        case 3:
	            this.state = 114;
	            this.array();
	            break;

	        }
	        this.state = 117;
	        this.match(TaskProjectParser.SEMICOLON);
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



	projectBody() {
	    let localctx = new ProjectBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TaskProjectParser.RULE_projectBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 125;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 120;
	                this.projectProperty();
	                this.state = 121;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 127;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 128;
	            this.projectProperty();
	            this.state = 129;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 131;
	            this.projectProperty();
	            break;

	        }
	        this.state = 134;
	        this.match(TaskProjectParser.CLOSE_BRACES);
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



	projectProperty() {
	    let localctx = new ProjectPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TaskProjectParser.RULE_projectProperty);
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 139;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 140;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 141;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 142;
	            this.setUsers();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 143;
	            this.setTasks();
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



	user() {
	    let localctx = new UserContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TaskProjectParser.RULE_user);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(TaskProjectParser.USER_DEF);
	        this.state = 147;
	        this.varname();
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 148;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 24:
	            this.state = 149;
	            this.userBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 152;
	        this.match(TaskProjectParser.SEMICOLON);
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



	userBody() {
	    let localctx = new UserBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TaskProjectParser.RULE_userBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 160;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 155;
	                this.userProperty();
	                this.state = 156;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 162;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 163;
	            this.userProperty();
	            this.state = 164;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 166;
	            this.userProperty();
	            break;

	        }
	        this.state = 169;
	        this.match(TaskProjectParser.CLOSE_BRACES);
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



	userProperty() {
	    let localctx = new UserPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TaskProjectParser.RULE_userProperty);
	    try {
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.setName();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.setEmail();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 173;
	            this.setTasks();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 174;
	            this.setProjects();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 175;
	            this.setAdditional();
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



	set() {
	    let localctx = new SetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TaskProjectParser.RULE_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(TaskProjectParser.SET);
	        this.state = 179;
	        this.varname();
	        this.state = 180;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 186;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 181;
	                this.setProperty();
	                this.state = 182;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 188;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 193;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 189;
	            this.setProperty();
	            this.state = 190;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 192;
	            this.setProperty();
	            break;

	        }
	        this.state = 195;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	        this.state = 196;
	        this.match(TaskProjectParser.SEMICOLON);
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



	setProperty() {
	    let localctx = new SetPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TaskProjectParser.RULE_setProperty);
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 200;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 201;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 202;
	            this.setPriority();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 203;
	            this.setEmail();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 204;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 205;
	            this.setUsers();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 206;
	            this.setTasks();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 207;
	            this.setProjects();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 208;
	            this.setAdditional();
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



	setDepsArrowNotation() {
	    let localctx = new SetDepsArrowNotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TaskProjectParser.RULE_setDepsArrowNotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(TaskProjectParser.SET);
	        this.state = 212;
	        this.match(TaskProjectParser.SET_DEPS);
	        this.state = 213;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 219;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 214;
	                this.depsArrow();
	                this.state = 215;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 221;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 222;
	            this.depsArrow();
	            this.state = 223;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 225;
	            this.depsArrow();
	            break;

	        }
	        this.state = 228;
	        this.match(TaskProjectParser.CLOSE_BRACES);
	        this.state = 229;
	        this.match(TaskProjectParser.SEMICOLON);
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



	setName() {
	    let localctx = new SetNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TaskProjectParser.RULE_setName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(TaskProjectParser.NAME);
	        this.state = 232;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	setDescription() {
	    let localctx = new SetDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TaskProjectParser.RULE_setDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(TaskProjectParser.DESCRIPTION);
	        this.state = 235;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	setDeadline() {
	    let localctx = new SetDeadlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TaskProjectParser.RULE_setDeadline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(TaskProjectParser.DEADLINE);
	        this.state = 238;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	setStatus() {
	    let localctx = new SetStatusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TaskProjectParser.RULE_setStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(TaskProjectParser.STATUS);
	        this.state = 241;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	setPriority() {
	    let localctx = new SetPriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TaskProjectParser.RULE_setPriority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(TaskProjectParser.PRIORITY);
	        this.state = 244;
	        this.match(TaskProjectParser.NUM);
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



	setEmail() {
	    let localctx = new SetEmailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TaskProjectParser.RULE_setEmail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(TaskProjectParser.EMAIL);
	        this.state = 247;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	setDeps() {
	    let localctx = new SetDepsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TaskProjectParser.RULE_setDeps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(TaskProjectParser.DEPS);
	        this.state = 250;
	        this.array();
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



	setUsers() {
	    let localctx = new SetUsersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TaskProjectParser.RULE_setUsers);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(TaskProjectParser.USERS);
	        this.state = 253;
	        this.array();
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



	setTasks() {
	    let localctx = new SetTasksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, TaskProjectParser.RULE_setTasks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(TaskProjectParser.TASKS);
	        this.state = 256;
	        this.array();
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



	setProjects() {
	    let localctx = new SetProjectsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, TaskProjectParser.RULE_setProjects);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(TaskProjectParser.PROJECTS);
	        this.state = 259;
	        this.array();
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



	setAdditional() {
	    let localctx = new SetAdditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, TaskProjectParser.RULE_setAdditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(TaskProjectParser.ADDITIONAL);
	        this.state = 262;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 268;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 263;
	                this.additional();
	                this.state = 264;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 270;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 275;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 271;
	            this.additional();
	            this.state = 272;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 274;
	            this.additional();
	            break;

	        }
	        this.state = 277;
	        this.match(TaskProjectParser.CLOSE_BRACES);
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, TaskProjectParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 284;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 280;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 281;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 286;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 290;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 287;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 288;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 289;
	            this.match(TaskProjectParser.TEXT);
	            break;

	        }
	        this.state = 292;
	        this.match(TaskProjectParser.CLOSE_BRACES);
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



	additional() {
	    let localctx = new AdditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, TaskProjectParser.RULE_additional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.additionalKey();
	        this.state = 295;
	        this.match(TaskProjectParser.COLON);
	        this.state = 296;
	        this.additionalValue();
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



	additionalKey() {
	    let localctx = new AdditionalKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, TaskProjectParser.RULE_additionalKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	additionalValue() {
	    let localctx = new AdditionalValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, TaskProjectParser.RULE_additionalValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(TaskProjectParser.QUOTED_TEXT);
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



	depsArrow() {
	    let localctx = new DepsArrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, TaskProjectParser.RULE_depsArrow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.left();
	        this.state = 303;
	        this.match(TaskProjectParser.ARROW);
	        this.state = 304;
	        this.right();
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



	left() {
	    let localctx = new LeftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, TaskProjectParser.RULE_left);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(TaskProjectParser.TEXT);
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



	right() {
	    let localctx = new RightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, TaskProjectParser.RULE_right);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(TaskProjectParser.TEXT);
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



	varname() {
	    let localctx = new VarnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, TaskProjectParser.RULE_varname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(TaskProjectParser.TEXT);
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
TaskProjectParser.LEADING_SPACE = 1;
TaskProjectParser.TASK_DEF = 2;
TaskProjectParser.PROJECT_DEF = 3;
TaskProjectParser.USER_DEF = 4;
TaskProjectParser.NAME = 5;
TaskProjectParser.DESCRIPTION = 6;
TaskProjectParser.DEADLINE = 7;
TaskProjectParser.STATUS = 8;
TaskProjectParser.PRIORITY = 9;
TaskProjectParser.DEPS = 10;
TaskProjectParser.USERS = 11;
TaskProjectParser.EMAIL = 12;
TaskProjectParser.TASKS = 13;
TaskProjectParser.PROJECTS = 14;
TaskProjectParser.ADDITIONAL = 15;
TaskProjectParser.SET = 16;
TaskProjectParser.SET_DEPS = 17;
TaskProjectParser.TEXT = 18;
TaskProjectParser.QUOTED_TEXT = 19;
TaskProjectParser.NUM = 20;
TaskProjectParser.COLON = 21;
TaskProjectParser.SEMICOLON = 22;
TaskProjectParser.COMMA = 23;
TaskProjectParser.OPEN_BRACES = 24;
TaskProjectParser.CLOSE_BRACES = 25;
TaskProjectParser.OPEN_PAREN = 26;
TaskProjectParser.CLOSE_PAREN = 27;
TaskProjectParser.ARROW = 28;
TaskProjectParser.SPACE = 29;
TaskProjectParser.NEWLINE = 30;

TaskProjectParser.RULE_program = 0;
TaskProjectParser.RULE_task = 1;
TaskProjectParser.RULE_taskBody = 2;
TaskProjectParser.RULE_taskProperty = 3;
TaskProjectParser.RULE_project = 4;
TaskProjectParser.RULE_projectBody = 5;
TaskProjectParser.RULE_projectProperty = 6;
TaskProjectParser.RULE_user = 7;
TaskProjectParser.RULE_userBody = 8;
TaskProjectParser.RULE_userProperty = 9;
TaskProjectParser.RULE_set = 10;
TaskProjectParser.RULE_setProperty = 11;
TaskProjectParser.RULE_setDepsArrowNotation = 12;
TaskProjectParser.RULE_setName = 13;
TaskProjectParser.RULE_setDescription = 14;
TaskProjectParser.RULE_setDeadline = 15;
TaskProjectParser.RULE_setStatus = 16;
TaskProjectParser.RULE_setPriority = 17;
TaskProjectParser.RULE_setEmail = 18;
TaskProjectParser.RULE_setDeps = 19;
TaskProjectParser.RULE_setUsers = 20;
TaskProjectParser.RULE_setTasks = 21;
TaskProjectParser.RULE_setProjects = 22;
TaskProjectParser.RULE_setAdditional = 23;
TaskProjectParser.RULE_array = 24;
TaskProjectParser.RULE_additional = 25;
TaskProjectParser.RULE_additionalKey = 26;
TaskProjectParser.RULE_additionalValue = 27;
TaskProjectParser.RULE_depsArrow = 28;
TaskProjectParser.RULE_left = 29;
TaskProjectParser.RULE_right = 30;
TaskProjectParser.RULE_varname = 31;

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

	task = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TaskContext);
	    } else {
	        return this.getTypedRuleContext(TaskContext,i);
	    }
	};

	project = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProjectContext);
	    } else {
	        return this.getTypedRuleContext(ProjectContext,i);
	    }
	};

	user = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UserContext);
	    } else {
	        return this.getTypedRuleContext(UserContext,i);
	    }
	};

	set = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetContext);
	    } else {
	        return this.getTypedRuleContext(SetContext,i);
	    }
	};

	setDepsArrowNotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetDepsArrowNotationContext);
	    } else {
	        return this.getTypedRuleContext(SetDepsArrowNotationContext,i);
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

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_task;
    }

	TASK_DEF() {
	    return this.getToken(TaskProjectParser.TASK_DEF, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	taskBody() {
	    return this.getTypedRuleContext(TaskBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterTask(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTask(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitTask(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_taskBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	taskProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TaskPropertyContext);
	    } else {
	        return this.getTypedRuleContext(TaskPropertyContext,i);
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
	        listener.enterTaskBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTaskBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitTaskBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TaskPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_taskProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setDescription() {
	    return this.getTypedRuleContext(SetDescriptionContext,0);
	};

	setDeadline() {
	    return this.getTypedRuleContext(SetDeadlineContext,0);
	};

	setStatus() {
	    return this.getTypedRuleContext(SetStatusContext,0);
	};

	setPriority() {
	    return this.getTypedRuleContext(SetPriorityContext,0);
	};

	setDeps() {
	    return this.getTypedRuleContext(SetDepsContext,0);
	};

	setUsers() {
	    return this.getTypedRuleContext(SetUsersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterTaskProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitTaskProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitTaskProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_project;
    }

	PROJECT_DEF() {
	    return this.getToken(TaskProjectParser.PROJECT_DEF, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	projectBody() {
	    return this.getTypedRuleContext(ProjectBodyContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProjectBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_projectBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	projectProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProjectPropertyContext);
	    } else {
	        return this.getTypedRuleContext(ProjectPropertyContext,i);
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
	        listener.enterProjectBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProjectBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProjectBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProjectPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_projectProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setDescription() {
	    return this.getTypedRuleContext(SetDescriptionContext,0);
	};

	setDeadline() {
	    return this.getTypedRuleContext(SetDeadlineContext,0);
	};

	setStatus() {
	    return this.getTypedRuleContext(SetStatusContext,0);
	};

	setPriority() {
	    return this.getTypedRuleContext(SetPriorityContext,0);
	};

	setDeps() {
	    return this.getTypedRuleContext(SetDepsContext,0);
	};

	setUsers() {
	    return this.getTypedRuleContext(SetUsersContext,0);
	};

	setTasks() {
	    return this.getTypedRuleContext(SetTasksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterProjectProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitProjectProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitProjectProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UserContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_user;
    }

	USER_DEF() {
	    return this.getToken(TaskProjectParser.USER_DEF, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	userBody() {
	    return this.getTypedRuleContext(UserBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterUser(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUser(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitUser(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UserBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_userBody;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	userProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UserPropertyContext);
	    } else {
	        return this.getTypedRuleContext(UserPropertyContext,i);
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
	        listener.enterUserBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUserBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitUserBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UserPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_userProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setEmail() {
	    return this.getTypedRuleContext(SetEmailContext,0);
	};

	setTasks() {
	    return this.getTypedRuleContext(SetTasksContext,0);
	};

	setProjects() {
	    return this.getTypedRuleContext(SetProjectsContext,0);
	};

	setAdditional() {
	    return this.getTypedRuleContext(SetAdditionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterUserProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitUserProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitUserProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_set;
    }

	SET() {
	    return this.getToken(TaskProjectParser.SET, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	setProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetPropertyContext);
	    } else {
	        return this.getTypedRuleContext(SetPropertyContext,i);
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
	        listener.enterSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setProperty;
    }

	setName() {
	    return this.getTypedRuleContext(SetNameContext,0);
	};

	setDescription() {
	    return this.getTypedRuleContext(SetDescriptionContext,0);
	};

	setDeadline() {
	    return this.getTypedRuleContext(SetDeadlineContext,0);
	};

	setStatus() {
	    return this.getTypedRuleContext(SetStatusContext,0);
	};

	setPriority() {
	    return this.getTypedRuleContext(SetPriorityContext,0);
	};

	setEmail() {
	    return this.getTypedRuleContext(SetEmailContext,0);
	};

	setDeps() {
	    return this.getTypedRuleContext(SetDepsContext,0);
	};

	setUsers() {
	    return this.getTypedRuleContext(SetUsersContext,0);
	};

	setTasks() {
	    return this.getTypedRuleContext(SetTasksContext,0);
	};

	setProjects() {
	    return this.getTypedRuleContext(SetProjectsContext,0);
	};

	setAdditional() {
	    return this.getTypedRuleContext(SetAdditionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDepsArrowNotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDepsArrowNotation;
    }

	SET() {
	    return this.getToken(TaskProjectParser.SET, 0);
	};

	SET_DEPS() {
	    return this.getToken(TaskProjectParser.SET_DEPS, 0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	SEMICOLON() {
	    return this.getToken(TaskProjectParser.SEMICOLON, 0);
	};

	depsArrow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DepsArrowContext);
	    } else {
	        return this.getTypedRuleContext(DepsArrowContext,i);
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
	        listener.enterSetDepsArrowNotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDepsArrowNotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDepsArrowNotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setName;
    }

	NAME() {
	    return this.getToken(TaskProjectParser.NAME, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDescription;
    }

	DESCRIPTION() {
	    return this.getToken(TaskProjectParser.DESCRIPTION, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDescription(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDescription(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDeadlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDeadline;
    }

	DEADLINE() {
	    return this.getToken(TaskProjectParser.DEADLINE, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDeadline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDeadline(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDeadline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetStatusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setStatus;
    }

	STATUS() {
	    return this.getToken(TaskProjectParser.STATUS, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetStatus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetStatus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetStatus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetPriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setPriority;
    }

	PRIORITY() {
	    return this.getToken(TaskProjectParser.PRIORITY, 0);
	};

	NUM() {
	    return this.getToken(TaskProjectParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetPriority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetPriority(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetEmailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setEmail;
    }

	EMAIL() {
	    return this.getToken(TaskProjectParser.EMAIL, 0);
	};

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetEmail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetEmail(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetEmail(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDepsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setDeps;
    }

	DEPS() {
	    return this.getToken(TaskProjectParser.DEPS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetDeps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetDeps(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetDeps(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetUsersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setUsers;
    }

	USERS() {
	    return this.getToken(TaskProjectParser.USERS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetUsers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetUsers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetUsers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetTasksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setTasks;
    }

	TASKS() {
	    return this.getToken(TaskProjectParser.TASKS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetTasks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetTasks(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetTasks(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetProjectsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setProjects;
    }

	PROJECTS() {
	    return this.getToken(TaskProjectParser.PROJECTS, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterSetProjects(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetProjects(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetProjects(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetAdditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_setAdditional;
    }

	ADDITIONAL() {
	    return this.getToken(TaskProjectParser.ADDITIONAL, 0);
	};

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
	};

	additional = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionalContext);
	    } else {
	        return this.getTypedRuleContext(AdditionalContext,i);
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
	        listener.enterSetAdditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitSetAdditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitSetAdditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_array;
    }

	OPEN_BRACES() {
	    return this.getToken(TaskProjectParser.OPEN_BRACES, 0);
	};

	CLOSE_BRACES() {
	    return this.getToken(TaskProjectParser.CLOSE_BRACES, 0);
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
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_additional;
    }

	additionalKey() {
	    return this.getTypedRuleContext(AdditionalKeyContext,0);
	};

	COLON() {
	    return this.getToken(TaskProjectParser.COLON, 0);
	};

	additionalValue() {
	    return this.getTypedRuleContext(AdditionalValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAdditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAdditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAdditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionalKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_additionalKey;
    }

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAdditionalKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAdditionalKey(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAdditionalKey(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditionalValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_additionalValue;
    }

	QUOTED_TEXT() {
	    return this.getToken(TaskProjectParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterAdditionalValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitAdditionalValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitAdditionalValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DepsArrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_depsArrow;
    }

	left() {
	    return this.getTypedRuleContext(LeftContext,0);
	};

	ARROW() {
	    return this.getToken(TaskProjectParser.ARROW, 0);
	};

	right() {
	    return this.getTypedRuleContext(RightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterDepsArrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitDepsArrow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitDepsArrow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_left;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterLeft(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitLeft(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitLeft(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_right;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterRight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitRight(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitRight(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TaskProjectParser.RULE_varname;
    }

	TEXT() {
	    return this.getToken(TaskProjectParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.enterVarname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TaskProjectParserListener ) {
	        listener.exitVarname(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TaskProjectParserVisitor ) {
	        return visitor.visitVarname(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TaskProjectParser.ProgramContext = ProgramContext; 
TaskProjectParser.TaskContext = TaskContext; 
TaskProjectParser.TaskBodyContext = TaskBodyContext; 
TaskProjectParser.TaskPropertyContext = TaskPropertyContext; 
TaskProjectParser.ProjectContext = ProjectContext; 
TaskProjectParser.ProjectBodyContext = ProjectBodyContext; 
TaskProjectParser.ProjectPropertyContext = ProjectPropertyContext; 
TaskProjectParser.UserContext = UserContext; 
TaskProjectParser.UserBodyContext = UserBodyContext; 
TaskProjectParser.UserPropertyContext = UserPropertyContext; 
TaskProjectParser.SetContext = SetContext; 
TaskProjectParser.SetPropertyContext = SetPropertyContext; 
TaskProjectParser.SetDepsArrowNotationContext = SetDepsArrowNotationContext; 
TaskProjectParser.SetNameContext = SetNameContext; 
TaskProjectParser.SetDescriptionContext = SetDescriptionContext; 
TaskProjectParser.SetDeadlineContext = SetDeadlineContext; 
TaskProjectParser.SetStatusContext = SetStatusContext; 
TaskProjectParser.SetPriorityContext = SetPriorityContext; 
TaskProjectParser.SetEmailContext = SetEmailContext; 
TaskProjectParser.SetDepsContext = SetDepsContext; 
TaskProjectParser.SetUsersContext = SetUsersContext; 
TaskProjectParser.SetTasksContext = SetTasksContext; 
TaskProjectParser.SetProjectsContext = SetProjectsContext; 
TaskProjectParser.SetAdditionalContext = SetAdditionalContext; 
TaskProjectParser.ArrayContext = ArrayContext; 
TaskProjectParser.AdditionalContext = AdditionalContext; 
TaskProjectParser.AdditionalKeyContext = AdditionalKeyContext; 
TaskProjectParser.AdditionalValueContext = AdditionalValueContext; 
TaskProjectParser.DepsArrowContext = DepsArrowContext; 
TaskProjectParser.LeftContext = LeftContext; 
TaskProjectParser.RightContext = RightContext; 
TaskProjectParser.VarnameContext = VarnameContext; 
