const addBtn = document.getElementById("plus-btn"),
    todoInput = document.getElementById("todo-input"),
    ulList = document.getElementById("list-add")

addBtn.addEventListener("click", handleAdd);
todoInput.addEventListener("keydown", handleAdd);

window.addEventListener("load", () => {
    fetch("/todoLoad", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.todo.length; i++) {
                addTodo(res.todo[i].text, res.todo[i].todoId);
            }
        })
        .catch(error => {
            alert(`백엔드 에러: 불러오기에 실패했습니다. error : ${error}`);
        })
})

ulList.addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-role=edit]");
    if (editBtn) {
        const li = editBtn.closest('li');
        const editInput = li.querySelector('.edit-input');
        li.dataset.editing = 'true';
        editInput.focus();
        editInput.select();
        return;
    }

    const okBtn = e.target.closest('.ok-btn');
    if (okBtn) {
        commitEdit(okBtn.closest('li'));
        return;
    }
});

ulList.addEventListener("keydown", (e) => {
    if (!e.target.classList.contains('edit-input')) return; // edit-input이 아니면 무시
    const li = e.target.closest('li');
    if (e.key === 'Enter' && !e.isComposing) commitEdit(li);
    if (e.key === 'Escape') {
        e.target.value = li.querySelector('.todo-left span').textContent;
        li.dataset.editing = 'false';
    }
})

ulList.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest('#delete-btn');
    if (!deleteBtn) return;

    const li = deleteBtn.closest('li');
    const todoId = li.dataset.todoId;

    fetch("/todoRemove", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ todoId: todoId })
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) li.remove();
        })
        .catch(err => {
            alert(`백엔드 에러: 삭제를 처리하지 못했습니다. err: ${err}`);
        })
})

function commitEdit(li) {
    const editInput = li.querySelector('.edit-input');
    const viewText = li.querySelector('.todo-left span');
    const value = editInput.value.trim();
    const todoId = li.dataset.todoId;

    if (value === '' || value === viewText.textContent) {
        editInput.value = viewText.textContent;
        li.dataset.editing = 'false';
        console.log("수정되지 않음");
        return;
    }

    viewText.textContent = value;
    li.dataset.editing = 'false';

    fetch("/todoRevise", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: value, todoId: todoId })
    })
        .then(res => res.json())
        .catch(err => {
            alert(`백엔드 에러: 수정를 처리하지 못했습니다. err: ${err}`);
        })
}

function handleAdd(event) {
    if (event.type === 'click' || event.key === 'Enter' && !event.isComposing) {
        const value = todoInput.value.trim();

        fetch("/todoSave", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: value })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                addTodo(value);
            })
            .catch(error => {
                alert(`백엔드 에러: 저장에 실패했습니다. error : ${error}`);
            })
    }
}

function addTodo(value, todo_id) {
    const li = document.createElement('li');

    if (value === '') return;

    li.className = 'todo-list-add'
    li.dataset.todoId = todo_id;

    li.innerHTML = `
        <div class="todo-left">
            <input type="checkbox">
            <span>${value}</span>
            <input type="text" class="edit-input" value="${value}">
        </div>
        <div class="todo-actions">
            <button id="edit-btn" data-role="edit">
                <img src="/img/pen.svg" alt="">
            </button>
            <button id="delete-btn" data-role="delete">
                <img src="/img/trash.svg" alt="">
            </button>
            <button class="ok-btn">OK</button>
        </div>
    `;
    ulList.appendChild(li);
    todoInput.value = '';
}