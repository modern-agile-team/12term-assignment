const addBtn = document.getElementById("plus-btn");
const todoInput = document.getElementById("todo-input");
const ulList = document.getElementById("list-add")

addBtn.addEventListener('click', addTodo)

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.isComposing) addTodo()
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
                <img src="/img/pen.svg" alt="">
            </button>
            <button>
                <img src="/img/trash.svg" alt="">
            </button>
        </div>
    `;
    ulList.appendChild(li);
    todoInput.value = '';
}

function removeTodo() {
    // 삭제는 db에서 고유번호를 정하고 여기서 해당 고유번호를 불러와서 해당 번호를 매겨 넣는 방식으로 완성 후 삭제도 고유번호를 통해 삭제 처리를 해야함.
    // 따라서 해당 기능은 db와 연결을 완료 후에 addTodo의 db 등록이 끝나면 완성할 예정.
}

function editTodo() {
    // 해당 기능 또한 위와 같은 사유로 addTodo의 기능이 완성되면 구성 예정.
}