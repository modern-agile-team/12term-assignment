const User = require("../../models/User");
const logger = require("../../config/logger")

const output = {
    main: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("/home/main");
    },
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    todoList: (req, res) => {
        logger.info(`GET /todoList 200 "todoList 화면으로 이동"`);
        res.render("home/todo");
    },
    register: (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/signUp");
    }
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.success) {
            req.session.userId = req.body.id;
        }
        logger.info(
            `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        logger.info(
            `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    }
}

module.exports = {
    output,
    process
}