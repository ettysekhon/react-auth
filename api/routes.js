const express = require('express');
const apiController = require('./controller');
const router = express.Router(); // eslint-disable-line
const middleware = require('./middleware.js');
const verifyCredentials = middleware.verifyCredentials;

const errorIfNoToken = true;
const verifyCredentialsNoError = verifyCredentials(!errorIfNoToken);
const verifyCredentialsError = verifyCredentials(errorIfNoToken);

// protected routes
router.route('/logs').get(verifyCredentialsError, apiController.getLogs);
router.route('/accounts').get(verifyCredentialsError, apiController.getAccounts);
router.route('/accounts/:id').get(verifyCredentialsError, apiController.getAccount);
router.route('/accounts/:id').put(verifyCredentialsError, apiController.putAccount);
router.route('/accounts/:id').delete(verifyCredentialsError, apiController.deleteAccount);

// unprotected routes
router.route('/login').post(verifyCredentialsNoError, apiController.login);
router.route('/logout').post(verifyCredentialsNoError, apiController.logout);
router.route('/signup').post(verifyCredentialsNoError, apiController.signup);

module.exports = router;
