// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
import TaskProjectParserVisitor from './TaskProjectParserVisitor.js';

const serializedATN = [4,1,26,155,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,5,0,37,8,0,10,0,12,0,40,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,56,8,
2,10,2,12,2,59,9,2,1,2,1,2,1,2,1,2,3,2,65,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,3,3,76,8,3,1,4,1,4,1,4,1,4,1,4,3,4,83,8,4,1,4,1,4,1,5,1,5,1,5,
1,5,5,5,91,8,5,10,5,12,5,94,9,5,1,5,1,5,1,5,1,5,3,5,100,8,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,112,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,
1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,
1,14,1,15,1,15,1,15,5,15,141,8,15,10,15,12,15,144,9,15,1,15,1,15,1,15,3,
15,149,8,15,1,15,1,15,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,0,0,161,0,38,1,0,0,0,2,43,1,0,0,0,4,51,1,0,0,0,6,75,1,
0,0,0,8,77,1,0,0,0,10,86,1,0,0,0,12,111,1,0,0,0,14,113,1,0,0,0,16,116,1,
0,0,0,18,119,1,0,0,0,20,122,1,0,0,0,22,125,1,0,0,0,24,128,1,0,0,0,26,131,
1,0,0,0,28,134,1,0,0,0,30,137,1,0,0,0,32,152,1,0,0,0,34,37,3,2,1,0,35,37,
3,8,4,0,36,34,1,0,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,
0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,0,0,1,42,1,1,0,0,0,43,44,5,2,0,
0,44,47,3,32,16,0,45,48,5,16,0,0,46,48,3,4,2,0,47,45,1,0,0,0,47,46,1,0,0,
0,48,49,1,0,0,0,49,50,5,19,0,0,50,3,1,0,0,0,51,57,5,21,0,0,52,53,3,6,3,0,
53,54,5,20,0,0,54,56,1,0,0,0,55,52,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,
58,1,0,0,0,58,64,1,0,0,0,59,57,1,0,0,0,60,61,3,6,3,0,61,62,5,20,0,0,62,65,
1,0,0,0,63,65,3,6,3,0,64,60,1,0,0,0,64,63,1,0,0,0,65,66,1,0,0,0,66,67,5,
22,0,0,67,5,1,0,0,0,68,76,3,14,7,0,69,76,3,16,8,0,70,76,3,18,9,0,71,76,3,
20,10,0,72,76,3,22,11,0,73,76,3,24,12,0,74,76,3,26,13,0,75,68,1,0,0,0,75,
69,1,0,0,0,75,70,1,0,0,0,75,71,1,0,0,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,
1,0,0,0,76,7,1,0,0,0,77,78,5,3,0,0,78,82,3,32,16,0,79,83,5,16,0,0,80,83,
3,10,5,0,81,83,3,30,15,0,82,79,1,0,0,0,82,80,1,0,0,0,82,81,1,0,0,0,83,84,
1,0,0,0,84,85,5,19,0,0,85,9,1,0,0,0,86,92,5,21,0,0,87,88,3,12,6,0,88,89,
5,20,0,0,89,91,1,0,0,0,90,87,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,
0,0,0,93,99,1,0,0,0,94,92,1,0,0,0,95,96,3,12,6,0,96,97,5,20,0,0,97,100,1,
0,0,0,98,100,3,12,6,0,99,95,1,0,0,0,99,98,1,0,0,0,100,101,1,0,0,0,101,102,
5,22,0,0,102,11,1,0,0,0,103,112,3,14,7,0,104,112,3,16,8,0,105,112,3,18,9,
0,106,112,3,20,10,0,107,112,3,22,11,0,108,112,3,24,12,0,109,112,3,26,13,
0,110,112,3,28,14,0,111,103,1,0,0,0,111,104,1,0,0,0,111,105,1,0,0,0,111,
106,1,0,0,0,111,107,1,0,0,0,111,108,1,0,0,0,111,109,1,0,0,0,111,110,1,0,
0,0,112,13,1,0,0,0,113,114,5,5,0,0,114,115,5,16,0,0,115,15,1,0,0,0,116,117,
5,6,0,0,117,118,5,16,0,0,118,17,1,0,0,0,119,120,5,7,0,0,120,121,5,16,0,0,
121,19,1,0,0,0,122,123,5,8,0,0,123,124,5,16,0,0,124,21,1,0,0,0,125,126,5,
9,0,0,126,127,5,17,0,0,127,23,1,0,0,0,128,129,5,10,0,0,129,130,3,30,15,0,
130,25,1,0,0,0,131,132,5,11,0,0,132,133,3,30,15,0,133,27,1,0,0,0,134,135,
5,13,0,0,135,136,3,30,15,0,136,29,1,0,0,0,137,142,5,21,0,0,138,139,5,15,
0,0,139,141,5,20,0,0,140,138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,
143,1,0,0,0,143,148,1,0,0,0,144,142,1,0,0,0,145,146,5,15,0,0,146,149,5,20,
0,0,147,149,5,15,0,0,148,145,1,0,0,0,148,147,1,0,0,0,149,150,1,0,0,0,150,
151,5,22,0,0,151,31,1,0,0,0,152,153,5,15,0,0,153,33,1,0,0,0,12,36,38,47,
57,64,75,82,92,99,111,142,148];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "':'", "';'", "','", "'{'", "'}'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", 
                             "USER_DEF", "NAME", "DESCRIPTION", "DEADLINE", 
                             "STATUS", "PRIORITY", "DEPS", "USERS", "EMAIL", 
                             "TASKS", "PROJECTS", "TEXT", "QUOTED_TEXT", 
                             "NUM", "COLON", "SEMICOLON", "COMMA", "OPEN_BRACES", 
                             "CLOSE_BRACES", "OPEN_PAREN", "CLOSE_PAREN", 
                             "SPACE", "NEWLINE" ];
    static ruleNames = [ "program", "task", "taskBody", "taskProperty", 
                         "project", "projectBody", "projectProperty", "setName", 
                         "setDescription", "setDeadline", "setStatus", "setPriority", 
                         "setDeps", "setUsers", "setTasks", "array", "varname" ];

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
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===3) {
	            this.state = 36;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 34;
	                this.task();
	                break;
	            case 3:
	                this.state = 35;
	                this.project();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
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
	        this.state = 43;
	        this.match(TaskProjectParser.TASK_DEF);
	        this.state = 44;
	        this.varname();
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.state = 45;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;
	        case 21:
	            this.state = 46;
	            this.taskBody();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 49;
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
	        this.state = 51;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 57;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 52;
	                this.taskProperty();
	                this.state = 53;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 59;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 60;
	            this.taskProperty();
	            this.state = 61;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 63;
	            this.taskProperty();
	            break;

	        }
	        this.state = 66;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 71;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 72;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 73;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 74;
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
	        this.state = 77;
	        this.match(TaskProjectParser.PROJECT_DEF);
	        this.state = 78;
	        this.varname();
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 79;
	            this.match(TaskProjectParser.QUOTED_TEXT);
	            break;

	        case 2:
	            this.state = 80;
	            this.projectBody();
	            break;

	        case 3:
	            this.state = 81;
	            this.array();
	            break;

	        }
	        this.state = 84;
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
	        this.state = 86;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 87;
	                this.projectProperty();
	                this.state = 88;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 94;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 95;
	            this.projectProperty();
	            this.state = 96;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 98;
	            this.projectProperty();
	            break;

	        }
	        this.state = 101;
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
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.setName();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.setDescription();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.setDeadline();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.setStatus();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 107;
	            this.setPriority();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 108;
	            this.setDeps();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 109;
	            this.setUsers();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 110;
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



	setName() {
	    let localctx = new SetNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TaskProjectParser.RULE_setName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(TaskProjectParser.NAME);
	        this.state = 114;
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
	    this.enterRule(localctx, 16, TaskProjectParser.RULE_setDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(TaskProjectParser.DESCRIPTION);
	        this.state = 117;
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
	    this.enterRule(localctx, 18, TaskProjectParser.RULE_setDeadline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(TaskProjectParser.DEADLINE);
	        this.state = 120;
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
	    this.enterRule(localctx, 20, TaskProjectParser.RULE_setStatus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(TaskProjectParser.STATUS);
	        this.state = 123;
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
	    this.enterRule(localctx, 22, TaskProjectParser.RULE_setPriority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(TaskProjectParser.PRIORITY);
	        this.state = 126;
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



	setDeps() {
	    let localctx = new SetDepsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TaskProjectParser.RULE_setDeps);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(TaskProjectParser.DEPS);
	        this.state = 129;
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
	    this.enterRule(localctx, 26, TaskProjectParser.RULE_setUsers);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(TaskProjectParser.USERS);
	        this.state = 132;
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
	    this.enterRule(localctx, 28, TaskProjectParser.RULE_setTasks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(TaskProjectParser.TASKS);
	        this.state = 135;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TaskProjectParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(TaskProjectParser.OPEN_BRACES);
	        this.state = 142;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 138;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 139;
	                this.match(TaskProjectParser.COMMA); 
	            }
	            this.state = 144;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 145;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 146;
	            this.match(TaskProjectParser.COMMA);
	            break;

	        case 2:
	            this.state = 147;
	            this.match(TaskProjectParser.TEXT);
	            break;

	        }
	        this.state = 150;
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



	varname() {
	    let localctx = new VarnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TaskProjectParser.RULE_varname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
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
TaskProjectParser.TEXT = 15;
TaskProjectParser.QUOTED_TEXT = 16;
TaskProjectParser.NUM = 17;
TaskProjectParser.COLON = 18;
TaskProjectParser.SEMICOLON = 19;
TaskProjectParser.COMMA = 20;
TaskProjectParser.OPEN_BRACES = 21;
TaskProjectParser.CLOSE_BRACES = 22;
TaskProjectParser.OPEN_PAREN = 23;
TaskProjectParser.CLOSE_PAREN = 24;
TaskProjectParser.SPACE = 25;
TaskProjectParser.NEWLINE = 26;

TaskProjectParser.RULE_program = 0;
TaskProjectParser.RULE_task = 1;
TaskProjectParser.RULE_taskBody = 2;
TaskProjectParser.RULE_taskProperty = 3;
TaskProjectParser.RULE_project = 4;
TaskProjectParser.RULE_projectBody = 5;
TaskProjectParser.RULE_projectProperty = 6;
TaskProjectParser.RULE_setName = 7;
TaskProjectParser.RULE_setDescription = 8;
TaskProjectParser.RULE_setDeadline = 9;
TaskProjectParser.RULE_setStatus = 10;
TaskProjectParser.RULE_setPriority = 11;
TaskProjectParser.RULE_setDeps = 12;
TaskProjectParser.RULE_setUsers = 13;
TaskProjectParser.RULE_setTasks = 14;
TaskProjectParser.RULE_array = 15;
TaskProjectParser.RULE_varname = 16;

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
TaskProjectParser.SetNameContext = SetNameContext; 
TaskProjectParser.SetDescriptionContext = SetDescriptionContext; 
TaskProjectParser.SetDeadlineContext = SetDeadlineContext; 
TaskProjectParser.SetStatusContext = SetStatusContext; 
TaskProjectParser.SetPriorityContext = SetPriorityContext; 
TaskProjectParser.SetDepsContext = SetDepsContext; 
TaskProjectParser.SetUsersContext = SetUsersContext; 
TaskProjectParser.SetTasksContext = SetTasksContext; 
TaskProjectParser.ArrayContext = ArrayContext; 
TaskProjectParser.VarnameContext = VarnameContext; 
