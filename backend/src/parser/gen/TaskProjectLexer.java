// Generated from /Users/yuheiarimoto/Documents/UBC/2023-W2/CPSC410/Group22Project1/backend/src/parser/TaskProjectLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class TaskProjectLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LEADING_SPACE=1, TASK_DEF=2, PROJECT_DEF=3, USER_DEF=4, NAME=5, DESCRIPTION=6, 
		DEADLINE=7, STATUS=8, PRIORITY=9, DEPS=10, USERS=11, CALLBACKS=12, ONUNBLOCK=13, 
		REMINDER=14, EMAIL=15, TASKS=16, PROJECTS=17, ADDITIONAL=18, SET=19, SET_DEPS=20, 
		FUNCTION=21, ASSIGN=22, STARTED=23, BLOCKED=24, FINISHED=25, PING=26, 
		IF=27, ELSE=28, TEXT=29, QUOTED_TEXT=30, NUM=31, COLON=32, SEMICOLON=33, 
		COMMA=34, OPEN_BRACES=35, CLOSE_BRACES=36, OPEN_PAREN=37, CLOSE_PAREN=38, 
		ARROW=39, EQ=40, NEGATION=41, SPACE=42, NEWLINE=43;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", "USER_DEF", "NAME", "DESCRIPTION", 
			"DEADLINE", "STATUS", "PRIORITY", "DEPS", "USERS", "CALLBACKS", "ONUNBLOCK", 
			"REMINDER", "EMAIL", "TASKS", "PROJECTS", "ADDITIONAL", "SET", "SET_DEPS", 
			"FUNCTION", "ASSIGN", "STARTED", "BLOCKED", "FINISHED", "PING", "IF", 
			"ELSE", "TEXT", "QUOTED_TEXT", "NUM", "COLON", "SEMICOLON", "COMMA", 
			"OPEN_BRACES", "CLOSE_BRACES", "OPEN_PAREN", "CLOSE_PAREN", "ARROW", 
			"EQ", "NEGATION", "SPACE", "NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'task '", "'project '", "'user '", "'name:'", "'description:'", 
			"'deadline:'", "'status:'", "'priority:'", "'deps:'", "'users:'", "'callbacks:'", 
			"'onUnblock:'", null, "'email:'", "'tasks:'", "'projects:'", "'additional:'", 
			"'set '", "'deps '", "'function '", "'assign'", "'started'", "'blocked'", 
			"'finished'", "'ping'", "'if '", "'else '", null, null, null, "':'", 
			"';'", "','", "'{'", "'}'", "'('", "')'", "'->'", "'='", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "TASK_DEF", "PROJECT_DEF", "USER_DEF", "NAME", 
			"DESCRIPTION", "DEADLINE", "STATUS", "PRIORITY", "DEPS", "USERS", "CALLBACKS", 
			"ONUNBLOCK", "REMINDER", "EMAIL", "TASKS", "PROJECTS", "ADDITIONAL", 
			"SET", "SET_DEPS", "FUNCTION", "ASSIGN", "STARTED", "BLOCKED", "FINISHED", 
			"PING", "IF", "ELSE", "TEXT", "QUOTED_TEXT", "NUM", "COLON", "SEMICOLON", 
			"COMMA", "OPEN_BRACES", "CLOSE_BRACES", "OPEN_PAREN", "CLOSE_PAREN", 
			"ARROW", "EQ", "NEGATION", "SPACE", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TaskProjectLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TaskProjectLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000+\u0172\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007"+
		"!\u0002\"\u0007\"\u0002#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007"+
		"&\u0002\'\u0007\'\u0002(\u0007(\u0002)\u0007)\u0002*\u0007*\u0001\u0000"+
		"\u0004\u0000Y\b\u0000\u000b\u0000\f\u0000Z\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0005\u001c\u013f\b\u001c\n"+
		"\u001c\f\u001c\u0142\t\u001c\u0001\u001d\u0001\u001d\u0005\u001d\u0146"+
		"\b\u001d\n\u001d\f\u001d\u0149\t\u001d\u0001\u001d\u0001\u001d\u0001\u001e"+
		"\u0004\u001e\u014e\b\u001e\u000b\u001e\f\u001e\u014f\u0001\u001f\u0001"+
		"\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001\"\u0001#\u0001#\u0001"+
		"$\u0001$\u0001%\u0001%\u0001&\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001"+
		"(\u0001)\u0004)\u0168\b)\u000b)\f)\u0169\u0001)\u0001)\u0001*\u0004*\u016f"+
		"\b*\u000b*\f*\u0170\u0000\u0000+\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013"+
		"\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b7\u001c9\u001d"+
		";\u001e=\u001f? A!C\"E#G$I%K&M\'O(Q)S*U+\u0001\u0000\u0007\u0002\u0000"+
		"\t\t  \u0001\u000009\u0002\u0000AZaz\u0003\u000009AZaz\u0001\u0000\"\""+
		"\u0003\u0000\t\n\r\r  \u0002\u0000\n\n\r\r\u0177\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u0000"+
		"1\u0001\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u00005\u0001"+
		"\u0000\u0000\u0000\u00007\u0001\u0000\u0000\u0000\u00009\u0001\u0000\u0000"+
		"\u0000\u0000;\u0001\u0000\u0000\u0000\u0000=\u0001\u0000\u0000\u0000\u0000"+
		"?\u0001\u0000\u0000\u0000\u0000A\u0001\u0000\u0000\u0000\u0000C\u0001"+
		"\u0000\u0000\u0000\u0000E\u0001\u0000\u0000\u0000\u0000G\u0001\u0000\u0000"+
		"\u0000\u0000I\u0001\u0000\u0000\u0000\u0000K\u0001\u0000\u0000\u0000\u0000"+
		"M\u0001\u0000\u0000\u0000\u0000O\u0001\u0000\u0000\u0000\u0000Q\u0001"+
		"\u0000\u0000\u0000\u0000S\u0001\u0000\u0000\u0000\u0000U\u0001\u0000\u0000"+
		"\u0000\u0001X\u0001\u0000\u0000\u0000\u0003^\u0001\u0000\u0000\u0000\u0005"+
		"d\u0001\u0000\u0000\u0000\u0007m\u0001\u0000\u0000\u0000\ts\u0001\u0000"+
		"\u0000\u0000\u000by\u0001\u0000\u0000\u0000\r\u0086\u0001\u0000\u0000"+
		"\u0000\u000f\u0090\u0001\u0000\u0000\u0000\u0011\u0098\u0001\u0000\u0000"+
		"\u0000\u0013\u00a2\u0001\u0000\u0000\u0000\u0015\u00a8\u0001\u0000\u0000"+
		"\u0000\u0017\u00af\u0001\u0000\u0000\u0000\u0019\u00ba\u0001\u0000\u0000"+
		"\u0000\u001b\u00c5\u0001\u0000\u0000\u0000\u001d\u00d4\u0001\u0000\u0000"+
		"\u0000\u001f\u00db\u0001\u0000\u0000\u0000!\u00e2\u0001\u0000\u0000\u0000"+
		"#\u00ec\u0001\u0000\u0000\u0000%\u00f8\u0001\u0000\u0000\u0000\'\u00fd"+
		"\u0001\u0000\u0000\u0000)\u0103\u0001\u0000\u0000\u0000+\u010d\u0001\u0000"+
		"\u0000\u0000-\u0114\u0001\u0000\u0000\u0000/\u011c\u0001\u0000\u0000\u0000"+
		"1\u0124\u0001\u0000\u0000\u00003\u012d\u0001\u0000\u0000\u00005\u0132"+
		"\u0001\u0000\u0000\u00007\u0136\u0001\u0000\u0000\u00009\u013c\u0001\u0000"+
		"\u0000\u0000;\u0143\u0001\u0000\u0000\u0000=\u014d\u0001\u0000\u0000\u0000"+
		"?\u0151\u0001\u0000\u0000\u0000A\u0153\u0001\u0000\u0000\u0000C\u0155"+
		"\u0001\u0000\u0000\u0000E\u0157\u0001\u0000\u0000\u0000G\u0159\u0001\u0000"+
		"\u0000\u0000I\u015b\u0001\u0000\u0000\u0000K\u015d\u0001\u0000\u0000\u0000"+
		"M\u015f\u0001\u0000\u0000\u0000O\u0162\u0001\u0000\u0000\u0000Q\u0164"+
		"\u0001\u0000\u0000\u0000S\u0167\u0001\u0000\u0000\u0000U\u016e\u0001\u0000"+
		"\u0000\u0000WY\u0007\u0000\u0000\u0000XW\u0001\u0000\u0000\u0000YZ\u0001"+
		"\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000"+
		"[\\\u0001\u0000\u0000\u0000\\]\u0006\u0000\u0000\u0000]\u0002\u0001\u0000"+
		"\u0000\u0000^_\u0005t\u0000\u0000_`\u0005a\u0000\u0000`a\u0005s\u0000"+
		"\u0000ab\u0005k\u0000\u0000bc\u0005 \u0000\u0000c\u0004\u0001\u0000\u0000"+
		"\u0000de\u0005p\u0000\u0000ef\u0005r\u0000\u0000fg\u0005o\u0000\u0000"+
		"gh\u0005j\u0000\u0000hi\u0005e\u0000\u0000ij\u0005c\u0000\u0000jk\u0005"+
		"t\u0000\u0000kl\u0005 \u0000\u0000l\u0006\u0001\u0000\u0000\u0000mn\u0005"+
		"u\u0000\u0000no\u0005s\u0000\u0000op\u0005e\u0000\u0000pq\u0005r\u0000"+
		"\u0000qr\u0005 \u0000\u0000r\b\u0001\u0000\u0000\u0000st\u0005n\u0000"+
		"\u0000tu\u0005a\u0000\u0000uv\u0005m\u0000\u0000vw\u0005e\u0000\u0000"+
		"wx\u0005:\u0000\u0000x\n\u0001\u0000\u0000\u0000yz\u0005d\u0000\u0000"+
		"z{\u0005e\u0000\u0000{|\u0005s\u0000\u0000|}\u0005c\u0000\u0000}~\u0005"+
		"r\u0000\u0000~\u007f\u0005i\u0000\u0000\u007f\u0080\u0005p\u0000\u0000"+
		"\u0080\u0081\u0005t\u0000\u0000\u0081\u0082\u0005i\u0000\u0000\u0082\u0083"+
		"\u0005o\u0000\u0000\u0083\u0084\u0005n\u0000\u0000\u0084\u0085\u0005:"+
		"\u0000\u0000\u0085\f\u0001\u0000\u0000\u0000\u0086\u0087\u0005d\u0000"+
		"\u0000\u0087\u0088\u0005e\u0000\u0000\u0088\u0089\u0005a\u0000\u0000\u0089"+
		"\u008a\u0005d\u0000\u0000\u008a\u008b\u0005l\u0000\u0000\u008b\u008c\u0005"+
		"i\u0000\u0000\u008c\u008d\u0005n\u0000\u0000\u008d\u008e\u0005e\u0000"+
		"\u0000\u008e\u008f\u0005:\u0000\u0000\u008f\u000e\u0001\u0000\u0000\u0000"+
		"\u0090\u0091\u0005s\u0000\u0000\u0091\u0092\u0005t\u0000\u0000\u0092\u0093"+
		"\u0005a\u0000\u0000\u0093\u0094\u0005t\u0000\u0000\u0094\u0095\u0005u"+
		"\u0000\u0000\u0095\u0096\u0005s\u0000\u0000\u0096\u0097\u0005:\u0000\u0000"+
		"\u0097\u0010\u0001\u0000\u0000\u0000\u0098\u0099\u0005p\u0000\u0000\u0099"+
		"\u009a\u0005r\u0000\u0000\u009a\u009b\u0005i\u0000\u0000\u009b\u009c\u0005"+
		"o\u0000\u0000\u009c\u009d\u0005r\u0000\u0000\u009d\u009e\u0005i\u0000"+
		"\u0000\u009e\u009f\u0005t\u0000\u0000\u009f\u00a0\u0005y\u0000\u0000\u00a0"+
		"\u00a1\u0005:\u0000\u0000\u00a1\u0012\u0001\u0000\u0000\u0000\u00a2\u00a3"+
		"\u0005d\u0000\u0000\u00a3\u00a4\u0005e\u0000\u0000\u00a4\u00a5\u0005p"+
		"\u0000\u0000\u00a5\u00a6\u0005s\u0000\u0000\u00a6\u00a7\u0005:\u0000\u0000"+
		"\u00a7\u0014\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005u\u0000\u0000\u00a9"+
		"\u00aa\u0005s\u0000\u0000\u00aa\u00ab\u0005e\u0000\u0000\u00ab\u00ac\u0005"+
		"r\u0000\u0000\u00ac\u00ad\u0005s\u0000\u0000\u00ad\u00ae\u0005:\u0000"+
		"\u0000\u00ae\u0016\u0001\u0000\u0000\u0000\u00af\u00b0\u0005c\u0000\u0000"+
		"\u00b0\u00b1\u0005a\u0000\u0000\u00b1\u00b2\u0005l\u0000\u0000\u00b2\u00b3"+
		"\u0005l\u0000\u0000\u00b3\u00b4\u0005b\u0000\u0000\u00b4\u00b5\u0005a"+
		"\u0000\u0000\u00b5\u00b6\u0005c\u0000\u0000\u00b6\u00b7\u0005k\u0000\u0000"+
		"\u00b7\u00b8\u0005s\u0000\u0000\u00b8\u00b9\u0005:\u0000\u0000\u00b9\u0018"+
		"\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005o\u0000\u0000\u00bb\u00bc\u0005"+
		"n\u0000\u0000\u00bc\u00bd\u0005U\u0000\u0000\u00bd\u00be\u0005n\u0000"+
		"\u0000\u00be\u00bf\u0005b\u0000\u0000\u00bf\u00c0\u0005l\u0000\u0000\u00c0"+
		"\u00c1\u0005o\u0000\u0000\u00c1\u00c2\u0005c\u0000\u0000\u00c2\u00c3\u0005"+
		"k\u0000\u0000\u00c3\u00c4\u0005:\u0000\u0000\u00c4\u001a\u0001\u0000\u0000"+
		"\u0000\u00c5\u00c6\u0005r\u0000\u0000\u00c6\u00c7\u0005e\u0000\u0000\u00c7"+
		"\u00c8\u0005m\u0000\u0000\u00c8\u00c9\u0005i\u0000\u0000\u00c9\u00ca\u0005"+
		"n\u0000\u0000\u00ca\u00cb\u0005d\u0000\u0000\u00cb\u00cc\u0005e\u0000"+
		"\u0000\u00cc\u00cd\u0005r\u0000\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000"+
		"\u00ce\u00cf\u0007\u0001\u0000\u0000\u00cf\u00d0\u0007\u0001\u0000\u0000"+
		"\u00d0\u00d1\u0007\u0001\u0000\u0000\u00d1\u00d2\u0007\u0001\u0000\u0000"+
		"\u00d2\u00d3\u0005:\u0000\u0000\u00d3\u001c\u0001\u0000\u0000\u0000\u00d4"+
		"\u00d5\u0005e\u0000\u0000\u00d5\u00d6\u0005m\u0000\u0000\u00d6\u00d7\u0005"+
		"a\u0000\u0000\u00d7\u00d8\u0005i\u0000\u0000\u00d8\u00d9\u0005l\u0000"+
		"\u0000\u00d9\u00da\u0005:\u0000\u0000\u00da\u001e\u0001\u0000\u0000\u0000"+
		"\u00db\u00dc\u0005t\u0000\u0000\u00dc\u00dd\u0005a\u0000\u0000\u00dd\u00de"+
		"\u0005s\u0000\u0000\u00de\u00df\u0005k\u0000\u0000\u00df\u00e0\u0005s"+
		"\u0000\u0000\u00e0\u00e1\u0005:\u0000\u0000\u00e1 \u0001\u0000\u0000\u0000"+
		"\u00e2\u00e3\u0005p\u0000\u0000\u00e3\u00e4\u0005r\u0000\u0000\u00e4\u00e5"+
		"\u0005o\u0000\u0000\u00e5\u00e6\u0005j\u0000\u0000\u00e6\u00e7\u0005e"+
		"\u0000\u0000\u00e7\u00e8\u0005c\u0000\u0000\u00e8\u00e9\u0005t\u0000\u0000"+
		"\u00e9\u00ea\u0005s\u0000\u0000\u00ea\u00eb\u0005:\u0000\u0000\u00eb\""+
		"\u0001\u0000\u0000\u0000\u00ec\u00ed\u0005a\u0000\u0000\u00ed\u00ee\u0005"+
		"d\u0000\u0000\u00ee\u00ef\u0005d\u0000\u0000\u00ef\u00f0\u0005i\u0000"+
		"\u0000\u00f0\u00f1\u0005t\u0000\u0000\u00f1\u00f2\u0005i\u0000\u0000\u00f2"+
		"\u00f3\u0005o\u0000\u0000\u00f3\u00f4\u0005n\u0000\u0000\u00f4\u00f5\u0005"+
		"a\u0000\u0000\u00f5\u00f6\u0005l\u0000\u0000\u00f6\u00f7\u0005:\u0000"+
		"\u0000\u00f7$\u0001\u0000\u0000\u0000\u00f8\u00f9\u0005s\u0000\u0000\u00f9"+
		"\u00fa\u0005e\u0000\u0000\u00fa\u00fb\u0005t\u0000\u0000\u00fb\u00fc\u0005"+
		" \u0000\u0000\u00fc&\u0001\u0000\u0000\u0000\u00fd\u00fe\u0005d\u0000"+
		"\u0000\u00fe\u00ff\u0005e\u0000\u0000\u00ff\u0100\u0005p\u0000\u0000\u0100"+
		"\u0101\u0005s\u0000\u0000\u0101\u0102\u0005 \u0000\u0000\u0102(\u0001"+
		"\u0000\u0000\u0000\u0103\u0104\u0005f\u0000\u0000\u0104\u0105\u0005u\u0000"+
		"\u0000\u0105\u0106\u0005n\u0000\u0000\u0106\u0107\u0005c\u0000\u0000\u0107"+
		"\u0108\u0005t\u0000\u0000\u0108\u0109\u0005i\u0000\u0000\u0109\u010a\u0005"+
		"o\u0000\u0000\u010a\u010b\u0005n\u0000\u0000\u010b\u010c\u0005 \u0000"+
		"\u0000\u010c*\u0001\u0000\u0000\u0000\u010d\u010e\u0005a\u0000\u0000\u010e"+
		"\u010f\u0005s\u0000\u0000\u010f\u0110\u0005s\u0000\u0000\u0110\u0111\u0005"+
		"i\u0000\u0000\u0111\u0112\u0005g\u0000\u0000\u0112\u0113\u0005n\u0000"+
		"\u0000\u0113,\u0001\u0000\u0000\u0000\u0114\u0115\u0005s\u0000\u0000\u0115"+
		"\u0116\u0005t\u0000\u0000\u0116\u0117\u0005a\u0000\u0000\u0117\u0118\u0005"+
		"r\u0000\u0000\u0118\u0119\u0005t\u0000\u0000\u0119\u011a\u0005e\u0000"+
		"\u0000\u011a\u011b\u0005d\u0000\u0000\u011b.\u0001\u0000\u0000\u0000\u011c"+
		"\u011d\u0005b\u0000\u0000\u011d\u011e\u0005l\u0000\u0000\u011e\u011f\u0005"+
		"o\u0000\u0000\u011f\u0120\u0005c\u0000\u0000\u0120\u0121\u0005k\u0000"+
		"\u0000\u0121\u0122\u0005e\u0000\u0000\u0122\u0123\u0005d\u0000\u0000\u0123"+
		"0\u0001\u0000\u0000\u0000\u0124\u0125\u0005f\u0000\u0000\u0125\u0126\u0005"+
		"i\u0000\u0000\u0126\u0127\u0005n\u0000\u0000\u0127\u0128\u0005i\u0000"+
		"\u0000\u0128\u0129\u0005s\u0000\u0000\u0129\u012a\u0005h\u0000\u0000\u012a"+
		"\u012b\u0005e\u0000\u0000\u012b\u012c\u0005d\u0000\u0000\u012c2\u0001"+
		"\u0000\u0000\u0000\u012d\u012e\u0005p\u0000\u0000\u012e\u012f\u0005i\u0000"+
		"\u0000\u012f\u0130\u0005n\u0000\u0000\u0130\u0131\u0005g\u0000\u0000\u0131"+
		"4\u0001\u0000\u0000\u0000\u0132\u0133\u0005i\u0000\u0000\u0133\u0134\u0005"+
		"f\u0000\u0000\u0134\u0135\u0005 \u0000\u0000\u01356\u0001\u0000\u0000"+
		"\u0000\u0136\u0137\u0005e\u0000\u0000\u0137\u0138\u0005l\u0000\u0000\u0138"+
		"\u0139\u0005s\u0000\u0000\u0139\u013a\u0005e\u0000\u0000\u013a\u013b\u0005"+
		" \u0000\u0000\u013b8\u0001\u0000\u0000\u0000\u013c\u0140\u0007\u0002\u0000"+
		"\u0000\u013d\u013f\u0007\u0003\u0000\u0000\u013e\u013d\u0001\u0000\u0000"+
		"\u0000\u013f\u0142\u0001\u0000\u0000\u0000\u0140\u013e\u0001\u0000\u0000"+
		"\u0000\u0140\u0141\u0001\u0000\u0000\u0000\u0141:\u0001\u0000\u0000\u0000"+
		"\u0142\u0140\u0001\u0000\u0000\u0000\u0143\u0147\u0005\"\u0000\u0000\u0144"+
		"\u0146\b\u0004\u0000\u0000\u0145\u0144\u0001\u0000\u0000\u0000\u0146\u0149"+
		"\u0001\u0000\u0000\u0000\u0147\u0145\u0001\u0000\u0000\u0000\u0147\u0148"+
		"\u0001\u0000\u0000\u0000\u0148\u014a\u0001\u0000\u0000\u0000\u0149\u0147"+
		"\u0001\u0000\u0000\u0000\u014a\u014b\u0005\"\u0000\u0000\u014b<\u0001"+
		"\u0000\u0000\u0000\u014c\u014e\u0007\u0001\u0000\u0000\u014d\u014c\u0001"+
		"\u0000\u0000\u0000\u014e\u014f\u0001\u0000\u0000\u0000\u014f\u014d\u0001"+
		"\u0000\u0000\u0000\u014f\u0150\u0001\u0000\u0000\u0000\u0150>\u0001\u0000"+
		"\u0000\u0000\u0151\u0152\u0005:\u0000\u0000\u0152@\u0001\u0000\u0000\u0000"+
		"\u0153\u0154\u0005;\u0000\u0000\u0154B\u0001\u0000\u0000\u0000\u0155\u0156"+
		"\u0005,\u0000\u0000\u0156D\u0001\u0000\u0000\u0000\u0157\u0158\u0005{"+
		"\u0000\u0000\u0158F\u0001\u0000\u0000\u0000\u0159\u015a\u0005}\u0000\u0000"+
		"\u015aH\u0001\u0000\u0000\u0000\u015b\u015c\u0005(\u0000\u0000\u015cJ"+
		"\u0001\u0000\u0000\u0000\u015d\u015e\u0005)\u0000\u0000\u015eL\u0001\u0000"+
		"\u0000\u0000\u015f\u0160\u0005-\u0000\u0000\u0160\u0161\u0005>\u0000\u0000"+
		"\u0161N\u0001\u0000\u0000\u0000\u0162\u0163\u0005=\u0000\u0000\u0163P"+
		"\u0001\u0000\u0000\u0000\u0164\u0165\u0005!\u0000\u0000\u0165R\u0001\u0000"+
		"\u0000\u0000\u0166\u0168\u0007\u0005\u0000\u0000\u0167\u0166\u0001\u0000"+
		"\u0000\u0000\u0168\u0169\u0001\u0000\u0000\u0000\u0169\u0167\u0001\u0000"+
		"\u0000\u0000\u0169\u016a\u0001\u0000\u0000\u0000\u016a\u016b\u0001\u0000"+
		"\u0000\u0000\u016b\u016c\u0006)\u0000\u0000\u016cT\u0001\u0000\u0000\u0000"+
		"\u016d\u016f\u0007\u0006\u0000\u0000\u016e\u016d\u0001\u0000\u0000\u0000"+
		"\u016f\u0170\u0001\u0000\u0000\u0000\u0170\u016e\u0001\u0000\u0000\u0000"+
		"\u0170\u0171\u0001\u0000\u0000\u0000\u0171V\u0001\u0000\u0000\u0000\u0007"+
		"\u0000Z\u0140\u0147\u014f\u0169\u0170\u0001\u0000\u0001\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}