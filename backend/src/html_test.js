import ParseHTML from "./parser/ASTtoHTML.js";

const program = {
    "Items": [
        {
            "projects": [],
            "tasks": [],
            "email": "test@icloud.com",
            "name": "User 1",
            "additional": null,
            "type": "user"
        },
        {
            "projects": [],
            "tasks": [
                "Task 2"
            ],
            "email": "yuhei61627@gmail.com",
            "name": "Arimoto",
            "additional": {},
            "type": "user"
        },
        {
            "projects": [
                "Project 1"
            ],
            "tasks": [
                "Task 2"
            ],
            "email": "yuhei61627@icloud.com",
            "name": "Yuhei",
            "additional": null,
            "type": "user"
        },
        {
            "status": "In Progress",
            "tasks": [
                "Task 1",
                "Task 2"
            ],
            "priority": null,
            "description": "This is a sample project",
            "users": [],
            "name": "Project 1",
            "type": "project"
        },
        {
            "projects": [],
            "status": "Finished",
            "tasks": [
                "Task 2"
            ],
            "priority": 2,
            "description": "This is a sample task",
            "users": [],
            "name": "Task 1",
            "type": "task"
        },
        {
            "projects": [],
            "tasks": [
                "Task 1"
            ],
            "email": "jaren.agujo@gmail.com",
            "name": "Jaren",
            "additional": null,
            "type": "user"
        },
        {
            "status": null,
            "tasks": [],
            "priority": null,
            "description": null,
            "users": [],
            "name": "Project 2",
            "type": "project"
        },
        {
            "status": null,
            "priority": [],
            "description": null,
            "users": [],
            "name": "water",
            "type": "task"
        },
        {
            "projects": [],
            "tasks": [
                "Task 1"
            ],
            "email": "jaren123@student.ubc.ca",
            "name": "minji",
            "additional": null,
            "type": "user"
        },
        {
            "status": null,
            "priority": [],
            "description": null,
            "users": [],
            "name": "Task 3",
            "type": "task"
        },
        {
            "projects": [],
            "status": null,
            "tasks": [
                "Task 1"
            ],
            "priority": [],
            "description": null,
            "users": [],
            "name": "Task 2",
            "type": "task"
        }
    ],
    "Count": 11,
    "ScannedCount": 11
}

//Convert the AST to HTML
let ex = new ParseHTML();
ex.programToHTML(program);
