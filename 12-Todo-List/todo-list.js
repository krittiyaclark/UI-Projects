// Group the todoList input and the date input with an object
const todoList = [
  {
    name: "make dinner",
    dueDate: "2023,12,09",
  },
  {
    name: "wash dishes",
    dueDate: "2023,12,09",
  },
];

renderTodoList();
// To update the todo list in HTML. We need to run all the code again by create a function
function renderTodoList() {
  // Accumulator pattern: combine <p>${todo}></p> together
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-todo-button js-delete-todo-button">Delete</button>
                `;
    todoListHTML += html;
    console.log(html);
  });
  // Put HTML on the DOM
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElemnt = document.querySelector(".js-name-input");
  const name = inputElemnt.value;

  const dateInpuElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInpuElement.value;

  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);

  inputElemnt.value = "";
  renderTodoList();
}
