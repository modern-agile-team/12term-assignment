const users = {
    id: ["junsuk", "admin", "system"],
    password: ["asdf", "admin", "root"]
}

const output = {
    login: (req, res) => {
        res.render("home/login");
    },
    todoList: (req, res) => {
        res.render("home/todo");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pwd = req.body.password;

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === pwd) {
                response.success = true;
                response.message = "로그인에 성공했습니다."
                return res.json(response);
            }
        }

        response.success = true;
        response.message = "로그인에 실패했습니다.";
        return res.json(response)
    }
}

module.exports = {
    output,
    process
}