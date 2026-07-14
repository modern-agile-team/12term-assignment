const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const home = require("./routes/home");
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1일
        httpOnly: true
    }
}));

app.use("/", home);

module.exports = app;