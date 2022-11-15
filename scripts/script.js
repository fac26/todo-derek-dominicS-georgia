// grabs input
const toDo = document.getElementById("to-do");
// grabs list
const list = document.querySelector(".list");
// grabs submit button
const submitBtn = document.getElementById("submit-btn");

// event listeners
submitBtn.addEventListener("click", addTaskItem);
toDo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskItem();
  }
});

// add task functionality
const addTaskItem = () => {
  const newTask = toDo.value;
  toDo.value = "";

  const taskItem = document.createElement("li");
  // taskItem.classList = "";

  taskItem.innerHTML =
  `
  <input aria-label="Mark task as complete" type="checkbox"/>
  <span>${task}</span>
  <button type="button" class="remove-task-btn"><i class="fa-solid fa-x"></i></button>
  `
  // remove task button? 
  const removeTaskButton
};
