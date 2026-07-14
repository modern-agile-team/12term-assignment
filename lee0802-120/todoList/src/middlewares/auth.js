const logger = require("../config/logger");

// 로그인을 하지 않은 클라이언트는 경고를 띄우고 로그인 페이지로 이동 시키는 함수
function requireLogin(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    logger.info(`${req.method} ${req.originalUrl} 401 "로그인이 필요합니다."`);
    return res.redirect("/login");
}

module.exports = {
    requireLogin
}
