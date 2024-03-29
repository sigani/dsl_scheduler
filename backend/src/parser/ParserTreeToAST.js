import TaskProjectParserVisitor from "./TaskProjectParserVisitor.js";
import Program from "../ast/Program.js";
import Task from "../ast/Task.js";
import Project from "../ast/Project.js";
import User from "../ast/User.js";
import Reminder from "../ast/Reminder.js";

export default class ParserTreeToAST extends TaskProjectParserVisitor {
  // TODO: error handling (like variable not declared); mostly done
  // TODO: arrow syntax in Project delaration
  // TODO: callbacks property in task

  tasksTrack = new Map();
  projectsTrack = new Map();
  usersTrack = new Map();
  tasks = [];
  projects = [];
  users = [];
  funcs = new Map();

  visitProgram(ctx) {
    this.visitChildren(ctx);

    return new Program(this.tasks, this.projects, this.users, this.funcs);
  }

  visitTask(ctx) {
    let varname = ctx.varname().TEXT().getText();
    this.checkDuplicateVarname(varname);

    let task;
    if (ctx.QUOTED_TEXT() != null) {
      // check getText() appropriate method
      let name = ctx.QUOTED_TEXT().getText();
      task = new Task(
        varname,
        this.removeQuotes(name),
        null,
        null,
        null,
        null,
        null,
        null
      );
    } else {
      task = new Task(varname, null, null, null, null, null, null, null);
      let taskBody = ctx.taskBody();
      for (let property of taskBody.taskProperty()) {
        this.setProperty(task, property);
      }
    }
    this.tasks.push(task);
    this.tasksTrack.set(task.getVarname(), task);
  }

  visitProject(ctx) {
    let varname = ctx.varname().TEXT().getText();
    this.checkDuplicateVarname(varname);

    let project;
    if (ctx.QUOTED_TEXT() != null) {
      // check getText() appropriate method
      let name = ctx.QUOTED_TEXT().getText();
      project = new Project(
        varname,
        this.removeQuotes(name),
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );
    } else if (ctx.array() != null) {
      project = new Project(
        varname,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );
      project.setTasks(this.visitArray(ctx.array(), "task"));
      return project;
    } else {
      project = new Project(
        varname,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );
      let projectBody = ctx.projectBody();
      for (let property of projectBody.projectProperty()) {
        this.setProperty(project, property);
      }
    }

    this.projects.push(project);
    this.projectsTrack.set(project.getVarname(), project);
  }

  visitUser(ctx) {
    let varname = ctx.varname().TEXT().getText();
    this.checkDuplicateVarname(varname);

    let user;
    if (ctx.QUOTED_TEXT() != null) {
      // check getText() appropriate method
      let name = ctx.QUOTED_TEXT().getText();
      user = new User(varname, name, null, null, null, null);
    } else {
      user = new User(varname, null, null, null, null, null);
      let userBody = ctx.userBody();
      for (let property of userBody.userProperty()) {
        this.setProperty(user, property);
      }
    }

    this.users.push(user);
    this.usersTrack.set(user.getVarname(), user);
  }

  visitSet(ctx) {
    let varname = ctx.varname().TEXT().getText();
    let object =
      this.tasksTrack.get(varname) ||
      this.projectsTrack.get(varname) ||
      this.usersTrack.get(varname) ||
      null;
    if (!object) {
      throw new Error(
        "Object with " + varname + " does not exist; declare the variable first"
      );
    }

    for (let property of ctx.setProperty()) {
      this.setProperty(object, property);
    }
  }

  visitSetDepsArrowNotation(ctx) {
    for (let deps of ctx.depsArrow()) {
      deps.accept(this);
    }
  }

  visitFunc(ctx) {
    let funcName = ctx.funcname().getText();

    if (this.funcs.has(funcName)) {
      throw new Error(
        "Function with " + funcName + " has already been declared."
      );
    }

    let funcBody = [];

    for (let statement of ctx.functionBody().funcFields()) {
      funcBody.push(...statement.accept(this));
    }

    return this.funcs.set(funcName, funcBody);
  }

  visitFuncFields(ctx) {
    if (ctx.conditional() != null) {
      return ctx.conditional().accept(this);
    } else {
      let string = ctx.getText();
      let final = this.replaceVarsWithNames(string);
      return [final];
    }
  }

  visitConditional(ctx) {
    let conditional = [];
    let cond = ctx.IF().getText() + ctx.OPEN_PAREN().getText();
    let check = ctx.condition().getText();
    let check_final = this.replaceVarsWithNames(check);
    let close = ctx.CLOSE_PAREN().getText();
    conditional.push(cond + check_final + close);
    conditional.push("{");
    for (let statement of ctx.block()[0].blockFields()) {
      //   console.log(statement.getText());
      let string = statement.getText();
      let final = this.replaceVarsWithNames(string);
      conditional.push(final);
    }
    conditional.push("}");

    if (ctx.ELSE() != null) {
      conditional.push(ctx.ELSE().getText());
      conditional.push("{");
      for (let statement of ctx.block()[1].blockFields()) {
        let string = statement.getText();
        let final = this.replaceVarsWithNames(string);
        conditional.push(final);
      }
      conditional.push("}");
    }
    return conditional;
  }

  replaceVarsWithNames(string) {
    let f = string.substring(0, string.indexOf("("));
    let trim = !string.includes(";") ? 1 : 2;
    let rest = string.substring(string.indexOf("(") + 1, string.length - trim);
    if (rest.includes(",")) {
      rest = rest.split(",");
    } else {
      rest = [rest];
    }
    //   console.log(this.tasksTrack, this.projectsTrack, this.usersTrack);
    for (let i = 0; i < rest.length; i++) {
      if (this.tasksTrack.has(rest[i])) {
        rest[i] = `"${this.tasksTrack.get(rest[i]).name}"`;
      } else if (this.projectsTrack.has(rest[i])) {
        rest[i] = `"${this.projectsTrack.get(rest[i]).name}"`;
      } else if (this.usersTrack.has(rest[i])) {
        rest[i] = `"${this.usersTrack.get(rest[i]).name}"`;
      }
    }
    // reconstruct;
    let final = f + "(" + rest.join(",") + ")";
    return final;
  }

  visitSetAdditional(ctx) {
    let ret = new Map();
    for (let additional of ctx.additional()) {
      let key = additional.additionalKey().QUOTED_TEXT().getText();
      let value = additional.additionalValue().QUOTED_TEXT().getText();
      ret.set(this.removeQuotes(key), this.removeQuotes(value));
    }
    return ret;
  }

  visitArray(ctx, type) {
    let array = [];
    for (let item of ctx.TEXT()) {
      let object;
      if (type === "task") {
        object = this.tasksTrack.get(item.getText());
      } else if (type === "project") {
        object = this.projectsTrack.get(item.getText());
      } else if (type === "deps") {
        object =
          this.tasksTrack.get(item.getText()) ||
          this.projectsTrack.get(item.getText()) ||
          null;
      } else {
        object = this.usersTrack.get(item.getText());
      }
      if (object == null) {
        throw new Error(type + " with varname " + item + " does not exist.");
      }
      array.push(object);
    }
    return array;
  }

  visitDepsArrow(ctx) {
    let rightObject =
      this.tasksTrack.get(ctx.right().TEXT().getText()) ||
      this.projectsTrack.get(ctx.right().TEXT().getText());
    if (!rightObject) {
      throw new Error(
        "Task or project with variable name " +
          ctx.right().TEXT().getText() +
          " does not exist."
      );
    }

    let leftObject =
      this.tasksTrack.get(ctx.left().TEXT().getText()) ||
      this.projectsTrack.get(ctx.left().TEXT().getText());
    if (!leftObject) {
      throw new Error(
        "Task or project with variable name " +
          ctx.left().TEXT().getText() +
          " does not exist."
      );
    }

    rightObject.addDeps(leftObject);
  }

  setProperty(object, property) {
    if (property.setName && property.setName() != null) {
      if (!object.setName) {
        throw new Error(
          "Name property does not exist for " + object.getVarname()
        );
      }
      object.setName(
        this.removeQuotes(property.setName().QUOTED_TEXT().getText())
      );
    }

    if (property.setDescription && property.setDescription() != null) {
      if (!object.setDescription) {
        throw new Error(
          "Description property does not exist for " + object.getVarname()
        );
      }
      object.setDescription(
        this.removeQuotes(property.setDescription().QUOTED_TEXT().getText())
      );
    }

    if (property.setDeadline && property.setDeadline() != null) {
      if (!object.setDeadline) {
        throw new Error(
          "Deadline property does not exist for " + object.getVarname()
        );
      }
      object.setDeadline(
        this.removeQuotes(property.setDeadline().QUOTED_TEXT().getText())
      );
    }

    if (property.setStatus && property.setStatus() != null) {
      if (!object.setStatus) {
        throw new Error(
          "Status property does not exist for " + object.getVarname()
        );
      }
      object.setStatus(
        this.removeQuotes(property.setStatus().QUOTED_TEXT().getText())
      );
    }

    if (property.setPriority && property.setPriority() != null) {
      if (!object.setPriority) {
        throw new Error(
          "Priority property does not exist for " + object.getVarname()
        );
      }
      object.setPriority(+property.setPriority().NUM().getText());
    }

    if (property.setDeps && property.setDeps() != null) {
      if (!object.setDeps) {
        throw new Error(
          "Deps property does not exist for " + object.getVarname()
        );
      }
      let array = property.setDeps().array();
      object.setDeps(this.visitArray(array, "deps"));
    }

    if (property.setUsers && property.setUsers() != null) {
      if (!object.setUsers) {
        throw new Error(
          "Users property does not exist for " + object.getVarname()
        );
      }
      let array = property.setUsers().array();
      object.setUsers(this.visitArray(array, "user"));
    }

    if (property.setTasks && property.setTasks() != null) {
      if (!object.setTasks) {
        throw new Error(
          "Tasks property does not exist for " + object.getVarname()
        );
      }
      let array = property.setTasks().array();
      object.setTasks(this.visitArray(array, "task"));
    }

    if (property.setEmail && property.setEmail() != null) {
      if (!object.setEmail) {
        throw new Error(
          "Email property does not exist for " + object.getVarname()
        );
      }
      object.setEmail(
        this.removeQuotes(property.setEmail().QUOTED_TEXT().getText())
      );
    }

    if (property.setProjects && property.setProjects() != null) {
      if (!object.setProjects) {
        throw new Error(
          "Projects property does not exist for " + object.getVarname()
        );
      }
      let array = property.setProjects().array();
      object.setProjects(this.visitArray(array, "project"));
    }

    if (property.setAdditional && property.setAdditional() != null) {
      if (!object.setAdditional) {
        throw new Error(
          "Additional property does not exist for " + object.getVarname()
        );
      }
      let additionals = property.setAdditional();
      object.setAdditional(additionals.accept(this));
    }

    if (property.setCallbacks && property.setCallbacks() != null) {
      if (!object.setCallbacks) {
        throw new Error(
          "Callbacks property does not exist for " + object.getVarname()
        );
      }
      let onUnblock = null;
      let reminder = null;
      for (let callback of property.setCallbacks().callBackFields()) {
        if (callback.onUnblock() != null) {
          onUnblock = callback.onUnblock().accept(this);
        } else {
          reminder = callback.reminder().accept(this);
        }
      }
      object.setCallbacks(onUnblock, reminder);
    }
  }

  visitOnUnblock(ctx) {
    let funcName = ctx.varname().TEXT().getText();
    if (!this.funcs.has(funcName)) {
      throw new Error(
        "Function with name " + funcName + " has not been defined"
      );
    }
    return funcName;
  }

  visitReminder(ctx) {
    let funcName = ctx.varname().TEXT().getText();
    if (!this.funcs.has(funcName)) {
      throw new Error(
        "Function with name " + funcName + " has not been defined"
      );
    }

    const regex = /[0-9]{4}/;
    let time = ctx.REMINDER().getText().match(regex);

    return new Reminder(...time, funcName);
  }

  checkDuplicateVarname(varname) {
    if (
      this.tasksTrack.has(varname) ||
      this.projectsTrack.has(varname) ||
      this.usersTrack.has(varname)
    ) {
      throw new Error("Variable with name " + varname + " already exist.");
    }
  }

  removeQuotes(str) {
    return str.substring(1, str.length - 1);
  }
}
