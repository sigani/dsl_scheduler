import User from "./User.js";
import Task from "./Task.js";

export default class Todo {
  constructor(varname, name, description, deadline, status, priority, deps, users) {
    this.varname = varname;
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.status = status;
    this.priority = priority;
    if (!deps) {
      this.deps = [];
    } else {
      this.deps = deps;
    }
    this.users = users;
  }

  addDeps(dependency) {
    this.deps.push(dependency);
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

  setDeps(deps) {
    this.deps = deps;
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

  getDeps() {
    return this.deps;
  }

  getUsers() {
    return this.users;
  }
}
