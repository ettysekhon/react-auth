'use strict';

module.exports = {
  /* eslint-disable no-process-env */
  host: process.env.RDB_HOST || 'db',
  port: parseInt(process.env.RDB_PORT, 10) || 28015,
  db: process.env.RDB_DB || 'eric',
  /* eslint-enable no-process-env */
  secret: 'keepitsecret',
  /* 1 year */
  tokenExpiry: 31536000
};
