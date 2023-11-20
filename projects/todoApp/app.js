const addForm = document.querySelector(".add");
const todoList = document.querySelector("ul");
const apagar = document.querySelectorAll("i");
const search = document.querySelector('[name = "search"');
const searchItems = document.querySelectorAll("li");

const addTodo = (todo) => {
  const li = ` <li class="list-group-item d-flex justify-content-between align-items-center">
      <span> ${todo} </span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;

  console.log(todoList);
  todoList.innerHTML += li;
};
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => addTodo(task));

const adicionar = addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = e.target.add.value.trim();
  if (todo.length > 0 && !tasks.includes(todo)) {
    // console.log(e.target.add.value);
    addTodo(todo);
    tasks.push(todo);
    // adicionar local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  addForm.reset();
});

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    // ou if (e.target.tagName == 'I') {
    //console.log(event.target.parentElement);
    event.target.parentElement.remove();
    const deletedTask = event.target.parentElement.innerText.trim();

    tasks = tasks.filter((task) => task != deletedTask);
    // adicionar local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

// validação search no keyup
search.addEventListener("keyup", (e) => {
  const searchString = search.value.toLowerCase();

  searchItems.forEach((li) => {
    if (li.innerText.toLowerCase().includes(searchString)) {
      li.classList.remove("filtered");
    } else {
      li.classList.add("filtered");
    }
  });
});
