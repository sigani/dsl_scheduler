// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
import TaskProjectParserVisitor from './TaskProjectParserVisitor.js';

const serializedATN = [4,1,29,275,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,1,0,1,0,1,0,5,0,61,8,0,10,0,12,0,64,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
3,1,72,8,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,80,8,2,10,2,12,2,83,9,2,1,2,1,2,1,
2,1,2,3,2,89,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,100,8,3,1,4,1,4,
1,4,1,4,1,4,3,4,107,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,115,8,5,10,5,12,5,118,
9,5,1,5,1,5,1,5,1,5,3,5,124,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
3,6,136,8,6,1,7,1,7,1,7,1,7,3,7,142,8,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,150,
8,8,10,8,12,8,153,9,8,1,8,1,8,1,8,1,8,3,8,159,8,8,1,8,1,8,1,9,1,9,1,9,1,
9,1,9,3,9,168,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,176,8,10,10,10,12,10,
179,9,10,1,10,1,10,1,10,1,10,3,10,185,8,10,1,10,1,10,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,200,8,11,1,12,1,12,1,12,1,13,1,13,
1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,
18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
1,22,5,22,237,8,22,10,22,12,22,240,9,22,1,22,1,22,1,22,1,22,3,22,246,8,22,
1,22,1,22,1,23,1,23,1,23,5,23,253,8,23,10,23,12,23,256,9,23,1,23,1,23,1,
23,3,23,261,8,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,
1,27,1,27,0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,0,0,293,0,62,1,0,0,0,2,67,1,0,0,0,4,75,1,0,0,0,6,
99,1,0,0,0,8,101,1,0,0,0,10,110,1,0,0,0,12,135,1,0,0,0,14,137,1,0,0,0,16,
145,1,0,0,0,18,167,1,0,0,0,20,169,1,0,0,0,22,199,1,0,0,0,24,201,1,0,0,0,
26,204,1,0,0,0,28,207,1,0,0,0,30,210,1,0,0,0,32,213,1,0,0,0,34,216,1,0,0,
0,36,219,1,0,0,0,38,222,1,0,0,0,40,225,1,0,0,0,42,228,1,0,0,0,44,231,1,0,
0,0,46,249,1,0,0,0,48,264,1,0,0,0,50,268,1,0,0,0,52,270,1,0,0,0,54,272,1,
0,0,0,56,61,3,2,1,0,57,61,3,8,4,0,58,61,3,14,7,0,59,61,3,20,10,0,60,56,1,
0,0,0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,
0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,0,0,1,66,1,1,0,0,0,
67,68,5,2,0,0,68,71,3,54,27,0,69,72,5,19,0,0,70,72,3,4,2,0,71,69,1,0,0,0,
71,70,1,0,0,0,72,73,1,0,0,0,73,74,5,22,0,0,74,3,1,0,0,0,75,81,5,24,0,0,76,
77,3,6,3,0,77,78,5,23,0,0,78,80,1,0,0,0,79,76,1,0,0,0,80,83,1,0,0,0,81,79,
1,0,0,0,81,82,1,0,0,0,82,88,1,0,0,0,83,81,1,0,0,0,84,85,3,6,3,0,85,86,5,
23,0,0,86,89,1,0,0,0,87,89,3,6,3,0,88,84,1,0,0,0,88,87,1,0,0,0,89,90,1,0,
0,0,90,91,5,25,0,0,91,5,1,0,0,0,92,100,3,24,12,0,93,100,3,26,13,0,94,100,
3,28,14,0,95,100,3,30,15,0,96,100,3,32,16,0,97,100,3,36,18,0,98,100,3,38,
19,0,99,92,1,0,0,0,99,93,1,0,0,0,99,94,1,0,0,0,99,95,1,0,0,0,99,96,1,0,0,
0,99,97,1,0,0,0,99,98,1,0,0,0,100,7,1,0,0,0,101,102,5,3,0,0,102,106,3,54,
27,0,103,107,5,19,0,0,104,107,3,10,5,0,105,107,3,46,23,0,106,103,1,0,0,0,
106,104,1,0,0,0,106,105,1,0,0,0,107,108,1,0,0,0,108,109,5,22,0,0,109,9,1,
0,0,0,110,116,5,24,0,0,111,112,3,12,6,0,112,113,5,23,0,0,113,115,1,0,0,0,
114,111,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,123,
1,0,0,0,118,116,1,0,0,0,119,120,3,12,6,0,120,121,5,23,0,0,121,124,1,0,0,
0,122,124,3,12,6,0,123,119,1,0,0,0,123,122,1,0,0,0,124,125,1,0,0,0,125,126,
5,25,0,0,126,11,1,0,0,0,127,136,3,24,12,0,128,136,3,26,13,0,129,136,3,28,
14,0,130,136,3,30,15,0,131,136,3,32,16,0,132,136,3,36,18,0,133,136,3,38,
19,0,134,136,3,40,20,0,135,127,1,0,0,0,135,128,1,0,0,0,135,129,1,0,0,0,135,
130,1,0,0,0,135,131,1,0,0,0,135,132,1,0,0,0,135,133,1,0,0,0,135,134,1,0,
0,0,136,13,1,0,0,0,137,138,5,4,0,0,138,141,3,54,27,0,139,142,5,19,0,0,140,
142,3,16,8,0,141,139,1,0,0,0,141,140,1,0,0,0,142,143,1,0,0,0,143,144,5,22,
0,0,144,15,1,0,0,0,145,151,5,24,0,0,146,147,3,18,9,0,147,148,5,23,0,0,148,
150,1,0,0,0,149,146,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,
0,0,152,158,1,0,0,0,153,151,1,0,0,0,154,155,3,18,9,0,155,156,5,23,0,0,156,
159,1,0,0,0,157,159,3,18,9,0,158,154,1,0,0,0,158,157,1,0,0,0,159,160,1,0,
0,0,160,161,5,25,0,0,161,17,1,0,0,0,162,168,3,24,12,0,163,168,3,34,17,0,
164,168,3,40,20,0,165,168,3,42,21,0,166,168,3,44,22,0,167,162,1,0,0,0,167,
163,1,0,0,0,167,164,1,0,0,0,167,165,1,0,0,0,167,166,1,0,0,0,168,19,1,0,0,
0,169,170,5,16,0,0,170,171,3,54,27,0,171,177,5,24,0,0,172,173,3,22,11,0,
173,174,5,23,0,0,174,176,1,0,0,0,175,172,1,0,0,0,176,179,1,0,0,0,177,175,
1,0,0,0,177,178,1,0,0,0,178,184,1,0,0,0,179,177,1,0,0,0,180,181,3,22,11,
0,181,182,5,23,0,0,182,185,1,0,0,0,183,185,3,22,11,0,184,180,1,0,0,0,184,
183,1,0,0,0,185,186,1,0,0,0,186,187,5,25,0,0,187,21,1,0,0,0,188,200,3,24,
12,0,189,200,3,26,13,0,190,200,3,28,14,0,191,200,3,30,15,0,192,200,3,32,
16,0,193,200,3,34,17,0,194,200,3,36,18,0,195,200,3,38,19,0,196,200,3,40,
20,0,197,200,3,42,21,0,198,200,3,44,22,0,199,188,1,0,0,0,199,189,1,0,0,0,
199,190,1,0,0,0,199,191,1,0,0,0,199,192,1,0,0,0,199,193,1,0,0,0,199,194,
1,0,0,0,199,195,1,0,0,0,199,196,1,0,0,0,199,197,1,0,0,0,199,198,1,0,0,0,
200,23,1,0,0,0,201,202,5,5,0,0,202,203,5,19,0,0,203,25,1,0,0,0,204,205,5,
6,0,0,205,206,5,19,0,0,206,27,1,0,0,0,207,208,5,7,0,0,208,209,5,19,0,0,209,
29,1,0,0,0,210,211,5,8,0,0,211,212,5,19,0,0,212,31,1,0,0,0,213,214,5,9,0,
0,214,215,5,20,0,0,215,33,1,0,0,0,216,217,5,12,0,0,217,218,5,19,0,0,218,
35,1,0,0,0,219,220,5,10,0,0,220,221,3,46,23,0,221,37,1,0,0,0,222,223,5,11,
0,0,223,224,3,46,23,0,224,39,1,0,0,0,225,226,5,13,0,0,226,227,3,46,23,0,
227,41,1,0,0,0,228,229,5,14,0,0,229,230,3,46,23,0,230,43,1,0,0,0,231,232,
5,15,0,0,232,238,5,24,0,0,233,234,3,48,24,0,234,235,5,23,0,0,235,237,1,0,
0,0,236,233,1,0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,
245,1,0,0,0,240,238,1,0,0,0,241,242,3,48,24,0,242,243,5,23,0,0,243,246,1,
0,0,0,244,246,3,48,24,0,245,241,1,0,0,0,245,244,1,0,0,0,246,247,1,0,0,0,
247,248,5,25,0,0,248,45,1,0,0,0,249,254,5,24,0,0,250,251,5,18,0,0,251,253,
5,23,0,0,252,250,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,
255,260,1,0,0,0,256,254,1,0,0,0,257,258,5,18,0,0,258,261,5,23,0,0,259,261,
5,18,0,0,260,257,1,0,0,0,260,259,1,0,0,0,261,262,1,0,0,0,262,263,5,25,0,
0,263,47,1,0,0,0,264,265,3,50,25,0,265,266,5,21,0,0,266,267,3,52,26,0,267,
49,1,0,0,0,268,269,5,19,0,0,269,51,1,0,0,0,270,271,5,19,0,0,271,53,1,0,0,
0,272,273,5,18,0,0,273,55,1,0,0,0,21,60,62,71,81,88,99,106,116,123,135,141,
151,158,167,177,184,199,238,245,254,260];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "':'", "';'", 
                            "','", "'{'", "'}'", "'('", "')'" ];
    static symbolicNames = [ null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", 
                             "USER_DEF", "NAME", "DESCRIPTION", "DEADLINE", 
                             "STATUS", "PRIORITY", "DEPS", "USERS", "EMAIL", 
                             "TASKS", "PROJECTS", "ADDITIONAL", "SET", "SET_DEPS", 
                             "TEXT", "QUOTED_TEXT", "NUM", "COLON", "SEMICOLON", 
                             "COMMA", "OPEN_BRACES", "CLOSE_BRACES", "OPEN_PAREN", 
                             "CLOSE_PAREN", "SPACE", "NEWLINE" ];
    static ruleNames = [ "program", "task", "taskBody", "taskProperty", 
                         "project", "projectBody", "projectProperty", "user", 
                         "userBody", "userProperty", "set", "setProperty", 
                         "setName", "setDescription", "setDeadline", "setStatus", 
                         "setPriority", "setEmail", "setDeps", "setUsers", 
                         "setTasks", "setProjects", "setAdditional", "array", 
                         "additional", "additionalKey", "additionalValue", 
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65564) !== 0)) {
	            this.state = 60;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 56;
	                this.task();
	                break;
	            case 3:
	                this.state = 57;
	                this.project();
	                break;
	            case 4:
	                this.state = 58;
	                this.user();
	                break;
	            case 16:
	                this.state = 59;
	                this.set();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
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
	        this.state = 67;
	        this.match(TaskProjectParser.TASK_DEF);
	        this.state = 68;
	        this.varname();
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 69;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 24:
	            this.state = 70;
	            this.taskBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 73;
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
	        this.state = 75;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 81;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 76;
	                this.taskProperty();
	                this.state = 77;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 84;
	            this.taskProperty();
	            this.state = 85;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 87;
	            this.taskProperty();
	            break;

	        }
	        this.state = 90;
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 95;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 96;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 97;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 98;
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
	        this.state = 101;
	        this.match(TaskProjectParser.PROJECT_DEF);
	        this.state = 102;
	        this.varname();
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 103;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;

	        case 2:
	            this.state = 104;
	            this.projectBody();
	            break;

	        case 3:
	            this.state = 105;
	            this.array();
	            break;

	        }
	        this.state = 108;
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
	        this.state = 110;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 111;
	                this.projectProperty();
	                this.state = 112;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 119;
	            this.projectProperty();
	            this.state = 120;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 122;
	            this.projectProperty();
	            break;

	        }
	        this.state = 125;
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
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 130;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 131;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 133;
	            this.setUsers();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 134;
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
	        this.state = 137;
	        this.match(TaskProjectParser.USER_DEF);
	        this.state = 138;
	        this.varname();
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 139;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 24:
	            this.state = 140;
	            this.userBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 143;
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
	        this.state = 145;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 151;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 146;
	                this.userProperty();
	                this.state = 147;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 153;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 154;
	            this.userProperty();
	            this.state = 155;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 157;
	            this.userProperty();
	            break;

	        }
	        this.state = 160;
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
	        this.state = 167;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.setName();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.setEmail();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.setTasks();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 165;
	            this.setProjects();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 166;
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
	        this.state = 169;
	        this.match(TaskProjectParser.SET);
	        this.state = 170;
	        this.varname();
	        this.state = 171;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 177;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 172;
	                this.setProperty();
	                this.state = 173;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 179;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 180;
	            this.setProperty();
	            this.state = 181;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 183;
	            this.setProperty();
	            break;

	        }
	        this.state = 186;
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



	setProperty() {
	    let localctx = new SetPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TaskProjectParser.RULE_setProperty);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 188;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 191;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 192;
	            this.setPriority();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 193;
	            this.setEmail();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 194;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 195;
	            this.setUsers();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 196;
	            this.setTasks();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 197;
	            this.setProjects();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 198;
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



	setName() {
	    let localctx = new SetNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TaskProjectParser.RULE_setName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(TaskProjectParser.NAME);
	        this.state = 202;
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
	    this.enterRule(localctx, 26, TaskProjectParser.RULE_setDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(TaskProjectParser.DESCRIPTION);
	        this.state = 205;
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
	    this.enterRule(localctx, 28, TaskProjectParser.RULE_setDeadline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(TaskProjectParser.DEADLINE);
	        this.state = 208;
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
	    this.enterRule(localctx, 30, TaskProjectParser.RULE_setStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(TaskProjectParser.STATUS);
	        this.state = 211;
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
	    this.enterRule(localctx, 32, TaskProjectParser.RULE_setPriority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(TaskProjectParser.PRIORITY);
	        this.state = 214;
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
	    this.enterRule(localctx, 34, TaskProjectParser.RULE_setEmail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(TaskProjectParser.EMAIL);
	        this.state = 217;
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
	    this.enterRule(localctx, 36, TaskProjectParser.RULE_setDeps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(TaskProjectParser.DEPS);
	        this.state = 220;
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
	    this.enterRule(localctx, 38, TaskProjectParser.RULE_setUsers);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(TaskProjectParser.USERS);
	        this.state = 223;
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
	    this.enterRule(localctx, 40, TaskProjectParser.RULE_setTasks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(TaskProjectParser.TASKS);
	        this.state = 226;
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
	    this.enterRule(localctx, 42, TaskProjectParser.RULE_setProjects);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(TaskProjectParser.PROJECTS);
	        this.state = 229;
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
	    this.enterRule(localctx, 44, TaskProjectParser.RULE_setAdditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(TaskProjectParser.ADDITIONAL);
	        this.state = 232;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 233;
	                this.additional();
	                this.state = 234;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 240;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 245;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 241;
	            this.additional();
	            this.state = 242;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 244;
	            this.additional();
	            break;

	        }
	        this.state = 247;
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
	    this.enterRule(localctx, 46, TaskProjectParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 254;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 250;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 251;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 256;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 260;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 257;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 258;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 259;
	            this.match(TaskProjectParser.TEXT);
	            break;

	        }
	        this.state = 262;
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
	    this.enterRule(localctx, 48, TaskProjectParser.RULE_additional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.additionalKey();
	        this.state = 265;
	        this.match(TaskProjectParser.COLON);
	        this.state = 266;
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
	    this.enterRule(localctx, 50, TaskProjectParser.RULE_additionalKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
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
	    this.enterRule(localctx, 52, TaskProjectParser.RULE_additionalValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
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



	varname() {
	    let localctx = new VarnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, TaskProjectParser.RULE_varname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
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
TaskProjectParser.SPACE = 28;
TaskProjectParser.NEWLINE = 29;

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
TaskProjectParser.RULE_setName = 12;
TaskProjectParser.RULE_setDescription = 13;
TaskProjectParser.RULE_setDeadline = 14;
TaskProjectParser.RULE_setStatus = 15;
TaskProjectParser.RULE_setPriority = 16;
TaskProjectParser.RULE_setEmail = 17;
TaskProjectParser.RULE_setDeps = 18;
TaskProjectParser.RULE_setUsers = 19;
TaskProjectParser.RULE_setTasks = 20;
TaskProjectParser.RULE_setProjects = 21;
TaskProjectParser.RULE_setAdditional = 22;
TaskProjectParser.RULE_array = 23;
TaskProjectParser.RULE_additional = 24;
TaskProjectParser.RULE_additionalKey = 25;
TaskProjectParser.RULE_additionalValue = 26;
TaskProjectParser.RULE_varname = 27;

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
TaskProjectParser.VarnameContext = VarnameContext; 
