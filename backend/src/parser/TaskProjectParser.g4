parser grammar TaskProjectParser;

options { tokenVocab=TaskProjectLexer; }

program: (task | project | user | set | setDepsArrowNotation | func)* EOF;

task: TASK_DEF varname (QUOTED_TEXT | taskBody) SEMICOLON;
taskBody: OPEN_BRACES (taskProperty COMMA)* ((taskProperty COMMA) | taskProperty) CLOSE_BRACES;
taskProperty: setName | setDescription | setDeadline | setStatus | setPriority | setDeps | setUsers | setCallbacks;

project: PROJECT_DEF varname (QUOTED_TEXT | projectBody | array) SEMICOLON;
projectBody: OPEN_BRACES (projectProperty COMMA)* ((projectProperty COMMA) | projectProperty) CLOSE_BRACES;
projectProperty: setName | setDescription | setDeadline | setStatus | setPriority | setDeps | setUsers | setTasks;

user: USER_DEF varname (QUOTED_TEXT | userBody) SEMICOLON;
userBody: OPEN_BRACES (userProperty COMMA)* ((userProperty COMMA) | userProperty) CLOSE_BRACES;
userProperty: setName | setEmail | setTasks | setProjects | setAdditional;

set: SET varname OPEN_BRACES (setProperty COMMA)* ((setProperty COMMA) | setProperty) CLOSE_BRACES SEMICOLON;
setProperty: setName | setDescription | setDeadline | setStatus | setPriority | setEmail | setDeps | setUsers |
                setTasks | setProjects | setAdditional | setCallbacks;

setDepsArrowNotation: SET SET_DEPS OPEN_BRACES (depsArrow COMMA)* ((depsArrow COMMA) | depsArrow) CLOSE_BRACES SEMICOLON;

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
setCallbacks: CALLBACKS OPEN_BRACES (callBackFields COMMA)* ((callBackFields COMMA) | callBackFields)  CLOSE_BRACES ;
callBackFields: onUnblock | reminder;

onUnblock: ONUNBLOCK varname;
reminder: REMINDER varname;

//func: FUNCTION funcname OPEN_PAREN ((param COMMA)* ((param COMMA) | param))? CLOSE_PAREN functionBody SEMICOLON;
func: FUNCTION funcname OPEN_PAREN CLOSE_PAREN functionBody SEMICOLON;
//param: (TASK_DEF | PROJECT_DEF | USER_DEF) TEXT;
functionBody: OPEN_BRACES funcFields* CLOSE_BRACES;
funcFields: (assign | started | blocked | finished | ping | conditional) SEMICOLON;

conditional: IF OPEN_PAREN condition CLOSE_PAREN block (ELSE block)?;
condition: NEGATION? (started | blocked | finished);
block: OPEN_BRACES (blockFields)* CLOSE_BRACES;
blockFields: (assign | started | blocked | finished | ping) SEMICOLON;

assign: ASSIGN OPEN_PAREN varname COMMA varname CLOSE_PAREN;
started: STARTED OPEN_PAREN varname CLOSE_PAREN;
blocked: BLOCKED OPEN_PAREN varname CLOSE_PAREN;
finished: FINISHED OPEN_PAREN varname CLOSE_PAREN;
ping: PING OPEN_PAREN varname (COMMA QUOTED_TEXT)? CLOSE_PAREN;

array: OPEN_BRACES (TEXT COMMA)* ((TEXT COMMA) | TEXT) CLOSE_BRACES;

additional: additionalKey COLON additionalValue;
additionalKey: QUOTED_TEXT;
additionalValue: QUOTED_TEXT;

depsArrow: left ARROW right;
left: TEXT;
right: TEXT;

varname: TEXT;
funcname: TEXT;


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