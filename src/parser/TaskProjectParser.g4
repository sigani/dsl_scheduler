parser grammar TaskProjectParser;

options { tokenVocab=TaskProjectLexer; }

program: (taskProject | user_decl | set_decl | func_decl | func_invk | var_set )* EOF;
taskProject: 
        TASK_PROJ TEXT* WS* (OB TASK_PROJ_FIELDS* CB)+ SC;

user_decl:
        USER TEXT* WS* (OB USER_FIELDS* CB)+ SC;

set_decl:
        SET TEXT* WS* OB SET_FIELDS* CB SC;

func_decl:
        FUNC OB func_fields* CB SC;

// what can exist inside a function declaration is
// conditionals/loops (should be same thing)
// function invocations
// project/user/task declarations ig will be okay
// BUT NOT FUNCTION DECLARATIONS CUZ THATD BE TOO HARD
func_fields:
        taskProject
        | user_decl
        | set_decl
        | func_invk
        | var_set
        | COND;

var_set:
        TEXT* WS* EQ WS* TEXT* SC;

func_invk:
        TEXT* ORB TEXT* WS* (COMMA WS* TEXT* )* CRB SC;