import User from "./User.js";
import Task from "./Task.js";
import Todo from "./Todo.js";

export default class Project extends Todo {
    constructor(varname, name, description, deadline, status, priority, deps, users, tasks) {
        super(varname, name, description, deadline, status, priority, users);
        this.deps = deps;
        this.tasks = tasks;
    }

    // setters
    setDeps(deps) {
        this.deps = deps;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }


    // getters
    getDeps() {
        return this.deps;
    }

    getTasks(){
        return this.tasks;
    }
}