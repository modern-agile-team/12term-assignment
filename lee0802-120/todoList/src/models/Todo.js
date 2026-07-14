const TodoStorage = require("./TodoStorage");
const logger = require("../config/logger");

class Todo {
    constructor(session, body) {
        this.session = session;
        this.body = body;
    }

    async load() {
        const session = this.session;

        try {
            const todoList = await TodoStorage.dataLoad(session.userId);

            return { success: true, message: "로드 완료.", todo: todoList };
        } catch (err) {
            logger.error(err);
            return { success: false, message: "로드에 실패했습니다."}
        }
    }

    async save() {
        const body = this.body;
        const session = this.session;

        try {
            return await TodoStorage.dataSave(session.userId, body.text);
        } catch (err) {
            logger.error(err);
            return { success: false, msg: "Todo 저장에 실패했습니다."};
        }
    }

    async revise() {
        const body = this.body;

        try {
            return await TodoStorage.dataRevise(body.todoId, body.text);
        } catch (err) {
            logger.error(err);
            return { success: false, msg: "Todo 수정에 실패했습니다." }
        }
    }

    async delete() {
        const body = this.body;

        try {
            return await TodoStorage.dataRemove(body.todoId);
        } catch (err) {
            logger.error(err);
            return { success: false, msg: "Todo를 삭제하지 못했습니다.", error: err };
        }
    }
}

module.exports = Todo;