const express = require('express');
const path = require('path');
const app = express();

const home = require("./routes/home");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.use("/", home);

module.exports = app;