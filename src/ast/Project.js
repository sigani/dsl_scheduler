import User from "./User.js";
import Task from "./Task.js";
import Todo from "./Todo.js";

export default class Project extends Todo {
    constructor(varname, name, description, deadline, status, priority, deps, users, tasks) {
        super(varname, name, description, deadline, status, priority, deps, users);
        this.tasks = tasks;
    }

    // setters
    setTasks(tasks) {
        this.tasks = tasks;
    }


    // getters
    getTasks(){
        return this.tasks;
    }
}