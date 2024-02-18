import User from "./User";
import Task from "./Task";
import Todo from "./Todo";

export default class Project extends Todo {
    private deps: Array<Project>;
    private tasks: Array<Task>;

    constructor(varname: String, name?: String, description?: String, deadline?: String, status?: String,
                priority?: number, deps?: Array<Project>, users?: Array<User>, tasks?: Array<Task>) {
        super(varname, name, description, deadline, status, priority, users);
        this.deps = deps;
        this.tasks = tasks;
    }

    // setters
    public setDeps(deps: Array<Project>): void {
        this.deps = deps;
    }

    public setTasks(tasks: Array<Task>): void {
        this.tasks = tasks;
    }


    // getters
    public getDeps(): Array<Project> {
        return this.deps;
    }

    public getTasks(): Array<Task> {
        return this.tasks;
    }
}