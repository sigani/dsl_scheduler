lexer grammar TaskProjectLexer;

// TODO: TEXT include underscore or not

LEADING_SPACE : [ \t]+ -> channel(HIDDEN);

TASK_DEF: 'task ' SPACE*;
PROJECT_DEF: 'project ' SPACE*;
USER_DEF: 'user ' SPACE*;

NAME: 'name:' SPACE*;
DESCRIPTION: 'description:' SPACE*;
DEADLINE: 'deadline:' SPACE*;
STATUS: 'status:' SPACE*;
PRIORITY: 'priority:' SPACE*;
DEPS: 'deps:' SPACE*;
USERS: 'users:' SPACE*;

EMAIL: 'email:' SPACE*;
TASKS: 'tasks:' SPACE*;
PROJECTS: 'projects:' SPACE*;
ADDITIONAL: 'additional:' SPACE*;

SET: 'set ' SPACE*;
SET_DEPS: 'deps ' SPACE*;



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
SPACE : [\r\n\t ]+ -> channel(HIDDEN);
NEWLINE : [\r\n]+;
// TODO: comment out for now
//TASK_PROJ: ('task' | 'project' ) WS*;
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
//USER: 'user' WS*;
//USER_FIELDS:
//            (('email')
//            WS* COLON  WS* QUOTED_TEXT WS* (','WS*)? WS*)
//            |
//            ('projects'
//            COLON WS* OB WS*
//            (TEXT WS* (COMMA TEXT)*)?
//            CB (','WS*)? WS*)
//            |
//            'additional'
//            COLON  WS* OB  WS*
//            (QUOTED_TEXT WS* COLON WS* QUOTED_TEXT WS* (','WS*)?)* CB (','WS*)? WS*
//            ;
//
//NAME_FIELD: 'name' WS* COLON  WS* QUOTED_TEXT WS* (','WS*)? WS*;
//TASK_FIELD: 'tasks'
//            COLON WS* OB WS*
//            (
//                (TEXT | TEXTARROW) WS* (COMMA (TEXT | TEXTARROW) WS*)*
//            ) ?
//            CB (','WS*)? WS*;
//
//
//
//SET: 'set' WS*;
//SET_FIELDS:
//    (USER_FIELDS | TASK_PROJ_FIELDS | NAME_FIELD | TASK_FIELD) WS*;
//
//DEPS: 'deps' WS*;
//SET_DEPS: TEXTARROW;
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
//COMP: ('==' | '!=' | '<' | '>' | '<=' | '>=');
//FUNC_INVK:
//    TEXT*
//    ORB
//        (TEXT|QUOTED_TEXT)? WS* (COMMA WS* (TEXT|QUOTED_TEXT))*
//    CRB
//    ;
//ANDOR: ('&&' | '||') WS*;
//EQ: '=' WS*;
//
//COMMENT: '//' ~('\n'|'\r')* -> channel(HIDDEN);
//
//TEXTARROW: (TEXT '->' TEXT WS*);
//NUM: [0-9]+;
//TEXT: [a-zA-Z][a-zA-Z0-9_.]*;
//WS : [\r\n\t ]+ -> channel(HIDDEN);
//COLON: ':';
//SC: ';' WS*;
//OB: '{' ;
//CB: '}' ;
//COMMA: ',' WS*;
//ORB: '(' WS*;
//CRB: ')' WS*;
//QUOTED_TEXT : '"' (~["])* '"';