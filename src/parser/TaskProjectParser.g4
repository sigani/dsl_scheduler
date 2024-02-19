parser grammar TaskProjectParser;

options { tokenVocab=TaskProjectLexer; }

program: (taskProject | user_decl 
        | set_decl | set_deps | func_decl 
        | func_invk | COND SC | var_set )* EOF;
taskProject: 
        TASK_PROJ TEXT* WS* 
        (((OB WS* (TASK_PROJ_FIELDS | NAME_FIELD | TASK_FIELD)*
        WS* CB)+)? 
        | (QUOTED_TEXT WS*)
        | OB WS* TEXT WS* (COMMA WS* TEXT)* CB) 
        
        SC;
user_decl:
        USER TEXT* WS* 
        ((OB WS* (USER_FIELDS| NAME_FIELD | TASK_FIELD)* WS* CB)+)? SC;

set_decl:
        SET TEXT* WS* 
        (OB WS* (USER_FIELDS| NAME_FIELD | TASK_FIELD | TASK_PROJ_FIELDS)*
        WS* CB)+ SC;
        
set_deps:
        SET DEPS WS*
        OB WS* (SET_DEPS WS* COMMA? WS*)*
        WS* CB SC;

func_decl:
        FUNC WS* OB func_fields* CB SC;


// what can exist inside a function declaration is
// conditionals/loops (should be same thing)
// function invocations
// project/user/task declarations ig will be okay
// BUT NOT FUNCTION DECLARATIONS CUZ THATD BE TOO HARD
func_fields:
        taskProject
        | user_decl
        | set_decl
        | CONDITIONALS SC WS*
        | var_set
        | condition;
        
condition:
        COND WS* OB statement* WS* CB;

statement: 
        condition
        | func_fields;

var_set:
        TEXT* WS* EQ WS* TEXT* SC;

func_invk:
        CONDITIONALS SC;