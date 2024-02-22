import User from "./User.js";
import Task from "./Task.js";

export default class Todo {
    constructor(varname, name, description, deadline, status, priority, users) {
        this.varname = varname;
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.status = status;
        this.priority = priority;
        this.users = users;
    }

    setVarname(varname) {
        this.varname = varname;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setDeadline(deadline) {
        this.deadline = deadline;
    }

    setStatus(status) {
        this.status = status;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setUsers(users) {
        this.users = users;
    }


    // getters
    getVarname() {
        return this.varname;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getDeadline() {
        return this.deadline;
    }

    getStatus() {
        return this.status;
    }

    getPriority() {
        return this.priority;
    }

    getUsers(){
        return this.users;
    }
}