const id = document.getElementById("inputId"),
    password = document.getElementById("inputPassword"),
    loginbtn = document.getElementById("loginButton"),
    registerMove = document.getElementById("registerMove");

loginbtn.addEventListener("click", login);

id.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && !e.isComposing) login()
})

password.addEventListener("keydown", (e) => {
    if (e.key === 'Enter' && !e.isComposing) login()
})

registerMove.addEventListener("click", () => {
    location.href = "/register"
})

function login() {
    const req = {
        id: id.value,
        password: password.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/todoList";
            } else {
                alert(res.message);
            }
        })
        .catch((err) => {
            console.log(new Error(`로그인 중 에러 발생 log: ${err}`))
        })
}