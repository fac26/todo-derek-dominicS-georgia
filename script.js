let listArray = [];

const form = document.querySelector(".form");
const input = form.querySelector(".form-input");
const list = document.querySelector(".list");

form.addEventListener("submit", (x) => {
  x.preventDefault(); // prevents page reload
  let id = String(Date.now()); // unique id to edit
  let task = input.value; // assigns input value
  // task and id functionality
  taskToDOM(id, task);
  taskToArray(id, task);
  input.value = ""; // clears input
});

list.addEventListener("click", (x) => {
  let idSome = x.target.getAttribute("data-id");
  if (!idSome) return; // user clicked in something else
  // passing id to function
  taskFromDOM(idSome);
  taskFromArray(idSome);
});

//////////////

const taskToDOM = (id, task) => {
  // create li
  const liTask = document.createElement("li");
  liTask.setAttribute("data-id", id);
  // add task to list item
  liTask.innerText = task;
  // add list item to DOM
  list.appendChild(liTask);
};

const taskToArray = (id, task) => {
  // add item to array as an object with an id so can be deleted later
  listArray.push({ id, task });
  console.log(listArray);
};

const taskFromDOM = (idSome) => {
  // get the list item by id
  let li = document.querySelector('[data-id="' + idSome + '"]');
  list.removeChild(li);
};

const taskFromArray = (idSome) => {
  listArray = listArray.filter((task) => task.id !== idSome);
  console.log(listArray);
};
