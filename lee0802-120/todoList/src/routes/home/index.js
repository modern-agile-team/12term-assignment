const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");
const { requireLogin } = require("../../middlewares/auth");

router.get("/", ctrl.output.main);
router.get("/todoList", requireLogin, ctrl.output.todoList);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;