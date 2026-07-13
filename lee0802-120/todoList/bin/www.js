const app = require("../src/app");
const PORT = process.env.PORT;
const logger = require("../src/config/logger")

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 시작되었습니다.`)
})