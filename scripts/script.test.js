// minimum testing requirements

//Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list of to-dos", () => {
  // grabs the list
  const list = document.querySelector(".list");
  // grabs submit button
  const submitBtn = document.getElementById("submit-btn");
  // create an artificial input for testing
  const input = [
    "Here's the first task",
    "And another task",
    "",
    "Above this was a blank task",
  ];
  const inputArray = input.filter((e) => e);
  inputArray.forEach((e) => {
    input.value = e;
    submitBtn.click();
  });
  const result = document.querySelectorAll("li");
  const actual = result.length;
  const expected = inputArray.length;

  equal(actual, expected);
  list.innerHTML = "";
});

// Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  // test goes here
});

// Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
  // test goes here
});

////


test("does the tasks array have a new item in it after user clicks submit?", (event) => {
  // event.preventDefault();
  // 1. grab the input element
  const input = document.querySelector("input");
  // 2. Enter a task into the input element
  //input.value = "Do this by Tuesday";
  // 3. grab the submit button
  const submitBtn = document.getElementById("submit-btn");
  // 4. click the submit button to send the task off
  submitBtn.click();
  // 5. check item inserted into li element
  const actual = document.getElementsByTagName("li")[0]
  console.log(actual)
  // 6. verify expectation
  const expected = 0;
  // 7. perform test
  equal(expected, actual);
  input.value = ""; 
});

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
  equal(mostRecentTask.textContent, "Do this by Tuesday");
  userInput.value = "";
});
