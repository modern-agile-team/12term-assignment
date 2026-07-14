const { createLogger, transports, format } = require("winston");
const { combine, timestamp, printf, label, json, simple, colorize } = format;


const printLogFormat = combine(
    label({
        label: "backend"
    }),
    timestamp({
        format: "YYYY-MM-dd HH:mm:dd"
    }),
    printf(({ timestamp, label, level, message }) => {
        return `${timestamp} [${label}] ${level} : ${message}`;
    })
)

const logger = createLogger({
    transports: [
        new transports.Console({
            level: "info",
            format: printLogFormat
        })
    ]
})

module.exports = logger;