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

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;

    const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                        todoList.splice(${index}, 1);
                        renderTodoList();
                " class="delete-todo-button">Delete</button>
                `;
    todoListHTML += html;
    console.log(html);
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

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
