const { createLogger, format, transports } = require('winston')
logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [new transports.Console()]
});
module.exports = { logger };

