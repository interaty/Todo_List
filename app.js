// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// Event listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  // Prevent from form submitting
  event.preventDefault();
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //  Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Remove Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append TODO DIV into TOTO LIST
  todoList.appendChild(todoDiv);
}

// Create LI
