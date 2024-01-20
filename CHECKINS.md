# Task Organizer/Visualizer

Use Case: 
Users: 
## CHECK IN
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
