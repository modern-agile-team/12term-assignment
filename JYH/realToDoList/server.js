"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

function getCurrentTime() {
    return new Date().toLocaleString("sv-SE");
}

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Database connection successful!");
        connection.release();
    }
    catch (error) {
        console.error("Database connection failed:", error.message);
    }
}

testConnection();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/todos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM todos");
        res.json(rows);
    }
    catch (error) {
        console.error("Todo retrieval failed:", error.message);
        res.status(500).json({ message: "Failed to retrieve todos" });
    }
});

app.post("/todos", async (req, res) => {
    try {
        let { description } = req.body;

        if (
            typeof description !== "string" ||
            description.trim() === ""
        ) {
            return res.status(400).json({
                message: "Description is required"
            });
        }

        description = description.trim();

        const [result] = await pool.execute(
            "INSERT INTO todos (description) VALUES (?)",
            [description]
        );

        res.status(201).json({
            id: result.insertId,
            description
        });
    }
    catch (error) {
        console.error("Todo creation failed:", error.message);
        res.status(500).json({
            message: "Todo creation failed"
        });
    }
});

app.patch("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { is_check, description } = req.body;

        let result;

        if (description !== undefined) {
            if (
                typeof description !== "string" ||
                description.trim() === ""
            ) {
                return res.status(400).json({
                    message: "Description is required"
                });
            }

            const trimmedDescription = description.trim();

            [result] = await pool.execute(
                "UPDATE todos SET description = ? WHERE id = ?",
                [trimmedDescription, id]
            );
        }
        else if (is_check !== undefined) {
            [result] = await pool.execute(
                "UPDATE todos SET is_check = ? WHERE id = ?",
                [is_check, id]
            );
        }
        else {
            return res.status(400).json({
                message: "No update data provided"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json({
            message: "Todo updated"
        });
    }
    catch (error) {
        console.error("Todo update failed:", error.message);
        res.status(500).json({
            message: "Todo update failed"
        });
    }
});

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.execute(
            "DELETE FROM todos WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json({
            message: "Todo deleted"
        });
    }
    catch (error) {
        console.error("Todo deletion failed:", error.message);
        res.status(500).json({
            message: "Todo deletion failed"
        });
    }
});

app.listen(port, () => {
    console.log("----------------------------------------------------------------");
    console.log(
        `[${getCurrentTime()}] Server is running on http://localhost:${port}`
    );
});
