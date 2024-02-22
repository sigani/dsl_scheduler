parser grammar TaskProjectParser;

options { tokenVocab=TaskProjectLexer; }

program: (task | project | user)* EOF;

task: TASK_DEF varname (QUOTED_TEXT | taskBody) SEMICOLON;
taskBody: OPEN_BRACES (taskProperty COMMA)* ((taskProperty COMMA) | taskProperty) CLOSE_BRACES;
taskProperty: setName | setDescription | setDeadline | setStatus | setPriority | setDeps | setUsers;

project: PROJECT_DEF varname (QUOTED_TEXT | projectBody | array) SEMICOLON;
projectBody: OPEN_BRACES (projectProperty COMMA)* ((projectProperty COMMA) | projectProperty) CLOSE_BRACES;
projectProperty: setName | setDescription | setDeadline | setStatus | setPriority | setDeps | setUsers | setTasks;

user: USER_DEF varname (QUOTED_TEXT | userBody) SEMICOLON;
userBody: OPEN_BRACES (userProperty COMMA)* ((userProperty COMMA) | userProperty) CLOSE_BRACES;
userProperty: setName | setEmail | setTasks | setProjects | setAdditional;

setName: NAME QUOTED_TEXT;
setDescription: DESCRIPTION QUOTED_TEXT;
setDeadline: DEADLINE QUOTED_TEXT;
setStatus: STATUS QUOTED_TEXT;
setPriority: PRIORITY NUM;
setEmail: EMAIL QUOTED_TEXT;
setDeps: DEPS array;
setUsers: USERS array;
setTasks: TASKS array;
setProjects: PROJECTS array;
setAdditional: ADDITIONAL OPEN_BRACES (additional COMMA)* ((additional COMMA) | additional) CLOSE_BRACES;

array: OPEN_BRACES (TEXT COMMA)* ((TEXT COMMA) | TEXT) CLOSE_BRACES;

additional: additionalKey COLON additionalValue;
additionalKey: QUOTED_TEXT;
additionalValue: QUOTED_TEXT;

varname: TEXT;


// TODO: comment out for now
//program: (taskProject | user_decl
//        | set_decl | set_deps | func_decl
//        | func_invk | COND SC | var_set )* EOF;
//taskProject:
//        TASK_PROJ TEXT* WS*
//        (((OB WS* (TASK_PROJ_FIELDS | NAME_FIELD | TASK_FIELD)*
//        WS* CB)+)?
//        | (QUOTED_TEXT WS*)
//        | OB WS* TEXT WS* (COMMA WS* TEXT)* CB)
//
//        SC;
//user_decl:
//        USER TEXT* WS*
//        ((OB WS* (USER_FIELDS| NAME_FIELD | TASK_FIELD)* WS* CB)+)? SC;
//
//set_decl:
//        SET TEXT* WS*
//        (OB WS* (USER_FIELDS| NAME_FIELD | TASK_FIELD | TASK_PROJ_FIELDS)*
//        WS* CB)+ SC;
//
//set_deps:
//        SET DEPS WS*
//        OB WS* (SET_DEPS WS* COMMA? WS*)*
//        WS* CB SC;
//
//func_decl:
//        FUNC WS* OB func_fields* CB SC;
//
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
//        | CONDITIONALS SC WS*
//        | var_set
//        | condition;
//
//condition:
//        COND WS* OB statement* WS* CB;
//
//statement:
//        condition
//        | func_fields;
//
//var_set:
//        TEXT* WS* EQ WS* TEXT* SC;
//
//func_invk:
//        CONDITIONALS SC;