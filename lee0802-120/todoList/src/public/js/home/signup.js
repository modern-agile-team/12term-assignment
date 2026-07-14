const userId = document.getElementById("userId"),
    password = document.getElementById("userPassword"),
    passwordConfirm = document.getElementById("userPasswordCheck"),
    nickName = document.getElementById("userNickname"),
    registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register);

function register() {
    if (!userId.value) {
        alert("아이디를 입력해주세요.");
        return;
    } else if (!password.value) {
        alert("비밀번호를 입력해주세요.");
        return;
    } else if (!nickName.value) {
        alert("닉네임은 필수 입력입니다.");
        return;
    } else if (passwordConfirm.value !== password.value) {
        alert("비밀번호가 서로 다릅니다.");
        return;
    }

    const req = {
        userId: userId.value,
        password: password.value,
        nickName: nickName.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 오류 발생.");
        })
}