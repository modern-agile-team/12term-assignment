const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PWD,
    database: process.env.DATABASE_DB
});

db.connect();

module.exports = db;