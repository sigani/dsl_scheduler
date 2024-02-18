import User from "./User";
import Todo from "./Todo";

export default class Task extends Todo {
    private deps: Array<Task>;

    constructor(varname: String, name?: String, description?: String, deadline?: String, status?: String,
                priority?: number, deps?: Array<Task>, users?: Array<User>) {
        super(varname, name, description, deadline, status, priority, users);
        this.deps = deps;
    }

    public setDeps(deps: Array<Task>): void {
        this.deps = deps;
    }

    public getDeps(): Array<Task> {
        return this.deps;
    }
}