const db = require("../config/db");

class TodoStorage {
    static dataLoad(userId) {
        const query = "SELECT todoId, text FROM todoList WHERE user_Id = ?;";

        return new Promise((resolve, reject) => {
            db.query(query, [userId], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data)
            })
        })
    }

    static dataSave(user_id, text) {
        const query = "INSERT INTO todoList(user_Id, text) VALUES (?, ?);";

        return new Promise((resolve, reject) => {
            db.query(query, [user_id, text], (err, data) => {
                if (err) reject(`${err}`);
                resolve({ success: true, msg: "저장 완료", todoId: data.insertId });
            })
        })
    }

    static dataRevise(todo_id, text) {
        const query = "UPDATE todoList SET text = ?, updateAt = CURRENT_TIMESTAMP WHERE todoId = ?;";

        return new Promise((resolve, reject) => {
            db.query(query, [text, todo_id], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true, msg: "수정 성공" });
            })
        })
    }

    static dataRemove(todo_id) {
        const query = "DELETE FROM todoList WHERE todoId = ?;";

        return new Promise((resolve, reject) => {
            db.query(query, [todo_id], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true, msg: "삭제 완료" });
            })
        })
    }
}

module.exports = TodoStorage;