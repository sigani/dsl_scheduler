import TaskProjectParserVisitor from "./TaskProjectParserVisitor.js";
import Program from "../ast/Program.js";
import Task from "../ast/Task.js";
import Project from "../ast/Project.js";
import User from "../ast/User.js";

export default class ParserTreeToAST extends TaskProjectParserVisitor{
    // TODO: error handling (like variable not declared)
    // TODO: decide declaring same varname but different type is allowed (currently this is allowed; edit* i think shouldn't be allowed)
    // TODO: arrow syntax in Project delaration
    // TODO: callbacks property in task
    // TODO: order of statement does not matter currently (e.g. task declaration executes first); do visitChildren inside visitProgram
    tasksTrack = new Map();
    projectsTrack = new Map();
    usersTrack = new Map();

    visitProgram(ctx) {
        let tasks = [];
        let projects = [];
        let users = [];
        for (let task of ctx.task()) {
            task = task.accept(this);
            tasks.push(task);
            this.tasksTrack.set(task.getVarname(), task);
        }
        for (let project of ctx.project()) {
            project = project.accept(this);

            projects.push(project);
            this.projectsTrack.set(project.getVarname(), project);
        }
        for (let user of ctx.user()) {
            user = user.accept(this);
            users.push(user);
            this.usersTrack.set(user.getVarname(), user);
        }

        for (let setStatement of ctx.set()) {
            setStatement.accept(this);
        }

        return new Program(tasks, projects, users);
    }

    visitTask(ctx) {
        let varname = ctx.varname().TEXT().getText();
        if (this.tasksTrack.has(varname)) {
            throw new Error("Task with the variable name " + varname + " already exist.");
        }
        if (ctx.QUOTED_TEXT() != null) {
            // check getText() appropriate method
            let name = ctx.QUOTED_TEXT().getText();
            return new Task(varname, this.removeQuotes(name), null, null, null, null, null, null);
        } else {
            let task = new Task(varname, null, null, null, null, null, null, null);
            let taskBody = ctx.taskBody();
            for (let property of taskBody.taskProperty()) {
                this.setProperty(task, property);
            }

            return task;
        }
    }

    visitProject(ctx) {
        let varname = ctx.varname().TEXT().getText();
        if (this.projectsTrack.has(varname)) {
            throw new Error("Project with the variable name " + varname + " already exist.");
        }

        if (ctx.QUOTED_TEXT() != null) {
            // check getText() appropriate method
            let name = ctx.QUOTED_TEXT().getText();
            return new Project(varname, this.removeQuotes(name), null, null, null, null, null, null, null);
        } else if (ctx.array() != null) {
            let project = new Project(varname, null, null, null, null, null, null, null, null);
            project.setTasks(this.visitArray(ctx.array(), 'task'));
            return project;
        } else {
            let project = new Project(varname, null, null, null, null, null, null, null, null);
            let projectBody = ctx.projectBody();
            for (let property of projectBody.projectProperty()) {
                this.setProperty(project, property);
            }

            return project;
        }
    }

    visitUser(ctx) {
        let varname = ctx.varname().TEXT().getText();
        if (this.usersTrack.has(varname)) {
            throw new Error("User with the variable name " + varname + " already exist.");
        }

        if (ctx.QUOTED_TEXT() != null) {
            // check getText() appropriate method
            let name = ctx.QUOTED_TEXT().getText();
            return new User(varname, name, null, null, null, null);
        } else {
            let user = new User(varname, null, null, null, null, null);
            let userBody = ctx.userBody();
            for (let property of userBody.userProperty()) {
                if (property.setName() != null) {
                    user.setName(this.removeQuotes(property.setName().QUOTED_TEXT().getText()));
                }

                if (property.setEmail() != null) {
                    user.setEmail(this.removeQuotes(property.setEmail().QUOTED_TEXT().getText()));
                }

                if (property.setTasks() != null) {
                    let array = property.setTasks().array();
                    user.setTasks(this.visitArray(array, 'task'));
                }

                if (property.setProjects() != null) {
                    let array = property.setProjects().array();
                    user.setProjects(this.visitArray(array, 'project'));
                }

                if (property.setAdditional() != null) {
                    let additionals = property.setAdditional();
                    user.setAdditional(additionals.accept(this));
                }
            }

            return user;
        }
    }

    visitSet(ctx) {
        let varname = ctx.varname().TEXT().getText();
        let object = this.tasksTrack.get(varname) || this.projectsTrack.get(varname) || this.usersTrack.get(varname) || null;
        if (!object) {
            throw new Error("Object with " + varname + " does not exist; declare the variable first");
        }

        for (let property of ctx.setProperty()) {

        }

        return super.visitSet(ctx);
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
            if (type === 'task') {
                object = this.tasksTrack.get(item.getText());
            } else if (type === 'project') {
                object = this.projectsTrack.get(item.getText());
            } else {
                object = this.usersTrack.get(item.getText());
            }
            if (object == null) {
                throw new Error(type + " with varname " + item + " does not exist.")
            }
            array.push(object);
        }
        return array;
    }

    setProperty(object, property) {
        if (property.setName() != null) {
            object.setName(this.removeQuotes(property.setName().QUOTED_TEXT().getText()));
        }

        if (property.setDescription() != null) {
            object.setDescription(this.removeQuotes(property.setDescription().QUOTED_TEXT().getText()));
        }

        if (property.setDeadline() != null) {
            object.setDeadline(this.removeQuotes(property.setDeadline().QUOTED_TEXT().getText()));
        }

        if (property.setStatus() != null) {
            object.setStatus(this.removeQuotes(property.setStatus().QUOTED_TEXT().getText()));
        }

        if (property.setPriority() != null) {
            object.setPriority(+(property.setPriority().NUM().getText()));
        }

        if (property.setDeps() != null) {
            let array = property.setDeps().array();
            if (object instanceof Project) {
                object.setDeps(this.visitArray(array, 'project'));
            } else {
                object.setDeps(this.visitArray(array, 'task'));
            }
        }

        if (property.setUsers() != null) {
            let array = property.setUsers().array();
            object.setUsers(this.visitArray(array, 'user'));
        }

        if (object instanceof Project && property.setTasks() != null) {
            let array = property.setTasks().array();
            object.setTasks(this.visitArray(array, 'task'))
        }
    }

    removeQuotes(str){
        return str.substring(1, str.length - 1);
    }
 }