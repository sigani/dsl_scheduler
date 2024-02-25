lexer grammar TaskProjectLexer;


LEADING_SPACE : [ \t]+ -> channel(HIDDEN);

TASK_DEF: 'task ';
PROJECT_DEF: 'project ';
USER_DEF: 'user ';

NAME: 'name:';
DESCRIPTION: 'description:';
DEADLINE: 'deadline:';
STATUS: 'status:';
PRIORITY: 'priority:';
DEPS: 'deps:';
USERS: 'users:';
CALLBACKS: 'callbacks:';

ONUNBLOCK: 'onUnblock:';
REMINDER: 'reminder' [0-9][0-9][0-9][0-9] ':';

EMAIL: 'email:';
TASKS: 'tasks:';
PROJECTS: 'projects:';
ADDITIONAL: 'additional:';

SET: 'set ';
SET_DEPS: 'deps ';

FUNCTION: 'function ';

ASSIGN: 'assign';
STARTED: 'started';
BLOCKED: 'blocked';
FINISHED: 'finished';
PING: 'ping';

IF: 'if ';
ELSE: 'else ';

TEXT: [a-zA-Z][a-zA-Z0-9]*;
QUOTED_TEXT : '"' (~["])* '"';
NUM: [0-9]+;
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
OPEN_BRACES: '{';
CLOSE_BRACES: '}';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
ARROW: '->';
EQ: '=';
NEGATION: '!';
//COMP: ('==' | '!=' | '<' | '>' | '<=' | '>=');
//ANDOR: ('&&' | '||');
SPACE : [\r\n\t ]+ -> channel(HIDDEN);
NEWLINE : [\r\n]+;

// TODO: comment out for now
//TASK_PROJ_FIELDS:
//            (('description' | 'deadline' | 'progress')
//            WS* COLON  WS* QUOTED_TEXT WS* (','WS*)? WS*)
//            |
//            ('priority' WS* COLON WS* NUM+ WS* (','WS*)? WS*)
//            |
//            (('deps' | 'users')
//            COLON WS* OB WS*
//            (TEXT WS* (COMMA TEXT)*)?
//            CB (','WS*)? WS*)
//            |
//            'callbacks'
//            COLON  WS* OB  WS*
//            (TEXT WS* COLON WS* TEXT WS* (','WS*)?)* CB (','WS*)? WS*
//            ;
//
//
//TASK_FIELD: 'tasks'
//            COLON WS* OB WS*
//            (
//                (TEXT | TEXTARROW) WS* (COMMA (TEXT | TEXTARROW) WS*)*
//            ) ?
//            CB (','WS*)? WS*;
//
//FUNC: 'function' WS* TEXT WS*
//    '('((TASK_PROJ | USER) WS* TEXT
//    (',' WS* (TASK_PROJ | USER)WS* TEXT)*)?')'
//    WS*;
//COND:
//    ('if'|'while'|'elif') WS*
//    ORB
//    CONDITIONALS WS* (ANDOR WS* CONDITIONALS WS*)*
//    CRB WS*;
//
//CONDITIONALS:
//    ((TEXT* | NUM*) WS* COMP WS* (TEXT* | NUM*))
//    | ('!'+ TEXT*)
//    | FUNC_INVK ;
//

//FUNC_INVK:
//    TEXT*
//    ORB
//        (TEXT|QUOTED_TEXT)? WS* (COMMA WS* (TEXT|QUOTED_TEXT))*
//    CRB
//    ;

//
//COMMENT: '//' ~('\n'|'\r')* -> channel(HIDDEN);
//
//TEXT: [a-zA-Z][a-zA-Z0-9_.]*;
