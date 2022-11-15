// add tasks to a list so that I can keep track of them

test("Submitting a new task adds it to the list", () => {
  const result = addTaskItem("going to the pub");
  equal(result, 1);
});

// check things off my list so that I can see what I've done
test("Checking an entry marks it as complete", () => {
  // test goes her
});

// delete things from the list if I don't need to do them anymore
test("Deleting an entry removes it from the list", () => {
  // test goes here
});

///////////

// DL tests

test("does the tasks array have a new item in it after user clicks submit?", (event) => {
  event.preventDefault();
  // 1. grab the input element
  const userInput = document.querySelector(".nameOfInputElement"); 
  // 2. Enter a task into the input element
  userInput.value = "Do this by Tuesday" 
  // 3. grab the submit button
  const submitBtn = document.querySelector(".nameOfSubmitBtn");
  // 4. click the submit button to send the task off 
  submitBtn.click(); 
  // 5. check that the last item in the array has the same message
  // (Or we could check the array length before submitting and compare it to after submitting?)
  equal(tasksArray[tasksArray.length - 1], "Do this by Tuesday"); 
  userInput.value = ""; //
})


test("has the DOM been updated after user clicks submit?", (event) => {
  event.preventDefault();
  // 1. grab the input element
  const userInput = document.querySelector(".nameOfInputElement");
  // 2. Enter a task into the input element
  userInput.value = "Do this by Tuesday";
  // 3. grab the submit button
  const submitBtn = document.querySelector(".nameOfSubmitBtn");
  // 4. click the submit button to send the task off
  submitBtn.click();
  // 5. grab the container where all the tasks are stored
  const tasks = document.querySelector(".taskContainer");
  // 6. check the last child in the taskcontainer has the most recent task
  const mostRecentTask = tasks.lastElementChild;
  equal(mostRecentTask.textContent, "Do this by Tuesday")
  userInput.value = "";
})

/////
