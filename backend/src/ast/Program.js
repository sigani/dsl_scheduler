import Task from "./Task.js";
import Project from "./Project.js";

export default class Program {
  constructor(tasks, projects, users, funcs) {
    this.tasks = tasks;
    this.projects = projects;
    this.users = users;
    this.funcs = funcs;
  }

  getFuncs() {
    return this.funcs;
  }

  getTasks() {
    return this.tasks;
  }

  getProjects() {
    return this.projects;
  }

  getUsers() {
    return this.users;
  }

  addFunc(funName, funcBlock) {
    this.funcs.set(funName, funcBlock);
  }
}
