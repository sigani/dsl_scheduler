import Task from "./Task.js";
import Project from "./Project.js";

export default class User {
    constructor(varname, name, email, tasks, projects, additional) {
        this.varname = varname;
        this.name = name;
        this.email = email;
        this.tasks = tasks;
        this.projects = projects;
        this.additional = additional;
    }

    setVarname(varname) {
        this.varname = varname;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    setAdditional(additional) {
        this.additional = additional;
    }

    getVarname() {
        return this.varname;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getTasks() {
        return this.tasks;
    }

    getProjects() {
        return this.projects;
    }

    getAdditional() {
        return this.additional;
    }
}