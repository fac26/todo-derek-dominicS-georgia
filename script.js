let listArray = [];

const form = document.querySelector("form");
const input = form.getElementById("to-do");
const list = document.querySelector("list");

form.addEventListener('submit', x => {
  x.preventDefault(); // prevents page reload
  let id = String(Date.now()); // unique id to edit
  let taskToDo = input.value; // assigns input value
})