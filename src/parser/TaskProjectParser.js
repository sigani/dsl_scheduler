// Generated from src/parser/TaskProjectParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TaskProjectParserListener from './TaskProjectParserListener.js';
const serializedATN = [4,1,26,205,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,0,5,0,23,8,0,10,0,12,0,26,
9,0,1,0,1,0,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,1,5,1,38,8,1,10,1,12,1,
41,9,1,1,1,1,1,5,1,45,8,1,10,1,12,1,48,9,1,1,1,5,1,51,8,1,10,1,12,1,54,9,
1,1,1,5,1,57,8,1,10,1,12,1,60,9,1,1,1,4,1,63,8,1,11,1,12,1,64,1,1,1,1,1,
2,1,2,5,2,71,8,2,10,2,12,2,74,9,2,1,2,5,2,77,8,2,10,2,12,2,80,9,2,1,2,1,
2,5,2,84,8,2,10,2,12,2,87,9,2,1,2,4,2,90,8,2,11,2,12,2,91,1,2,1,2,1,3,1,
3,5,3,98,8,3,10,3,12,3,101,9,3,1,3,5,3,104,8,3,10,3,12,3,107,9,3,1,3,1,3,
5,3,111,8,3,10,3,12,3,114,9,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,122,8,4,10,4,12,
4,125,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,136,8,5,1,6,5,6,139,8,
6,10,6,12,6,142,9,6,1,6,5,6,145,8,6,10,6,12,6,148,9,6,1,6,1,6,5,6,152,8,
6,10,6,12,6,155,9,6,1,6,5,6,158,8,6,10,6,12,6,161,9,6,1,6,1,6,1,7,5,7,166,
8,7,10,7,12,7,169,9,7,1,7,1,7,5,7,173,8,7,10,7,12,7,176,9,7,1,7,5,7,179,
8,7,10,7,12,7,182,9,7,1,7,1,7,5,7,186,8,7,10,7,12,7,189,9,7,1,7,5,7,192,
8,7,10,7,12,7,195,9,7,5,7,197,8,7,10,7,12,7,200,9,7,1,7,1,7,1,7,1,7,0,0,
8,0,2,4,6,8,10,12,14,0,0,231,0,24,1,0,0,0,2,29,1,0,0,0,4,68,1,0,0,0,6,95,
1,0,0,0,8,118,1,0,0,0,10,135,1,0,0,0,12,140,1,0,0,0,14,167,1,0,0,0,16,23,
3,2,1,0,17,23,3,4,2,0,18,23,3,6,3,0,19,23,3,8,4,0,20,23,3,14,7,0,21,23,3,
12,6,0,22,16,1,0,0,0,22,17,1,0,0,0,22,18,1,0,0,0,22,19,1,0,0,0,22,20,1,0,
0,0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,
0,26,24,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,0,29,33,5,1,0,0,30,32,5,17,0,0,
31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,39,1,0,0,0,35,
33,1,0,0,0,36,38,5,18,0,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,
1,0,0,0,40,62,1,0,0,0,41,39,1,0,0,0,42,46,5,21,0,0,43,45,5,18,0,0,44,43,
1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,52,1,0,0,0,48,46,1,
0,0,0,49,51,5,2,0,0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,
0,0,53,58,1,0,0,0,54,52,1,0,0,0,55,57,5,18,0,0,56,55,1,0,0,0,57,60,1,0,0,
0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,63,5,22,0,0,
62,42,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,
67,5,20,0,0,67,3,1,0,0,0,68,72,5,3,0,0,69,71,5,17,0,0,70,69,1,0,0,0,71,74,
1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,78,1,0,0,0,74,72,1,0,0,0,75,77,5,
18,0,0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,89,1,0,
0,0,80,78,1,0,0,0,81,85,5,21,0,0,82,84,5,4,0,0,83,82,1,0,0,0,84,87,1,0,0,
0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,0,0,88,90,5,22,0,0,
89,81,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,
94,5,20,0,0,94,5,1,0,0,0,95,99,5,5,0,0,96,98,5,17,0,0,97,96,1,0,0,0,98,101,
1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,105,1,0,0,0,101,99,1,0,0,0,102,
104,5,18,0,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,
0,0,106,108,1,0,0,0,107,105,1,0,0,0,108,112,5,21,0,0,109,111,5,6,0,0,110,
109,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,115,1,0,
0,0,114,112,1,0,0,0,115,116,5,22,0,0,116,117,5,20,0,0,117,7,1,0,0,0,118,
119,5,9,0,0,119,123,5,21,0,0,120,122,3,10,5,0,121,120,1,0,0,0,122,125,1,
0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,123,1,0,0,0,126,
127,5,22,0,0,127,128,5,20,0,0,128,9,1,0,0,0,129,136,3,2,1,0,130,136,3,4,
2,0,131,136,3,6,3,0,132,136,3,14,7,0,133,136,3,12,6,0,134,136,5,10,0,0,135,
129,1,0,0,0,135,130,1,0,0,0,135,131,1,0,0,0,135,132,1,0,0,0,135,133,1,0,
0,0,135,134,1,0,0,0,136,11,1,0,0,0,137,139,5,17,0,0,138,137,1,0,0,0,139,
142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,146,1,0,0,0,142,140,1,0,
0,0,143,145,5,18,0,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,
147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,149,153,5,14,0,0,150,152,5,18,
0,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,
159,1,0,0,0,155,153,1,0,0,0,156,158,5,17,0,0,157,156,1,0,0,0,158,161,1,0,
0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,
163,5,20,0,0,163,13,1,0,0,0,164,166,5,17,0,0,165,164,1,0,0,0,166,169,1,0,
0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,
174,5,24,0,0,171,173,5,17,0,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,
0,0,0,174,175,1,0,0,0,175,180,1,0,0,0,176,174,1,0,0,0,177,179,5,18,0,0,178,
177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,198,1,0,
0,0,182,180,1,0,0,0,183,187,5,23,0,0,184,186,5,18,0,0,185,184,1,0,0,0,186,
189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,193,1,0,0,0,189,187,1,0,
0,0,190,192,5,17,0,0,191,190,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,
194,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,196,183,1,0,0,0,197,200,1,0,
0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,200,198,1,0,0,0,201,
202,5,25,0,0,202,203,5,20,0,0,203,15,1,0,0,0,27,22,24,33,39,46,52,58,64,
72,78,85,91,99,105,112,123,135,140,146,153,159,167,174,180,187,193,198];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TaskProjectParser extends antlr4.Parser {

    static grammarFileName = "TaskProjectParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "':'", null, "'{'", "'}'" ];
    static symbolicNames = [ null, "TASK_PROJ", "TASK_PROJ_FIELDS", "USER", 
                             "USER_FIELDS", "SET", "SET_FIELDS", "DEPS", 
                             "SET_DEPS", "FUNC", "COND", "CONDITIONALS", 
                             "COMP", "ANDOR", "EQ", "TEXTARROW", "NUM", 
                             "TEXT", "WS", "COLON", "SC", "OB", "CB", "COMMA", 
                             "ORB", "CRB", "QUOTED_TEXT" ];
    static ruleNames = [ "program", "taskProject", "user_decl", "set_decl", 
                         "func_decl", "func_fields", "var_set", "func_invk" ];

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
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17187370) !== 0)) {
	            this.state = 22;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 16;
	                this.taskProject();
	                break;

	            case 2:
	                this.state = 17;
	                this.user_decl();
	                break;

	            case 3:
	                this.state = 18;
	                this.set_decl();
	                break;

	            case 4:
	                this.state = 19;
	                this.func_decl();
	                break;

	            case 5:
	                this.state = 20;
	                this.func_invk();
	                break;

	            case 6:
	                this.state = 21;
	                this.var_set();
	                break;

	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
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
	        this.state = 29;
	        this.match(TaskProjectParser.TASK_PROJ);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 30;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 36;
	            this.match(TaskProjectParser.WS);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 42;
	            this.match(TaskProjectParser.OB);
	            this.state = 46;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 43;
	                    this.match(TaskProjectParser.WS); 
	                }
	                this.state = 48;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 49;
	                this.match(TaskProjectParser.TASK_PROJ_FIELDS);
	                this.state = 54;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===18) {
	                this.state = 55;
	                this.match(TaskProjectParser.WS);
	                this.state = 60;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 61;
	            this.match(TaskProjectParser.CB);
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===21);
	        this.state = 66;
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
	        this.state = 68;
	        this.match(TaskProjectParser.USER);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 69;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 75;
	            this.match(TaskProjectParser.WS);
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 89; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.match(TaskProjectParser.OB);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 82;
	                this.match(TaskProjectParser.USER_FIELDS);
	                this.state = 87;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 88;
	            this.match(TaskProjectParser.CB);
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===21);
	        this.state = 93;
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
	        this.state = 95;
	        this.match(TaskProjectParser.SET);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 96;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 102;
	            this.match(TaskProjectParser.WS);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
	        this.match(TaskProjectParser.OB);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 109;
	            this.match(TaskProjectParser.SET_FIELDS);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 115;
	        this.match(TaskProjectParser.CB);
	        this.state = 116;
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
	    this.enterRule(localctx, 8, TaskProjectParser.RULE_func_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(TaskProjectParser.FUNC);
	        this.state = 119;
	        this.match(TaskProjectParser.OB);
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17187882) !== 0)) {
	            this.state = 120;
	            this.func_fields();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 126;
	        this.match(TaskProjectParser.CB);
	        this.state = 127;
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
	    this.enterRule(localctx, 10, TaskProjectParser.RULE_func_fields);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.taskProject();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.user_decl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.set_decl();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.func_invk();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 133;
	            this.var_set();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 134;
	            this.match(TaskProjectParser.COND);
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
	    this.enterRule(localctx, 12, TaskProjectParser.RULE_var_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 137;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 143;
	            this.match(TaskProjectParser.WS);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 149;
	        this.match(TaskProjectParser.EQ);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 150;
	            this.match(TaskProjectParser.WS);
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 156;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 162;
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
	    this.enterRule(localctx, 14, TaskProjectParser.RULE_func_invk);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 164;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 170;
	        this.match(TaskProjectParser.ORB);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 171;
	            this.match(TaskProjectParser.TEXT);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 177;
	            this.match(TaskProjectParser.WS);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 183;
	            this.match(TaskProjectParser.COMMA);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===18) {
	                this.state = 184;
	                this.match(TaskProjectParser.WS);
	                this.state = 189;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===17) {
	                this.state = 190;
	                this.match(TaskProjectParser.TEXT);
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 201;
	        this.match(TaskProjectParser.CRB);
	        this.state = 202;
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
TaskProjectParser.SET = 5;
TaskProjectParser.SET_FIELDS = 6;
TaskProjectParser.DEPS = 7;
TaskProjectParser.SET_DEPS = 8;
TaskProjectParser.FUNC = 9;
TaskProjectParser.COND = 10;
TaskProjectParser.CONDITIONALS = 11;
TaskProjectParser.COMP = 12;
TaskProjectParser.ANDOR = 13;
TaskProjectParser.EQ = 14;
TaskProjectParser.TEXTARROW = 15;
TaskProjectParser.NUM = 16;
TaskProjectParser.TEXT = 17;
TaskProjectParser.WS = 18;
TaskProjectParser.COLON = 19;
TaskProjectParser.SC = 20;
TaskProjectParser.OB = 21;
TaskProjectParser.CB = 22;
TaskProjectParser.COMMA = 23;
TaskProjectParser.ORB = 24;
TaskProjectParser.CRB = 25;
TaskProjectParser.QUOTED_TEXT = 26;

TaskProjectParser.RULE_program = 0;
TaskProjectParser.RULE_taskProject = 1;
TaskProjectParser.RULE_user_decl = 2;
TaskProjectParser.RULE_set_decl = 3;
TaskProjectParser.RULE_func_decl = 4;
TaskProjectParser.RULE_func_fields = 5;
TaskProjectParser.RULE_var_set = 6;
TaskProjectParser.RULE_func_invk = 7;

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

	OB() {
	    return this.getToken(TaskProjectParser.OB, 0);
	};

	CB() {
	    return this.getToken(TaskProjectParser.CB, 0);
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


	SET_FIELDS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TaskProjectParser.SET_FIELDS);
	    } else {
	        return this.getToken(TaskProjectParser.SET_FIELDS, i);
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

	func_invk() {
	    return this.getTypedRuleContext(Func_invkContext,0);
	};

	var_set() {
	    return this.getTypedRuleContext(Var_setContext,0);
	};

	COND() {
	    return this.getToken(TaskProjectParser.COND, 0);
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

	ORB() {
	    return this.getToken(TaskProjectParser.ORB, 0);
	};

	CRB() {
	    return this.getToken(TaskProjectParser.CRB, 0);
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
TaskProjectParser.Func_declContext = Func_declContext; 
TaskProjectParser.Func_fieldsContext = Func_fieldsContext; 
TaskProjectParser.Var_setContext = Var_setContext; 
TaskProjectParser.Func_invkContext = Func_invkContext; 
