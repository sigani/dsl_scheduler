parser grammar TaskProjectParser;

options { tokenVocab=TaskProjectLexer; }

program: (task | project)* EOF;

task: TASK_DEF varname (QUOTED_TEXT | taskBody) SEMICOLON;
taskBody: OPEN_BRACES (taskProperty COMMA)* ((taskProperty COMMA) | taskProperty) CLOSE_BRACES;
taskProperty: setName | setDescription | setDeadline | setStatus | setPriority | setDeps | setUsers;

project: PROJECT_DEF varname (QUOTED_TEXT | projectBody) SEMICOLON;
projectBody: OPEN_BRACES (projectProperty COMMA)* ((projectProperty COMMA) | projectProperty) CLOSE_BRACES;
projectProperty: setName | setDescription | setDeadline | setStatus | setPriority | setDeps | setUsers | setTasks;

setName: NAME QUOTED_TEXT;
setDescription: DESCRIPTION QUOTED_TEXT;
setDeadline: DEADLINE QUOTED_TEXT;
setStatus: STATUS QUOTED_TEXT;
setPriority: PRIORITY NUM;
setDeps: DEPS array;
setUsers: USERS array;
setTasks: TASKS array;

array: OPEN_BRACES (TEXT COMMA)* ((TEXT COMMA) | TEXT) CLOSE_BRACES;

varname: TEXT;


// TODO: comment out for now
//program: (taskProject | user_decl | set_decl | func_decl | func_invk | var_set )* EOF;
//taskProject:
//        TASK_PROJ TEXT* WS* (OB WS* TASK_PROJ_FIELDS* WS* CB)+ SC;
//
//user_decl:
//        USER TEXT* WS* (OB USER_FIELDS* CB)+ SC;
//
//set_decl:
//        SET TEXT* WS* OB SET_FIELDS* CB SC;
//
//func_decl:
//        FUNC OB func_fields* CB SC;
//
//// what can exist inside a function declaration is
//// conditionals/loops (should be same thing)
//// function invocations
//// project/user/task declarations ig will be okay
//// BUT NOT FUNCTION DECLARATIONS CUZ THATD BE TOO HARD
//func_fields:
//        taskProject
//        | user_decl
//        | set_decl
//        | func_invk
//        | var_set
//        | COND;
//
//var_set:
//        TEXT* WS* EQ WS* TEXT* SC;
//
//func_invk:
//        TEXT* ORB TEXT* WS* (COMMA WS* TEXT* )* CRB SC;