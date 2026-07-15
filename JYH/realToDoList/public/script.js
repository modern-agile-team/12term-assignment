"use strict";

let todos = [];
let isAdding = false;

const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// TEMP DARK MODE START
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});
// TEMP DARK MODE END

function showError(error) {
    console.error(error);
    alert(error.message);
}

async function addTodo() {
    if (isAdding) return;

    const text = todoInput.value.trim();

    if (text === "") {
        alert("할 일을 입력해주세요.");
        return;
    }

    isAdding = true;
    addButton.disabled = true;

    try {
        const response = await fetch("/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: text
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        const newTodo = data;

        todos.push(newTodo);
        renderTodos();
        console.log(todos);
        todoInput.value = "";
        todoInput.focus();
    }
    catch (error) {
        showError(error);
    }
    finally {
        isAdding = false;
        addButton.disabled = false;
    }
}

async function loadTodos() {
    try {
        const response = await fetch("/todos");

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        todos = data;
        renderTodos();
    }
    catch (error) {
        showError(error);
    }
}

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const item = document.createElement("div");
        item.classList.add("todo-item");

        const checkbox = document.createElement("input");
        checkbox.classList.add("todo-checkbox");
        checkbox.type = "checkbox";
        checkbox.checked = todo.is_check === 1;

        const todoText = document.createElement("span");
        todoText.classList.add("todo-text");
        todoText.textContent = todo.description;
        todoText.classList.toggle("completed", todo.is_check === 1);

        const editButton = document.createElement("button");
        editButton.title = "수정";
        editButton.classList.add("edit-button");
        editButton.textContent = "✎";
        editButton.hidden = todo.is_check === 1;

        const deleteButton = document.createElement("button");
        deleteButton.title = "삭제";
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "🗑";

        checkbox.addEventListener("change", async () => {
            const previousCheck = todo.is_check;
            const isCheck = checkbox.checked ? 1 : 0;

            checkbox.disabled = true;

            try {
                const response = await fetch(`/todos/${todo.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        is_check: isCheck
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message);
                }

                todo.is_check = isCheck;
                todoText.classList.toggle("completed", isCheck === 1);
                editButton.hidden = isCheck === 1;
            }
            catch (error) {
                todo.is_check = previousCheck;
                checkbox.checked = previousCheck === 1;

                showError(error);
            }
            finally {
                checkbox.disabled = false;
            }
        });

        deleteButton.addEventListener("click", async () => {
            deleteButton.disabled = true;

            try {
                const response = await fetch(`/todos/${todo.id}`, {
                    method: "DELETE"
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message);
                }

                todos = todos.filter((item) => item.id !== todo.id);
                renderTodos();
            }
            catch (error) {
                showError(error);
            }
            finally {
                deleteButton.disabled = false;
            }
        });

        let editInput = null;
        let isSaving = false;

        function cancelEdit() {
            if (editInput === null) return;
            if (editInput.parentNode !== item) return;

            item.replaceChild(todoText, editInput);
            editButton.textContent = "✎";

            editInput = null;
            isSaving = false;
        }

        editButton.addEventListener("mousedown", () => {
            if (editButton.textContent === "저장") {
                isSaving = true;
            }
        });

        editButton.addEventListener("click", async () => {
            if (editButton.textContent === "저장") {
                const text = editInput.value.trim();

                if (text === "") {
                    alert("할 일을 입력해주세요.");

                    isSaving = false;
                    editInput.focus();
                    editInput.select();

                    return;
                }

                editButton.disabled = true;

                try {
                    const response = await fetch(`/todos/${todo.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            description: text
                        })
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message);
                    }

                    todo.description = text;
                    todoText.textContent = text;

                    item.replaceChild(todoText, editInput);
                    editButton.textContent = "✎";

                    editInput = null;
                }
                catch (error) {
                    showError(error);

                    isSaving = false;
                    editInput.focus();
                    editInput.select();
                }
                finally {
                    editButton.disabled = false;
                }

                isSaving = false;
                return;
            }

            editInput = document.createElement("input");
            editInput.classList.add("edit-input");
            editInput.value = todo.description;

            item.replaceChild(editInput, todoText);

            editButton.textContent = "저장";

            editInput.focus();
            editInput.select();

            editInput.addEventListener("blur", () => {
                if (!isSaving) {
                    cancelEdit();
                }
            });

            editInput.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    event.preventDefault();
                    cancelEdit();
                    return;
                }

                if (event.key === "Enter" && !event.isComposing) {
                    event.preventDefault();

                    isSaving = true;
                    editButton.click();
                }
            });
        });

        item.appendChild(checkbox);
        item.appendChild(todoText);
        item.appendChild(editButton);
        item.appendChild(deleteButton);
        todoList.appendChild(item);
    });
}

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.isComposing) {
        event.preventDefault();
        addTodo();
    }
});

loadTodos();
