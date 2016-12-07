const jwt = require('jsonwebtoken');
const config = require('./config');
const logger = require('./logger');

/* eslint-disable consistent-return */
exports.verifyCredentials = (errorIfNoToken) => {
  return (req, res, next) => {
    const authorizationHeader = req.headers['Authorization'] || req.headers['authorization'] || '';
    console.log('authorizationHeader', authorizationHeader);
    const token = authorizationHeader.length > 0 ? authorizationHeader.split('Bearer ')[1] : null;
    console.log('token', token);
    // token is set on login routes
    // and cleared on logout, on expiry user will need to login again
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return next(new Error('invalid token provided'));
        }
        if (errorIfNoToken === false) {
          // TODO:
          // check username in database
        }
        /* eslint-disable no-param-reassign */
        req.session = decoded;
        /* eslint-enable no-param-reassign */
        return next();
      });
    } else {
      if (errorIfNoToken) {
        return res.status(403).send({
          authenticated: false,
          message: 'No token provided.'
        });
      }
      return next();
    }
  };
};
/* eslint-enable consistent-return */
exports.requestLogger = (req, res, next) => {
  const start = new Date();
  const end = res.end;
  res.end = function (chunk, encoding) {
    const responseTime = (new Date()).getTime() - start.getTime();
    end.call(res, chunk, encoding);
    const contentLength = parseInt(res.getHeader('Content-Length'), 10);
    const data = {
      url: req.url,
      method: req.method,
      statusCode: res.statusCode,
      responseTime: responseTime,
      contentLength: isNaN(contentLength) ? 0 : contentLength
    };
    /* eslint-disable max-len */
    logger.info('method: %s; url: %s; status code: %d; response time: %dms, content length: %d', data.method, data.url,
    /* eslint-enable max-len */
    data.statusCode, data.responseTime, data.contentLength);
  };
  next();
};

exports.requestLogger = (req, res, next) => {
  const start = new Date();
  const end = res.end;
  res.end = function (chunk, encoding) {
    const responseTime = (new Date()).getTime() - start.getTime();
    end.call(res, chunk, encoding);
    const contentLength = parseInt(res.getHeader('Content-Length'), 10);
    const data = {
      url: req.url,
      method: req.method,
      statusCode: res.statusCode,
      responseTime: responseTime,
      contentLength: isNaN(contentLength) ? 0 : contentLength
    };
    /* eslint-disable max-len */
    logger.info('method: %s; url: %s; status code: %d; response time: %dms, content length: %d', data.method, data.url,
    /* eslint-enable max-len */
    data.statusCode, data.responseTime, data.contentLength);
  };
  next();
};

exports.errorLogger = (err, req, res, next) => {
  logger.error({ req: req, res: res, error: err }, err.stack);
  next(err);
};
