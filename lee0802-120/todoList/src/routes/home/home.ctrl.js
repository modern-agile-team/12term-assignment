const User = require("../../models/User");
const Todo = require("../../models/Todo");
const logger = require("../../config/logger");

// TODO - 세션 기반으로 로그인 기능을 코드로 작성하는데 성공. 이제 해당 기능으로 클라이언트가 todoList에 접근할려고 할때 로그인 여부를 확인하는 코드 작성 필요.

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

    // login Service
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.success) {
            req.session.userId = response.user_id;
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
    },

    // T0D0 Service
    todoLoad: async (req, res) => {
        if (!req.session.userId) { // 쿠키에서 userId라는 값이 없다면 실행불가.
            return res.status(401).json({ success: false, msg: "로그인이 필요합니다." })
        }

        const todo = new Todo(req.session);
        const response = await todo.load();
        logger.info(
            `POST /todoLoad 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },
    todoSave: async (req, res) => {
        if (!req.session.userId) { // 쿠키에서 userId라는 값이 없다면 실행불가.
            return res.status(401).json({ success: false, msg: "로그인이 필요합니다." })
        }

        const todo = new Todo(req.session, req.body);
        const response = await todo.save();
        logger.info(
            `POST /todoSave 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },
    todoRevise: async (req, res) => {
        if (!req.session.userId) { // 쿠키에서 userId라는 값이 없다면 실행불가.
            return res.status(401).json({ success: false, msg: "로그인이 필요합니다." })
        }

        const todo = new Todo(req.session, req.body);
        const response = todo.revise();
        logger.info(
            `POST /todoRevise 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },
    todoDelete: async (req, res) => {
        if (!req.session.userId) { // 쿠키에서 userId라는 값이 없다면 실행불가.
            return res.status(401).json({ success: false, msg: "로그인이 필요합니다." })
        }

        const todo = new Todo(req.session ,req.body);
        const response = await todo.delete();
        logger.info(
            `POST /todoRemove 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    }
}

module.exports = {
    output,
    process
}