const todoFormEl = document.querySelector('.todoForm');
const todoInputEl = document.querySelector('.todoInput');
const todoItemsEl = document.querySelector('.todoItems');

let todos = [];

todoFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(todoInputEl.value);
});

function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    todos.push(todo);
    addToLocalStorage(todos);

    todoInputEl.value = '';
  }
}

// Functions : Ini adalah bagian kode yang berisi definisi beberapa fungsi yang digunakan dalam aplikasi.
function renderTodos(todos) {
  todoItemsEl.innerHTML = '';

  todos.forEach(function(item) {
    const checked = item.completed ? 'checked': null;  // Operator Ternary
    const li = document.createElement('li');

    li.setAttribute('class', 'item');
    li.setAttribute('dataKey', item.id);

    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="deleteBtn">X</button>
    `;

    todoItemsEl.append(li);
  });

}

// JavaScript Object : Objek JavaScript 'todo' digunakan untuk mewakili setiap item todo.

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// Filter Function : Metode 'filter' digunakan untuk menghapus elemen dengan ID yang cocok dari array 'todos'.
function toggle(id) {
  todos.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}
// For Each Loop : Metode 'forEach' digunakan untuk membuat elemen daftar ('li') untuk setiap item todo dalam array 'todos'.

function deleteTodo(id) {
  todos = todos.filter(function(item) {
    return item.id != id;
  });

  addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsEl.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {  //symbol ==
    toggle(event.target.parentElement.getAttribute('dataKey'));
  }

  if (event.target.classList.contains('deleteBtn')) {
    deleteTodo(event.target.parentElement.getAttribute('dataKey'));
  }
});