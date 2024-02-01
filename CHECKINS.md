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
