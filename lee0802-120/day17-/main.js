const addBtn = document.getElementById("plus-btn");
const todoInput = document.getElementById("todo-input");
const ulList = document.getElementById("list-add")

addBtn.addEventListener('click', addTodo)

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
})

function addTodo() {
    const li = document.createElement('li');
    const text = todoInput.value.trim();
    if (text === '') return;

    li.className = 'todo-list-add'

    li.innerHTML = `
        <div class="todo-left">
            <input type="checkbox">
            <span>${text}</span>
        </div>
        <div class="todo-actions">
            <button>
                <img src="img/pen.svg" alt="">
            </button>
            <button>
                <img src="img/trash.svg" alt="">
            </button>
        </div>
    `;
    ulList.appendChild(li);
    todoInput.value = '';
}