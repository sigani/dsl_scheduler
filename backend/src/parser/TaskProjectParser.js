// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
import TaskProjectParserVisitor from './TaskProjectParserVisitor.js';

const serializedATN = [4,1,27,238,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,0,5,
0,56,8,0,10,0,12,0,59,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,67,8,1,1,1,1,1,1,2,
1,2,1,2,1,2,5,2,75,8,2,10,2,12,2,78,9,2,1,2,1,2,1,2,1,2,3,2,84,8,2,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,95,8,3,1,4,1,4,1,4,1,4,1,4,3,4,102,8,4,
1,4,1,4,1,5,1,5,1,5,1,5,5,5,110,8,5,10,5,12,5,113,9,5,1,5,1,5,1,5,1,5,3,
5,119,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,131,8,6,1,7,1,7,1,
7,1,7,3,7,137,8,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,145,8,8,10,8,12,8,148,9,8,
1,8,1,8,1,8,1,8,3,8,154,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,163,8,9,1,10,
1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,
15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,
1,20,1,20,1,20,1,20,1,20,5,20,200,8,20,10,20,12,20,203,9,20,1,20,1,20,1,
20,1,20,3,20,209,8,20,1,20,1,20,1,21,1,21,1,21,5,21,216,8,21,10,21,12,21,
219,9,21,1,21,1,21,1,21,3,21,224,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,
1,23,1,24,1,24,1,25,1,25,1,25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,0,0,245,0,57,1,0,0,0,2,62,1,0,0,0,4,
70,1,0,0,0,6,94,1,0,0,0,8,96,1,0,0,0,10,105,1,0,0,0,12,130,1,0,0,0,14,132,
1,0,0,0,16,140,1,0,0,0,18,162,1,0,0,0,20,164,1,0,0,0,22,167,1,0,0,0,24,170,
1,0,0,0,26,173,1,0,0,0,28,176,1,0,0,0,30,179,1,0,0,0,32,182,1,0,0,0,34,185,
1,0,0,0,36,188,1,0,0,0,38,191,1,0,0,0,40,194,1,0,0,0,42,212,1,0,0,0,44,227,
1,0,0,0,46,231,1,0,0,0,48,233,1,0,0,0,50,235,1,0,0,0,52,56,3,2,1,0,53,56,
3,8,4,0,54,56,3,14,7,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,59,1,
0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,61,5,0,
0,1,61,1,1,0,0,0,62,63,5,2,0,0,63,66,3,50,25,0,64,67,5,17,0,0,65,67,3,4,
2,0,66,64,1,0,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,69,5,20,0,0,69,3,1,0,0,
0,70,76,5,22,0,0,71,72,3,6,3,0,72,73,5,21,0,0,73,75,1,0,0,0,74,71,1,0,0,
0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,83,1,0,0,0,78,76,1,0,0,0,
79,80,3,6,3,0,80,81,5,21,0,0,81,84,1,0,0,0,82,84,3,6,3,0,83,79,1,0,0,0,83,
82,1,0,0,0,84,85,1,0,0,0,85,86,5,23,0,0,86,5,1,0,0,0,87,95,3,20,10,0,88,
95,3,22,11,0,89,95,3,24,12,0,90,95,3,26,13,0,91,95,3,28,14,0,92,95,3,32,
16,0,93,95,3,34,17,0,94,87,1,0,0,0,94,88,1,0,0,0,94,89,1,0,0,0,94,90,1,0,
0,0,94,91,1,0,0,0,94,92,1,0,0,0,94,93,1,0,0,0,95,7,1,0,0,0,96,97,5,3,0,0,
97,101,3,50,25,0,98,102,5,17,0,0,99,102,3,10,5,0,100,102,3,42,21,0,101,98,
1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,103,1,0,0,0,103,104,5,20,0,0,
104,9,1,0,0,0,105,111,5,22,0,0,106,107,3,12,6,0,107,108,5,21,0,0,108,110,
1,0,0,0,109,106,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,
112,118,1,0,0,0,113,111,1,0,0,0,114,115,3,12,6,0,115,116,5,21,0,0,116,119,
1,0,0,0,117,119,3,12,6,0,118,114,1,0,0,0,118,117,1,0,0,0,119,120,1,0,0,0,
120,121,5,23,0,0,121,11,1,0,0,0,122,131,3,20,10,0,123,131,3,22,11,0,124,
131,3,24,12,0,125,131,3,26,13,0,126,131,3,28,14,0,127,131,3,32,16,0,128,
131,3,34,17,0,129,131,3,36,18,0,130,122,1,0,0,0,130,123,1,0,0,0,130,124,
1,0,0,0,130,125,1,0,0,0,130,126,1,0,0,0,130,127,1,0,0,0,130,128,1,0,0,0,
130,129,1,0,0,0,131,13,1,0,0,0,132,133,5,4,0,0,133,136,3,50,25,0,134,137,
5,17,0,0,135,137,3,16,8,0,136,134,1,0,0,0,136,135,1,0,0,0,137,138,1,0,0,
0,138,139,5,20,0,0,139,15,1,0,0,0,140,146,5,22,0,0,141,142,3,18,9,0,142,
143,5,21,0,0,143,145,1,0,0,0,144,141,1,0,0,0,145,148,1,0,0,0,146,144,1,0,
0,0,146,147,1,0,0,0,147,153,1,0,0,0,148,146,1,0,0,0,149,150,3,18,9,0,150,
151,5,21,0,0,151,154,1,0,0,0,152,154,3,18,9,0,153,149,1,0,0,0,153,152,1,
0,0,0,154,155,1,0,0,0,155,156,5,23,0,0,156,17,1,0,0,0,157,163,3,20,10,0,
158,163,3,30,15,0,159,163,3,36,18,0,160,163,3,38,19,0,161,163,3,40,20,0,
162,157,1,0,0,0,162,158,1,0,0,0,162,159,1,0,0,0,162,160,1,0,0,0,162,161,
1,0,0,0,163,19,1,0,0,0,164,165,5,5,0,0,165,166,5,17,0,0,166,21,1,0,0,0,167,
168,5,6,0,0,168,169,5,17,0,0,169,23,1,0,0,0,170,171,5,7,0,0,171,172,5,17,
0,0,172,25,1,0,0,0,173,174,5,8,0,0,174,175,5,17,0,0,175,27,1,0,0,0,176,177,
5,9,0,0,177,178,5,18,0,0,178,29,1,0,0,0,179,180,5,12,0,0,180,181,5,17,0,
0,181,31,1,0,0,0,182,183,5,10,0,0,183,184,3,42,21,0,184,33,1,0,0,0,185,186,
5,11,0,0,186,187,3,42,21,0,187,35,1,0,0,0,188,189,5,13,0,0,189,190,3,42,
21,0,190,37,1,0,0,0,191,192,5,14,0,0,192,193,3,42,21,0,193,39,1,0,0,0,194,
195,5,15,0,0,195,201,5,22,0,0,196,197,3,44,22,0,197,198,5,21,0,0,198,200,
1,0,0,0,199,196,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,
202,208,1,0,0,0,203,201,1,0,0,0,204,205,3,44,22,0,205,206,5,21,0,0,206,209,
1,0,0,0,207,209,3,44,22,0,208,204,1,0,0,0,208,207,1,0,0,0,209,210,1,0,0,
0,210,211,5,23,0,0,211,41,1,0,0,0,212,217,5,22,0,0,213,214,5,16,0,0,214,
216,5,21,0,0,215,213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,
0,0,218,223,1,0,0,0,219,217,1,0,0,0,220,221,5,16,0,0,221,224,5,21,0,0,222,
224,5,16,0,0,223,220,1,0,0,0,223,222,1,0,0,0,224,225,1,0,0,0,225,226,5,23,
0,0,226,43,1,0,0,0,227,228,3,46,23,0,228,229,5,19,0,0,229,230,3,48,24,0,
230,45,1,0,0,0,231,232,5,17,0,0,232,47,1,0,0,0,233,234,5,17,0,0,234,49,1,
0,0,0,235,236,5,16,0,0,236,51,1,0,0,0,18,55,57,66,76,83,94,101,111,118,130,
136,146,153,162,201,208,217,223];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "':'", "';'", "','", "'{'", 
                            "'}'", "'('", "')'" ];
    static symbolicNames = [ null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", 
                             "USER_DEF", "NAME", "DESCRIPTION", "DEADLINE", 
                             "STATUS", "PRIORITY", "DEPS", "USERS", "EMAIL", 
                             "TASKS", "PROJECTS", "ADDITIONAL", "TEXT", 
                             "QUOTED_TEXT", "NUM", "COLON", "SEMICOLON", 
                             "COMMA", "OPEN_BRACES", "CLOSE_BRACES", "OPEN_PAREN", 
                             "CLOSE_PAREN", "SPACE", "NEWLINE" ];
    static ruleNames = [ "program", "task", "taskBody", "taskProperty", 
                         "project", "projectBody", "projectProperty", "user", 
                         "userBody", "userProperty", "setName", "setDescription", 
                         "setDeadline", "setStatus", "setPriority", "setEmail", 
                         "setDeps", "setUsers", "setTasks", "setProjects", 
                         "setAdditional", "array", "additional", "additionalKey", 
                         "additionalValue", "varname" ];

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
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0)) {
	            this.state = 55;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 52;
	                this.task();
	                break;
	            case 3:
	                this.state = 53;
	                this.project();
	                break;
	            case 4:
	                this.state = 54;
	                this.user();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
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
	        this.state = 62;
	        this.match(TaskProjectParser.TASK_DEF);
	        this.state = 63;
	        this.varname();
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.state = 64;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 22:
	            this.state = 65;
	            this.taskBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 68;
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
	        this.state = 70;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 71;
	                this.taskProperty();
	                this.state = 72;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 79;
	            this.taskProperty();
	            this.state = 80;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 82;
	            this.taskProperty();
	            break;

	        }
	        this.state = 85;
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
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 91;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 92;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 93;
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
	        this.state = 96;
	        this.match(TaskProjectParser.PROJECT_DEF);
	        this.state = 97;
	        this.varname();
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 98;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;

	        case 2:
	            this.state = 99;
	            this.projectBody();
	            break;

	        case 3:
	            this.state = 100;
	            this.array();
	            break;

	        }
	        this.state = 103;
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
	        this.state = 105;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 106;
	                this.projectProperty();
	                this.state = 107;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 113;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 114;
	            this.projectProperty();
	            this.state = 115;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 117;
	            this.projectProperty();
	            break;

	        }
	        this.state = 120;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 122;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 125;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 127;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 128;
	            this.setUsers();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 129;
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
	        this.state = 132;
	        this.match(TaskProjectParser.USER_DEF);
	        this.state = 133;
	        this.varname();
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.state = 134;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 22:
	            this.state = 135;
	            this.userBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 138;
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
	        this.state = 140;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 146;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                this.userProperty();
	                this.state = 142;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 148;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 149;
	            this.userProperty();
	            this.state = 150;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 152;
	            this.userProperty();
	            break;

	        }
	        this.state = 155;
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
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.setName();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.setEmail();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 159;
	            this.setTasks();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 160;
	            this.setProjects();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
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
	    this.enterRule(localctx, 20, TaskProjectParser.RULE_setName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(TaskProjectParser.NAME);
	        this.state = 165;
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
	    this.enterRule(localctx, 22, TaskProjectParser.RULE_setDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(TaskProjectParser.DESCRIPTION);
	        this.state = 168;
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
	    this.enterRule(localctx, 24, TaskProjectParser.RULE_setDeadline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(TaskProjectParser.DEADLINE);
	        this.state = 171;
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
	    this.enterRule(localctx, 26, TaskProjectParser.RULE_setStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(TaskProjectParser.STATUS);
	        this.state = 174;
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
	    this.enterRule(localctx, 28, TaskProjectParser.RULE_setPriority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(TaskProjectParser.PRIORITY);
	        this.state = 177;
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
	    this.enterRule(localctx, 30, TaskProjectParser.RULE_setEmail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(TaskProjectParser.EMAIL);
	        this.state = 180;
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
	    this.enterRule(localctx, 32, TaskProjectParser.RULE_setDeps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(TaskProjectParser.DEPS);
	        this.state = 183;
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
	    this.enterRule(localctx, 34, TaskProjectParser.RULE_setUsers);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(TaskProjectParser.USERS);
	        this.state = 186;
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
	    this.enterRule(localctx, 36, TaskProjectParser.RULE_setTasks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(TaskProjectParser.TASKS);
	        this.state = 189;
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
	    this.enterRule(localctx, 38, TaskProjectParser.RULE_setProjects);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(TaskProjectParser.PROJECTS);
	        this.state = 192;
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
	    this.enterRule(localctx, 40, TaskProjectParser.RULE_setAdditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(TaskProjectParser.ADDITIONAL);
	        this.state = 195;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 201;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 196;
	                this.additional();
	                this.state = 197;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 203;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 204;
	            this.additional();
	            this.state = 205;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 207;
	            this.additional();
	            break;

	        }
	        this.state = 210;
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
	    this.enterRule(localctx, 42, TaskProjectParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 217;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 213;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 214;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 219;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 220;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 221;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 222;
	            this.match(TaskProjectParser.TEXT);
	            break;

	        }
	        this.state = 225;
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
	    this.enterRule(localctx, 44, TaskProjectParser.RULE_additional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.additionalKey();
	        this.state = 228;
	        this.match(TaskProjectParser.COLON);
	        this.state = 229;
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
	    this.enterRule(localctx, 46, TaskProjectParser.RULE_additionalKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
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
	    this.enterRule(localctx, 48, TaskProjectParser.RULE_additionalValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
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
	    this.enterRule(localctx, 50, TaskProjectParser.RULE_varname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
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
TaskProjectParser.TEXT = 16;
TaskProjectParser.QUOTED_TEXT = 17;
TaskProjectParser.NUM = 18;
TaskProjectParser.COLON = 19;
TaskProjectParser.SEMICOLON = 20;
TaskProjectParser.COMMA = 21;
TaskProjectParser.OPEN_BRACES = 22;
TaskProjectParser.CLOSE_BRACES = 23;
TaskProjectParser.OPEN_PAREN = 24;
TaskProjectParser.CLOSE_PAREN = 25;
TaskProjectParser.SPACE = 26;
TaskProjectParser.NEWLINE = 27;

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
TaskProjectParser.RULE_setName = 10;
TaskProjectParser.RULE_setDescription = 11;
TaskProjectParser.RULE_setDeadline = 12;
TaskProjectParser.RULE_setStatus = 13;
TaskProjectParser.RULE_setPriority = 14;
TaskProjectParser.RULE_setEmail = 15;
TaskProjectParser.RULE_setDeps = 16;
TaskProjectParser.RULE_setUsers = 17;
TaskProjectParser.RULE_setTasks = 18;
TaskProjectParser.RULE_setProjects = 19;
TaskProjectParser.RULE_setAdditional = 20;
TaskProjectParser.RULE_array = 21;
TaskProjectParser.RULE_additional = 22;
TaskProjectParser.RULE_additionalKey = 23;
TaskProjectParser.RULE_additionalValue = 24;
TaskProjectParser.RULE_varname = 25;

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
