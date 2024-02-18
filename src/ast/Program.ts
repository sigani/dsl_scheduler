import Task from "./Task";
import Project from "./Project";

export default class Program {
    private tasks: Array<Task>;
    private projects: Array<Project>;

    constructor(tasks: Array<Task>, projects: Array<Project>) {
        this.tasks = tasks;
        this.projects = projects;
    }

    public pugetTasks(): Array<Task> {
        return this.tasks;
    }

    public getProjects(): Array<Project> {
        return this.projects;
    }
}