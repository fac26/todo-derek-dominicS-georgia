// <======== TESTING THE ADD NEW TASK FUNCTIONALITY ========>

test("Can a user add a new task to the list?", () => {
  // 1. Create a new task
  const input = document.querySelector("#to-do");
  input.value = `This is a task`;
  const submitButton = document.querySelector("#submit-btn");
  submitButton.click();

// 2. Grab all the li elements in the DOM to see how many tasks have been created
const currentTasks = document.querySelectorAll(".listItem");

// 3. Check the length of the list;
NumOfTasks = currentTasks.length;

// 4. Compare the number of tasks in the DOM with the expected number
equal(NumOfTasks, 1);

// 5. Reset DOM 
const removeButtons = document.querySelectorAll(".remove-task-btn");
removeButtons.forEach(button => button.click())
})

test("Testing whether the user's input is the task that's been added", () => {
// 1. Create a new task
const input = document.querySelector("#to-do");
input.value = `This is a task`;
const submitButton = document.querySelector("#submit-btn");
submitButton.click();

// 2. Grab all the li elements in the DOM to see how many tasks have been created
const currentTask = document.querySelector(".listItem");

// 3. Grab the task value;
const taskToDo = currentTask.querySelector("span").textContent

// 4. Compare the number of tasks in the DOM with the expected number
equal(taskToDo, `This is a task`);

// 5. Reset DOM 
const removeButtons = document.querySelectorAll(".remove-task-btn");
removeButtons.forEach(button => button.click())
})

test("Can a user add multiple new tasks to the list", () => {
  // 1. Use a loop to create 3 different tasks
  for (let i = 0; i < 3; i++){
    const input = document.querySelector("#to-do");
    input.value = `Task ${i + 1}: This is a task`;
    const submitButton = document.querySelector("#submit-btn");
    submitButton.click();
  }
  // 2. Grab all the li elements in the DOM to see how many tasks have been created
  const currentTasks = document.querySelectorAll(".listItem");

  // 3. Check the length of the list;
  NumOfTasks = currentTasks.length;

  // 4. Compare the number of tasks in the DOM with the expected number
  equal(NumOfTasks, 3)

  // 5. Reset DOM 
  const removeButtons = document.querySelectorAll(".remove-task-btn");
  removeButtons.forEach(button => button.click())
})

// <======== TESTING THE CHECKBOXES ========>

test("Can a user mark a task as complete?", () => {
  // 1. Select the input element and enter a new task
  const input = document.querySelector("#to-do");
  input.value = "Testing if checkboxes work";

  // 2. Submit the task
  const submitButton = document.querySelector("#submit-btn");
  submitButton.click();

  // 3. Select and then click the checkbox in the new task
  const checkbox = document.querySelector("input[type='checkbox']");
  checkbox.click();

  // 4. Check whether the checkbox has been ticked and assign it to the variable `actual`
  const checkboxStatus = checkbox.checked;
  actual = checkboxStatus;

  // 5. Set `expected` to true
  expected = true;

  // 6.  Compare actual and expected
  equal(actual, expected);

  // 7. Reset DOM 
  const removeButtons = document.querySelectorAll(".remove-task-btn");
  removeButtons.forEach(button => button.click())
});

// <======== TESTING THE DELETE FUNCTION ========>

test("Can the user delete a task from the list?", () => {
  // 1. Create a new task
  const input = document.querySelector("#to-do");
  input.value = "Testing if the delete button works";
  const submitButton = document.querySelector("#submit-btn");
  submitButton.click();

  // 2. Select and click the delete button
  const deleteTaskButton = document.querySelector(".remove-task-btn");
  deleteTaskButton.click();

  // 3. Check how many tasks are on the page (should an empty nodelist)
  const tasks = document.querySelectorAll(".listItem");
  actual = tasks.length;

  // 4. Compare actual and expected
  equal(actual, 0)
})


// <======== TESTING THE LOCAL STORAGE FUNCTIONALITY ========>