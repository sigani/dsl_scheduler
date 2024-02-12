lexer grammar TaskProjectLexer;

TASK_PROJ: ('task' | 'project' ) WS*;
TASK_PROJ_FIELDS: (('name' | 'description' | 'deadline' | 'status') COLON '"' TEXT '"' (',')+)
            |
            ('priority' COLON NUM (',')+)
            |
            (('deps' | 'users') COLON OB (TEXT':'TEXT)* CB (',')+)
            |
            'tasks' COLON OB ((TEXT':'TEXT','+WS*) | (TEXT'->'TEXT','+WS*)) CB 
            |
            'callbacks' COLON OB (TEXT':'TEXT)* CB (',')+
            ;

USER: 'user' WS*;
USER_FIELDS: (('name' | 'email') COLON '"' TEXT '"')
            |
            (('tasks' | 'projects') COLON OB (TEXT':'TEXT)* CB)
            |
            'additionals' COLON OB (WS* '"' TEXT '"' WS* ':' TEXT)* CB
            ;

SET: 'set' WS*;
SET_FIELDS: (USER_FIELDS | TASK_PROJ_FIELDS) WS*;

DEPS: 'deps' WS*;
SET_DEPS: TEXTARROW;

FUNC: 'func' '('TEXT(','WS* TEXT)*')' WS*;
COND: ('if'|'while'|'elif') WS* ORB CONDITIONALS WS* (ANDOR WS* CONDITIONALS WS*)* CRB WS*;
CONDITIONALS: ((TEXT* | NUM*) WS* COMP WS* (TEXT* | NUM*)) | '!'+ TEXT*;
COMP: ('==' | '!=' | '<' | '>' | '<=' | '>=');
ANDOR: ('&&' | '||') WS*;
EQ: '=' WS*;

TEXTARROW: (TEXT* '->' TEXT* ','+ WS*);
NUM: [0-9]+;
TEXT: [a-zA-Z][a-zA-Z0-9_]*;
WS : [\r\n\t ]+ -> channel(HIDDEN);
COLON: WS* ':' WS*;
SC: ';' WS*;
OB: '{' WS*;
CB: '}' WS*;
COMMA: ',' WS*;
ORB: '(' WS*;
CRB: ')' WS*;
