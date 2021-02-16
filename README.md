# Token-e-Economy

How to complete a User's task
1. Figure out how to increase a User's 
token_total by the token_value of a Task when the user clicks Completed form that task.

1. WHO'S THE FREAKING USER?!?!?!?!?
Pass the user ID from somewhere
look up the user

2. WHAT TASK DID YOU COMPLETE???
Find the ID from the click
Find and update the task by ID
Mark the task as complete.
Pull the token_value off the task.

3. Update the User
Update the token_total = foundUser.token_total + foundToken.token_value


Do the similar thing for Rewards
But subtract the total
