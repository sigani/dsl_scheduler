class User {
    name: string
    email: string
    tasks: Task[]

    constructor(name, email, tasks) {
        this.name = name
        this.email = email
        this.tasks = tasks
    }

}
class Task {
    name: string
    description: string
    deadline: string
    progress: string
    deps: Task[]
    users: User[]
    callback: Function

    constructor(name, description, deadline, progress, deps, users, callback) {
        this.name = name
        this.description = description
        this.deadline = deadline
        this.progress = progress
        this.deps = deps
        this.users = users
        this.callback = callback
    }
}


const exampleTask = new Task("Example Task", "This is an example task", "2020-12-31", 0, [], [], [])
console.log(";" + exampleTask)

abstract class ASTNode {
    abstract evaluate(task: Task): void;
    abstract equals(other: Node): boolean;
}

abstract class ASTStatement extends ASTNode {
}

class Program extends ASTNode {
    statements: ASTStatement[]

    constructor(statements) {
        super()
        this.statements = statements
    }
    evaluate(task: Task): void {
        this.statements.forEach((statement) => {
            statement.evaluate(task)
        })
    }
    equals(other: any): boolean {
        if (other.type !== "Program") {
            return false
        }
        for (let i = 0; i < this.statements.length; i++) {
            if (!this.statements[i].equals(other.statements[i])) {
                return false
            }
        }
        return true
    }
}

