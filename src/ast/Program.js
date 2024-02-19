import Task from "./Task.js";
import Project from "./Project.js";

export default class Program {
    constructor(tasks, projects) {
        this.tasks = tasks;
        this.projects = projects;
    }

    getTasks() {
        return this.tasks;
    }

    getProjects() {
        return this.projects;
    }
}