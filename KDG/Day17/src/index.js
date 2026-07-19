const todoInput = document.getElementById("todoInput");
const creatBtn = document.getElementById("creatBtn");
const list = document.getElementById("list");

const todoList = (e) => {
  let modalSwitch = todoInput.value.trim();
  if (e.type === "click" && modalSwitch === "") {
    alert("입력하세요");
  } else if (e.key === "Enter" && modalSwitch === "") {
    alert("입력하세요");
  } else if (
    (modalSwitch !== "" && e.type === "click") ||
    (e.key === "Enter" && modalSwitch !== "")
  ) {
    const li = document.createElement("li");
    li.className = "todo-item";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const span = document.createElement("span");
    span.innerText = todoInput.value;
    span.className = "todo-text";
    const edit = document.createElement("span");
    edit.innerText = "✏️";
    edit.className = "edit";
    const del = document.createElement("span");
    del.innerText = "🗑️";
    del.className = "del";
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = span.innerText;

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(editInput);
    list.appendChild(li);
    li.appendChild(edit);
    li.appendChild(del);
    editInput.style.display = "none";

    edit.addEventListener("click", () => {
      if (editInput.style.display === "none") {
        editInput.style.display = "inline";
        span.style.display = "none";
      } else if (editInput.value === "") {
        alert("입력하세요");
      } else if (editInput.style.display === "inline") {
        editInput.style.display = "none";
        span.style.display = "inline";
        span.innerText = editInput.value;
      }
    });
    del.addEventListener("click", () => {
      li.remove();
    });

    checkBox.addEventListener("change", () => {
      if (checkBox.checked === true) {
        edit.style.display = "none";
      } else {
        edit.style.display = "inline";
      }
    });
  }
};

creatBtn.addEventListener("click", todoList);
todoInput.addEventListener("keydown", todoList);
