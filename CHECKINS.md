# Task Organizer/Visualizer

Use Case: 
Users: 
## CHECK IN 1
- **High-Level Purpose of DSL:**
  Create an easy way for students and teams to visualize, plan and keep track of the tasks that need to be done to reach a goal.

- **Target Users:**
  For students and teams that need to organize big projects into achievable and easy-to-follow tasks.

- **Enable Users To:**
  - Create tasks with optional deadlines, descriptions, and task status.
  - Assign multiple people to the same task.
  - Keep track of all the tasks being worked on by the team.
  - See the dependencies between tasks.
  - Create schedule blocks with fixed time periods.
  - Compare schedules with peers for coordination.
  - Given a schedule and a list of tasks, create a new schedule that contains all tasks if possible.

- **Rich Features: (updated 01/02/2024)**
  1. **User made functions/callbacks**
  2. **Conditionals**
  3. **Loops**

## Possible Example Snippets

### Preliminary Working Snippet (updated 01/02/2024, before applying user study feedback)
```
// example 1
// simple project with 3 components with a group party of 3

user jaren = "Jaren";
user bob = "Bob";
user minji = "Minji";

project school_project = "Project 1";
set school_project {
	description: "first project for cpscXXX",
	deadline: "01/03/2024",
};

task gather_info = "Find Sources";
task perform_study = "Perform Research";
task conduct_trial = "Conduct Trials";

set gather_info {
	description: "find at least 3 sources online",
	deadline: "07/02/2024",
	users: {jaren, bob, minji},
};

set perform_study {
	description: "research materials, gather important topics",
	users: {jaren, minji},
	deadline: "14/02/2024",
	deps: {gather_info},
};

set conduct_trial {
	description: "find at least 3 people and perform tests",
	deps: {perform_study},
}

set jaren {
	email: "jaren@gmail.com"
}

set minji {
	email: "jarenbf@gmail.com"
}

// the params can be thought of as
// assign x to y, or assign conduct_trial to bob
assign(conduct_trial, bob);

// will also add all the other tasks that conduct_trials depends on
assign(conduct_trial, school_project);

// language feature 1
// interval means the function will be called every midnight
function remind_members(var1) interval "00:00" {
	// language feature 2
	if not finished(var1) {
		ping(var1);
	}
};
// then assign this function to the project
assign(remind_members, school_project);
display(school_project);
```

### Note any important changes/feedback from TA discussion.  
- TA gave feedback on how to make rich features more "rich", which we have incorporated into our project  
### Note any planned follow-up tasks or features still to design.  
- Need to finalize implementation of a user (will they just be names or will they have more?)
- Need to come up with a final design choice for our DSL

# CHECK IN 2
## Planned division of main responsibilities between team members, considering how to enable working in parallel as much as possible. Consider the following points:
### Modular design for the software system: 
#### What is the input, output of each component? 
- Tokenizer
    - input: string, 
    - output: array of tokens 
- Parser 
    - input: array of tokens (key value pairs?), 
    - output: AST
- Evaluator 
    - input: AST, 
    - output: another AST? JSON? Do we write to file?
- View/Display/Output
    - input: AST? JSON? FILE? 
    - Output: depends (some sort of display)
## Who is responsible for each component? 
- Tokenizer - Jaren
- Parser - Leo
- Evaluator - Yuhei
- View(?) - Brendon
## Do you want to be jointly responsible for some components?
- The view component might have some joint responsibilities as it might be a more complex component compared to the other ones.  Similarly, because some components may be easier to implement than others, the people who finish earlier can help the next people with their components.
- Will need to help when building evaluator. Split the evaluator into language features.
## What is the data at each interface point? 
At this point, it is a bit undecided.  Something that is probably decided is that the parser input will be a string.
## Are there invariants over the data other than the class structure?
- Evaluator stage: check like if there is at least one task for example (need to specify rules first)
- Depending on some functions, we will enforce, for example, that a task and a person must exist when assigning a task to a person.
## How will you be able to build component X independently? Can you write tests for component X independently of its dependent components?
We should decide on sample inputs and outputs for each component and test on that.  This, in addition to our individual tests, will make our system more robust
## Who will be responsible for writing which tests, and when (will the same people write the tests as the code)?
The person assigned to a component will also be responsible for writing their own tests, so it will be as needed.
## Are there design or other project tasks (possibly including team management), other than these components, that need to be assigned/completed?
- Deciding on what the final display of the tasks will be.
- Determine the people we sample for the test DSL
## Roadmap/timeline(s) for what should be done when, and how you will synchronize/check-in with each other to make sure progress is on-track. Talk clearly with your team members about your expectations for communication and progress, and what you will do as a team if someone falls behind.
- Week 3: Sample/test the modified DSL with users, modify based on feedback
- Week 4: First user study, Tokenizer and Parser finished, progress on evaluator and view, test planning
- Week 5: Plan final user study, Finish evaluator/MVP, testing
- Week 6: Final user study completed, Finish up the project, including testing
- Plan to do weekly check ins via Discord at least once during the week (probably some time on the weekend), 
## Summary of progress so far.
- Finally got into contact with the entire team.
- Followed the feedback from Check In 1 and began development of an improved DSL with three language features (function definitions, conditionals, loops)

# Check in 3
Jaren’s User Study
- User was a person who is unfamiliar with programming
- User was confused as to why a variable was being named twice
    - For example: `task gather_material = “Gather Material”;`
    - Perhaps an alternate design choice could be that if a user makes a task such that `task do_things;`, the name of the task will then be set to `do_things`, or left empty.  Perhaps this doesn’t matter
- User often forgot the semicolons and the commas, however the indentations and spacings were all correct
    - Perhaps we could ignore the semicolons and commas, similar to how python works
- At first, the user was confused about how the deps field worked, but after another explanation, the user was able to utilize the deps field
- There was an error given the following situation
    - For example, there were three tasks (task1, task2, task3)
    - task1 -> task2, and she wanted to say that task2 -> task3 (that task3 needs task 2 to be finished before task3 can start)
    - But she declared it as…
 ```
task task3 = “some name”;
set task3 {
	…
	deps: {task1, task2},
	…
}
```
    - In other words, she declared that task1 was a dependency to task3, even though that is implied through task2
    - Nevertheless, the user really liked the dependency feature of the language
- User put a literal date (such that …deadline: Feb 9, 2024…) instead of a stringified version of the date for a deadline
    - We could have it so that any variation of date input works
    - But this is lots of work D:
- For assigning of tasks
    - The user, instead of doing it as originally designed, did
    - `assign task3 to project`
    - We can consider making our language more higher level so that the targeted audience (people who needs to get projects done, could mainly be students but applies to anyone e.g corporate positions) could more easily make use of our DSL because right now, our language could be considered more similar to Python but while that is already a pretty high level language, the DSL in its current state may be hard for someone without any prior programming language to use)
- The user suggested that after a project was completed, that a functionality to attach comments to the finished project to be a feature (for example, commenting on the grade achieved, what went well and what could have been better, feedback, etc…)
    - Let's make it a stretch goal lol

Yuhei’s User Study
- User was a student who is familiar with programming and is interested in using this to organize project as a PM
- User didn’t like the use of {} for an array (e.g. Users field in task) as he is used to using []. He suggested to remove it. No brackets.
- Defining deps using set task1 {deps: {task2, task3}} is confusing. Not sure what kind of dependency it is defining. Does it mean task1 cannot be started until task2 and task3 are done, or the opposite? 
    - He said only set deps {task1->task2} is enough (and maybe also remove set and make it deps {task1->task2}) . This makes it easier because dependencies can be organized in one place. Also, arrow is helpful.
- while (task.nextDependency != null) is too technical (like the use of null). Instead of (task.nextDependency != null), make a hasDependency(task) and use it inside while (e.g. while hasDependeny(task)) or just use “for (task.dependencies)” to iterate over task’s dependency. This leads to a suggestion to make a bunch of predefined function (i.e equals (x, y), greater(x, y), smaller(x, y), and so on), instead of make users use =, >. Also, this makes the syntax standardized in the form of name(some arguments).
- User understood what the functionality of define function does and how to define a function, but was unsure of how to utilize it effectively. To make it more effective, user wants more pre-defined functionality like print() and ping().
- User liked the callback functionality, but suggested instead of putting Callbacks: {onUnblock: function,} inside task, make for example callBack(task1, onUnblock->function). This way user can add callBack not only to task but maybe to user and project as well.

Leo’s User Study:
User was a Computer Science Major with previous work experience as Software Engineer Intern

- He was able to easily understand the system types and what initializing variables did
- He was at first confused at the 2 ways of defining a task (one with only name and one with additional fields)
- He thought it would be simpler if we just had one way of defining a task with the curly braces and then make the fields inside optional.
- Also regarding task definition, he was confused as to why we had to define the dependencies in the variable definition and also in the set_deps command.
- He also mentioned that in the variable definition for task, it is not clear what direction the dependencies are taken. Meaning, does this task has to be completed before the ones listed in “deps” or the other way round
- Creating the user variable was intuitive. He simply asked if there was any sort of validation. For example do we look for “@” in the email
- User was confused as to why he was allowed to set dependencies in the “task” field for the project variable definition
- He also had a lot of questions about how inter-project dependency would work.
- Does it mean that every task in one project has to be completed before the other project is unlocked?
- Can tasks in one project have dependencies with tasks in other projects?
- He found it added a lot of confusion
- He then proceed to building a function
    - He first asked if the function could he could choose the amount of variables the function would take
    - He wanted a function that would mark a current task as finished and then ping the user who was blocked on the current task
    - He asked how he could access the fields within a variable
    - He assumed that there would be no errors. I.e deps[0] doesn’t throw an error if the list of dependencies is empty, and ping doesn’t throw an error if the value being passed is null
    - He thought it would be good to add a better way of checking for null/non existing variables
    - This is the function he built:
``` 
function finish_and_notify (task task1){
        	finished(task)
        	//loop through users in the task
        	for (user: task.Deps[0].Users)
                    	ping(user)
}
```



# Outdated stuff that doesn't apply to the project anymore but maybe we might need but probably not but just to be safe lol
### Example 1:
```dsl
CREATE schedule s1;
CREATE task sleep;
SET RECUR DAILY sleep;
SET TIME START=2200 END=600 sleep;
ADD sleep s1;
CREATE task project;
SET TIME DURATION=120 project;
FIT project s1; # rich feature example 1
DISPLAY s1;
DISPLAY TODAY; # displays tasks that need to be done today
DISPLAY WEEK;
DISPLAY MONTH;
```

### Example 2:
```
{
    CREATE_TASK "Brainstorming DSL Ideas" {
        description: "Look into possible ideas for the DSL",
        deadline: "2024-01-20",
        status: "In Progress"
    }

    CREATE_TASK "Build DSL Input Parser" {
        description: "Build the parser that reads in the DSL input",
        deadline: "2024-02-20",
        status: "Not Started",
        dependencies: "Brainstorming DSL Ideas"
    }

    CREATE_TASK "Build DSL Evaluator" {
        description: "Implement the project functionality",
        deadline: "2024-03-20",
        status: "Not Started",
        dependencies: "Build DSL Input Parser",
    }

    ASSIGN "BrainStorming Ideas" to "Bob", "Joe", "Ada"
    ASSIGN "Build DSL Input Parser" to "Joe"
    ASSIGN "Write Code" to "Ada"

    SHARE_TASKS "Complete Assignment", "Research Topic", "Write Code" with "TeamA"

    DEPENDENCY "Brainstorming DSL Ideas" must_be_completed_before "Build DSL Input Parser"
    DEPENDENCY "Brainstorming DSL Ideas" must_be_completed_before "Build DSL Evaluator"

    COMPARE_SCHEDULES "Bob", "Joe", "Ada"
}
```
