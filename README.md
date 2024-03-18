# Demo
https://github.com/sigani/dsl_scheduler/assets/82123942/9ef62346-b911-4d6e-96fa-01f5f93414b4

# HOW TO SETUP PROJECT
1. cd into backend  
2. run `npm install`  
3. copy the `.envexample` file, rename it to `.env`, and fill out the secrets based off AWS console
4. do `npm run start`  
5. cd into frontend  
6. run `npm install`  
7. run `npm run dev`  
8. open localhost  

# Features of the language
```
// “system” types
// task
// project
// user

// example uses of types
task nameoftask "Name of task"; // this will just set the name of the task

task nameoftask {
    name: "",
    description: "",
    deadline: "",
    progress: "", 
            // defaults are (not started, in progress, completed).
            // users may be able to add custom statuses, but not remove/alter these ones
            // any number, up to the user to decide what that means.  Default is 0
    priority: 9, 
    deps: {task1, task2},
    users: {user1, user2},
    callbacks: {reminder1025: function,},
}; // can omit some fields

user nameofuser {
    name: "",
    email: "",
    tasks: {},
    projects: {WIIIIIIRDS},
    additional: {"test": "test", "TTE":"TESD"},
//key value array of additional information.  May be useful for user defined functions
};
project nameofproject {task1, task2};
project nameofproject "name of project"; // similar to tasks
project nameofproject2 {
    name: "",
    description: "",
    deadline: "",
    progress: "",
    priority: 1, 
    deps: {project2}, // projects could possibly be dependencies to another project
    users: {d},
    tasks: {task1, task2, task3->task4},
};

user nameofuser2;
task do_work;

// DSLs way to define fields of a variable
// Basically select the field and set it
// If for some reason they put 2 of the same fields (like 2 names),
// only the last one will be applied
set nameofuser2 {
    name: "",
    email: "",
}; 

set do_work {
    name: "test",
    users: {nameofuser2},
};

// special way to set dependencies
set deps {
    task1->task2,
    task1->task4,
    task4->task5,
    project1->project2,
    task6->project3,
    project4->task7
};

// “system” functions
assign(task2, user1); // will set one of the users of a task to user
assign(project1, user1); // will assign a project to a user
assign(task1, project1);

print(task1);
print(user1);
print(project1);
print(string);

ping(user1);
ping(task1); // pings (via email) all people connected to a task or project
ping(project1);
ping(task1, "message"); // attach special message

// also works with projects
started(task1); // returns true if the status of task is “in progress”
blocked(task1); // returns true if the task’s dependencies have tasks that aren’t completed yet.
finished(task1); // returns true if the status of task is completed

// example user defined function
// primarily used to dynamically alert users or rearrange assigment of tasks based on user-defined timings
function print_schedule(){
    if(!started(task1)) {
        ping(task1, "Start the project!!!");
    }
};
```
