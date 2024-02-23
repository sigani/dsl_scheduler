import Task from "./Task.js";
import Project from "./Project.js";

export default class Program {
  constructor(tasks, projects, users) {
    this.tasks = tasks;
    this.projects = projects;
    this.users = users;
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
}
