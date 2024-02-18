lexer grammar TaskProjectLexer;

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
//ADDITIONAL: 'additional:' SPACE*;


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


SPACE : [\r\n\t ]+ -> channel(HIDDEN);
NEWLINE : [\r\n]+;





//TASK_PROJ: ('task' | 'project' ) WS*;
//TASK_PROJ_FIELDS: (('name' | 'description' | 'deadline' | 'status') WS*  COLON  WS* QUOTED_TEXT WS* (','WS*)? WS*)
//            |
//            ('priority' WS* COLON WS* NUM+ WS* (','WS*)? WS*)
//            |
//            (('deps' | 'users') COLON WS* OB WS* (TEXT COLON TEXT)* CB (','WS*)? WS*)
//            |
//            'tasks' COLON OB ((TEXT':'TEXT','+WS*) | (TEXT'->'TEXT','+WS*)) CB (','WS*)? WS*
//            |
//            'callbacks' COLON OB (TEXT':'TEXT)* CB (','WS*)? WS*
//            ;
//
//USER: 'user' WS*;
//USER_FIELDS: (('name' | 'email') COLON '"' TEXT '"')
//            |
//            (('tasks' | 'projects') COLON OB (TEXT':'TEXT)* CB)
//            |
//            'additionals' COLON OB (WS* '"' TEXT '"' WS* ':' TEXT)* CB
//            ;
//
//SET: 'set' WS*;
//SET_FIELDS: (USER_FIELDS | TASK_PROJ_FIELDS) WS*;
//
//DEPS: 'deps' WS*;
//SET_DEPS: TEXTARROW;
//
//FUNC: 'func' '('TEXT(','WS* TEXT)*')' WS*;
//COND: ('if'|'while'|'elif') WS* ORB CONDITIONALS WS* (ANDOR WS* CONDITIONALS WS*)* CRB WS*;
//CONDITIONALS: ((TEXT* | NUM*) WS* COMP WS* (TEXT* | NUM*)) | '!'+ TEXT*;
//COMP: ('==' | '!=' | '<' | '>' | '<=' | '>=');
//ANDOR: ('&&' | '||') WS*;
//EQ: '=' WS*;
//
//TEXTARROW: (TEXT* '->' TEXT* ','+ WS*);
//NUM: [0-9]+;
//TEXT: [a-zA-Z][a-zA-Z0-9_]*;
//WS : [\r\n\t ]+ -> channel(HIDDEN);
//COLON: ':';
//SC: ';' WS*;
//OB: '{' ;
//CB: '}' ;
//COMMA: ',' WS*;
//ORB: '(' WS*;
//CRB: ')' WS*;
//QUOTED_TEXT : '"' (~["])* '"';