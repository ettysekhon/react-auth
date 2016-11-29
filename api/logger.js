const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'logger',
  serializers: bunyan.stdSerializers,
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      level: 'error',
      path: './error.log'
    },
    {
      level: 'fatal',
      path: './error.log'
    }
  ]
});

module.exports = logger;
