import fs from 'fs'
class ParseHTML {

    getHTML(program) {
        return "<!DOCTYPE html> \n" +
            "<html><head><style> \n" +
            "table { \n" +
            "  font-family: Arial, sans-serif; \n" +
            "  border-collapse: collapse; \n" +
            "  width: 100%; \n" +
            "} \n" +
            " \n" +
            "td, th { \n" +
            "  border: 1px solid #dddddd; \n" +
            "  text-align: left; \n" +
            "  padding: 8px; \n" +
            "} \n" +
            " \n" +
            "tr:nth-child(even) { \n" +
            "  background-color: #dddddd; \n" +
            "} \n" +
            "</style></head><body>\n" +
            this.parseProgram(program) +
            "</body></html> \n"
    }

    parseProgram(program) {
        let items = program.Items;
        let tasks = [];
        let projects = [];
        let users = [];
        for (let item of items) {
            if (item.type === "task") {
                tasks.push(item);
            } else if (item.type === "project") {
                projects.push(item);
            } else {
                users.push(item);
            }
        }

        let html = "<h1>Tasks</h1> \n <table> \n" +
            "  <tr> \n" +
            "    <th>Task</th> \n" +
            "    <th>Description</th> \n" +
            "    <th>Deadline</th> \n" +
            "    <th>Status</th> \n" +
            "    <th>Priority</th> \n" +
            "    <th>Users</th> \n" +
            "    <th>Dependencies</th> \n" +
            "  </tr> \n"

        //Parse all tasks
        for (let i = 0; i < tasks.length; i++) {
            html += "  <tr> \n"
            html += this.parseTask(tasks[i])
            html += "  </tr> \n"
        }
        html += "</table>"

        // Parse all projects
        html += "<h1>Projects</h1> \n <table> \n" +
            "  <tr> \n" +
            "    <th>Name</th> \n" +
            "    <th>Description</th> \n" +
            "    <th>Deadline</th> \n" +
            "    <th>Status</th> \n" +
            "    <th>Priority</th> \n" +
            "    <th>Users</th> \n" +
            "    <th>Tasks</th> \n" +
            "    <th>Dependencies</th> \n" +
            "  </tr> \n"

        for (let i = 0; i < projects.length; i++) {
            html += "  <tr> \n"
            html += this.parseProject(projects[i])
            html += "  </tr> \n"
        }
        return html
    }

    parseTask(task) {
        let row = ""
        row += "      <td>" + task.name + "</td> \n"
        row += task.description ? "      <td>" + task?.description + "</td> \n" : "      <td></td> \n"
        row += task.deadline ? "      <td>" + task.deadline + "</td> \n" : "      <td></td> \n"
        row += task.status ? "      <td>" + task.status + "</td> \n" : "      <td></td> \n"
        row += task.priority ? "      <td>" + task.priority + "</td> \n" : "      <td></td> \n"
        row += "      <td><ul> \n"

        for (let i = 0; i < task.users?.length; i++) {
            row += "            <li>" + task.users[i] + "</li> \n"
        }
        row += "      </ul></td> \n"
        row += "      <td><ul> \n"
        for (let i = 0; i < task.deps?.length; i++) {
            row += "            <li>" + task.deps[i] + "</li> \n"
        }
        row += "      </ul></td> \n"
        return row
    }

    parseProject(project){
        let row = ""
        row += "      <td>" + project.name + "</td> \n"
        row += project.description ? "      <td>" + project?.description + "</td> \n" : "      <td></td> \n"
        row += project.deadline ? "      <td>" + project.deadline + "</td> \n" : "      <td></td> \n"
        row += project.status ? "      <td>" + project.status + "</td> \n" : "      <td></td> \n"
        row += project.priority ? "      <td>" + project.priority + "</td> \n" : "      <td></td> \n"
        row += "      <td><ul> \n"
        for (let i = 0; i < project.users?.length; i++) {
            row += "            <li>" + project.users[i] + "</li> \n"
        }
        row += "      </ul></td> \n"
        row += "      <td><ul> \n"
        for (let i = 0; i < project.tasks?.length; i++) {
            row += "            <li>" + project.tasks[i] + "</li> \n"
        }
        row += "      </ul></td> \n"
        row += "      <td><ul> \n"
        for (let i = 0; i < project.deps?.length; i++) {
            row += "            <li>" + project.deps[i] + "</li> \n"
        }
        row += "      </ul></td> \n"
        return row
    }

    programToHTML(program) {
        fs.writeFile("output.html", this.getHTML(program), (err) => {
            if (err) {
                console.error('Error!:', err.message);
            } else {
                console.log("Success");
            }
        });
    }

}

export default ParseHTML;