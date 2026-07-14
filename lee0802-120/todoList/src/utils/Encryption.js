const bcrypt = require("bcrypt");

/**
 * 비밀번호를 해시로 변환
 * @param encryption
 * @returns {Promise<void|*>}
 */
async function hashPassword(encryption) {
    return await bcrypt.hash(encryption, process.env.SALT_ROUNDS);
}

/**
 * 입력한 비밀번호와 저장된 해시를 비교
 * @param password
 * @param hashed
 * @returns {Promise<void|*>}
 */
async function comparePassword(password, hashed) {
    return await bcrypt.compare(password, hashed);
}

module.exports = {
    hashPassword,
    comparePassword
}