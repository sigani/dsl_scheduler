import TaskProjectParserVisitor from "./TaskProjectParserVisitor.js";
import Program from "../ast/Program.js";
import Task from "../ast/Task.js";

export default class ParserTreeToAST extends TaskProjectParserVisitor{
    // TODO: error hundling (like variable not declared)
    tasksTrack = new Map();
    projectsTrack = new Map();
    usersTrack = new Map();

    visitProgram(ctx) {
        let tasks = [];
        let projects = [];
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

        return new Program(tasks, projects);
    }

    visitTask(ctx) {
        let varname = ctx.varname().TEXT().getText();

        if (ctx.QUOTED_TEXT() != null) {
            // check getText() appropriate method
            let name = ctx.QUOTED_TEXT().getText();
            return new Task(varname, this.removeQuotes(name), null, null, null, null, null, null);
        } else {

            let task = new Task(varname, null, null, null, null, null, null, null);
            let taskBody = ctx.taskBody();
            for (let property of taskBody.taskProperty()) {
                if (property.setName() != null) {
                    task.setName(this.removeQuotes(property.setName().QUOTED_TEXT().getText()));
                }

                if (property.setDescription() != null) {
                    task.setDescription(this.removeQuotes(property.setDescription().QUOTED_TEXT().getText()));
                }

                if (property.setDeadline() != null) {
                    task.setDeadline(this.removeQuotes(property.setDeadline().QUOTED_TEXT().getText()));
                }

                if (property.setStatus() != null) {
                    task.setStatus(this.removeQuotes(property.setStatus().QUOTED_TEXT().getText()));
                }

                if (property.setPriority() != null) {
                    task.setPriority(+(property.setPriority().NUM().getText()));
                }

                if (property.setDeps() != null) {
                    let array = property.setDeps().array();
                    task.setDeps(this.visitArray(array, 'task'));
                }

                if (property.setUsers() != null) {
                    let array = property.setUsers().array();
                    task.setUsers(this.visitArray(array, 'user'));
                }
            }

            return task;
        }
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
                // TODO: return an error (matching object not found)
            }
            array.push(item);
        }
        return array;
    }

    removeQuotes(str){
        return str.substring(1, str.length - 1);
    }
 }