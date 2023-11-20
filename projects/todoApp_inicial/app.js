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
const remove = addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.add.value.trim().length > 0) {
    // console.log(e.target.add.value);
    addTodo(e.target.add.value.trim());
  }
  addForm.reset();
});

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    // ou if (e.target.tagName == 'I') {
    //console.log(event.target.parentElement);
    event.target.parentElement.remove();
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
