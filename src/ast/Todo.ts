import User from "./User";
import Task from "./Task";

export default abstract class Todo {
    protected varname: String;
    protected name: String;
    protected description: String;
    protected deadline: String;
    protected status: String;
    protected priority: number;
    protected users: Array<User>;

    protected constructor(varname: String, name?: String, description?: String, deadline?: String, status?: String,
                priority?: number, users?: Array<User>) {
        this.varname = varname;
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.status = status;
        this.priority = priority;
        this.users = users;
    }

    public setVarname(varname: String): void {
        this.varname = varname;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public setDescription(description: String): void {
        this.description = description;
    }

    public setDeadline(deadline: String): void {
        this.deadline = deadline;
    }

    public setStatus(status: String): void {
        this.status = status;
    }

    public setPriority(priority: number): void {
        this.priority = priority;
    }

    public setUsers(users: Array<User>): void {
        this.users = users;
    }


    // getters
    public getVarname(): String {
        return this.varname;
    }

    public getName(): String {
        return this.name;
    }

    public getDescription(): String {
        return this.description;
    }

    public getDeadline(): String {
        return this.deadline;
    }

    public getStatus(): String {
        return this.status;
    }

    public getPriority(): number {
        return this.priority;
    }

    public getUsers(): Array<User> {
        return this.users;
    }
}