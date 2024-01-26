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

- **Rich Features:**
  1. **Best Fit Schedule**
  2. **Sharing Tasks Among Groups of People**
  3. **Adding Task Dependencies (One task has to be completed before the next)**

## Possible Example Snippets

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
- Week 4: Tokenizer and Parser finished, progress on evaluator and view
- Week 5: Finish evaluator/MVP
- Week 6: Finish up the project 
- Plan to do weekly check ins via Discord at least once during the week (probably some time on the weekend), 
## Summary of progress so far.
- Finally got into contact with the entire team.
- Followed the feedback from Check In 1 and began development of an improved DSL with three language features (function definitions, conditionals, loops)

