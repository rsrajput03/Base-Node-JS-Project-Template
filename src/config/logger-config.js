const { createLogger, format, transports } = require("winston");
const { combine, colorize, timestamp, printf } = format;

const logger = createLogger({
  format: combine(
    colorize({ all: true }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    printf(
      ({ timestamp, level, message }) => `${timestamp}: ${level}: ${message}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "app.log" }),
  ],
});

module.exports = logger;
