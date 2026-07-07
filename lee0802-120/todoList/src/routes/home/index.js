const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.todoList);

router.get("/login", ctrl.output.login);

router.post("/login", ctrl.process.login);

module.exports = router;