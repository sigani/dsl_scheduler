import User from "./User.js";
import Todo from "./Todo.js";

export default class Task extends Todo {
    constructor(varname, name, description, deadline, status, priority, deps, users) {
        super(varname, name, description, deadline, status, priority, deps, users);
    }
}