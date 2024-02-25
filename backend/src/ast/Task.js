import User from "./User.js";
import Todo from "./Todo.js";

export default class Task extends Todo {
    onUnblock = null;
    reminder = null;
    constructor(varname, name, description, deadline, status, priority, deps, users) {
        super(varname, name, description, deadline, status, priority, deps, users);
    }

    getOnUnblock() {
        return this.onUnblock;
    }

    getReminder() {
        return this.reminder;
    }

    setCallbacks(onUnblock, reminder) {
        this.onUnblock = onUnblock;
        this.reminder = reminder;
    }
}