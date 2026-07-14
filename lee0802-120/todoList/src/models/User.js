const UserStorage = require("./UserStorage")
const {comparePassword} = require("../utils/Encryption");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const body = this.body;
        try {
            const { userId, loginId, password } = await UserStorage.getUserInfo(body.id);

            if (loginId) {
                if (loginId === body.id && await comparePassword(body.password, password)) {
                    return { success: true, user_id: userId };
                }
                return { success: false, msg: "비밀번호가 맞지 않습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    async register() {
        const body = this.body;
        try {
            return await UserStorage.save(body);
        } catch (err) {
            return { success: false, msg: err }
        }
    }
}

module.exports = User;