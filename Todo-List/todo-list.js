const todoList = [];

function addTodo() {
  const inputElemnt = document.querySelector(".js-name-input");
  const name = inputElemnt.value;

  todoList.push(name);
  console.log(todoList);

  inputElemnt.value = "";
}
