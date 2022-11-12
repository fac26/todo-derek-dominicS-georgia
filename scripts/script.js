let listArray = [];

const form = document.querySelector(".form");
const input = form.querySelector(".form-input");
const list = document.querySelector(".list");

form.addEventListener("submit", (x) => {
  x.preventDefault(); // prevents page reload
  let id = String(Date.now()); // unique id to edit
  let task = input.value; // assigns input value
  // task and id functionality
  addTaskToDOM(id, task);
  addTaskToArray(id, task);
  removeMessage();
  input.value = ""; // clears input
});

//////////////

const addTaskToDOM = (id, task) => {
  // create li
  const liTask = document.createElement("li");
  liTask.setAttribute("data-id", id);
  // put task elements inside li
  liTask.innerHTML = 
  `
  <input aria-label="Mark task as complete" type="checkbox"/>
  <span>${task}</span>
  <button type="button" class="remove-task-btn"><i class="fa-solid fa-x"></i></button>
  `
  const removeTaskButton = liTask.querySelector(".remove-task-btn")
  removeTaskButton.addEventListener("click", (e) => {
    removeTaskFromDOM(e.target);
    removeTaskFromArray(e.target);
    checkIfAnyTasksRemain();
  })
  // add list item to DOM
  list.appendChild(liTask);
};

const addTaskToArray = (id, task) => {
  // add item to array as an object with an id so can be deleted later
  listArray.push({ id, task });
  console.log(listArray);
};

const removeTaskFromDOM = (task) => {
  // find the task to remove
  const elementToRemove = task.closest("li");
  // remove the task
  elementToRemove.remove();
};

const removeTaskFromArray = (task) => {
  // find the task to remove
  const taskToRemoveFromArray = task.closest("li");
  // find the task to remove's id
  const taskToRemoveID = taskToRemoveFromArray.getAttribute("data-id");
  // remove the task from the array by using filter to only include task's that don't match the given id
  listArray = listArray.filter((element) => element.id !== taskToRemoveID);
  console.log(listArray);
};

const removeMessage = () => {
  // remove the message saying there are no tasks after the first task has been added
  if (document.querySelector(".no-tasks-msg") !== null && listArray.length === 1 ){
    document.querySelector(".no-tasks-msg").remove();
  }
}

const checkIfAnyTasksRemain = () => {
  const container = document.querySelector(".todo-container");
  // create a message saying there aren't any more tasks if the array length is 0;
  if (listArray.length === 0){
    noTasksAvailable = document.createElement("p");
    noTasksAvailable.textContent = "You don't have any tasks at the moment.";
    noTasksAvailable.classList.add("no-tasks-msg");
    container.appendChild(noTasksAvailable)
  }
}
