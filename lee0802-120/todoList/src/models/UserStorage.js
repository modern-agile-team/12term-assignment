const db = require("../config/db")
const {hashPassword} = require("../utils/Encryption");

class UserStorage {
    static getUserInfo(loginId) {
        const query = "SELECT * FROM users WHERE loginId = ?;";

        return new Promise((resolve, reject) => {
            db.query(query, [loginId], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            })
        })
    }

    static async save(userInfo) {
        const query = "INSERT INTO users(loginId, username, password) VALUES (?, ?, ?);";
        const encryptionPassword = await hashPassword(userInfo.password);

        return new Promise((resolve, reject) => {
            db.query(query, [userInfo.userId, userInfo.nickName, encryptionPassword], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            })
        })
    }
}

module.exports = UserStorage;