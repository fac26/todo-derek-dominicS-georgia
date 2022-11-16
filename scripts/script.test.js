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

