// grabs input
const toDo = document.getElementById("to-do");
// grabs list
const list = document.querySelector(".list");
// grabs submit button
const submitBtn = document.getElementById("submit-btn");

// add task functionality
const addTaskItem = () => {
  const newTask = toDo.value;

  const taskItem = document.createElement("li");
  taskItem.classList = "list";
  if (newTask.trim() === "") {
    return;
  } else {
    taskItem.innerHTML = `
  <input aria-label="Mark task as complete" type="checkbox"/>
  <span>${newTask}</span>
  <button type="button" class="remove-task-btn"><i class="fa-solid fa-x"></i></button>
  `;
    list.appendChild(taskItem);
    toDo.value = "";
  }
  // allows the X button to delete with the function below
  const removeTaskButton = taskItem.querySelector(".remove-task-btn");
  removeTaskButton.addEventListener("click", (e) => {
    deleteTask(e.target);
  });
};

// delete task functionality
const deleteTask = (e) => {
  // find the task to remove
  // uses .closest to remove 'closest li element'
  const taskToDelete = e.closest("li");
  // remove the task
  taskToDelete.remove();
};

// event listeners
submitBtn.addEventListener("click", addTaskItem);
toDo.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTaskItem();
  }
});
