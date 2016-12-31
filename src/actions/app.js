import ActionTypes from './types.js';
import createAction from './createAction';
import API from '../api';

const accountRequest = createAction(ActionTypes.ACCOUNT_REQUEST);
const accountSuccess = createAction(ActionTypes.ACCOUNT_SUCCESS);
const accountFailure = createAction(ActionTypes.ACCOUNT_FAILURE);

const updateAccountRequest = createAction(ActionTypes.UPDATE_ACCOUNT_REQUEST);
const updateAccountSuccess = createAction(ActionTypes.UPDATE_ACCOUNT_SUCCESS);
const updateAccountFailure = createAction(ActionTypes.UPDATE_ACCOUNT_FAILURE);

const deleteAccountRequest = createAction(ActionTypes.DELETE_ACCOUNT_REQUEST);
const deleteAccountSuccess = createAction(ActionTypes.DELETE_ACCOUNT_SUCCESS);
const deleteAccountFailure = createAction(ActionTypes.DELETE_ACCOUNT_FAILURE);

const accountsRequest = createAction(ActionTypes.ACCOUNTS_REQUEST);
const accountsSuccess = createAction(ActionTypes.ACCOUNTS_SUCCESS);
const accountsFailure = createAction(ActionTypes.ACCOUNTS_FAILURE);

const logsRequest = createAction(ActionTypes.LOGS_REQUEST);
const logsSuccess = createAction(ActionTypes.LOGS_SUCCESS);
const logsFailure = createAction(ActionTypes.LOGS_FAILURE);

const registerInterestRequest = createAction(ActionTypes.REGISTER_INTEREST_REQUEST);
const registerInterestSuccess = createAction(ActionTypes.REGISTER_INTEREST_SUCCESS);
const registerInterestFailure = createAction(ActionTypes.REGISTER_INTEREST_FAILURE);

export const setRouter = (router) => {
  return {
    type: ActionTypes.SET_ROUTER,
    payload: {
      router
    }
  };
};

export const getAccounts = () => {
  return (dispatch, getState) => {
    dispatch(accountsRequest());
    API.getAccounts()
    .then((payload) => {
      dispatch(accountsSuccess({
        accounts: payload.accounts
      }));
    }).catch((err) => {
      // if error was a 403 then redirect ?
      dispatch(accountsFailure(null, err));
    });
  };
};

export const getAccount = (accountId) => {
  return (dispatch, getState) => {
    dispatch(accountRequest({
      accountId
    }));
    API.getAccount(accountId)
    .then((payload) => {
      dispatch(accountSuccess({
        account: payload.account
      }));
    }).catch((err) => {
      // if error was a 403 then redirect ?
      dispatch(accountFailure(null, err));
    });
  };
};

export const deleteAccount = (accountId) => {
  return (dispatch, getState) => {
    dispatch(deleteAccountRequest({
      accountId
    }));
    API.deleteAccount(accountId)
    .then((payload) => {
      dispatch(deleteAccountSuccess());
    }).catch((err) => {
      // if error was a 403 then redirect ?
      dispatch(deleteAccountFailure(null, err));
    });
  };
};

export const updateAccount = (values) => {
  return (dispatch, getState) => {
    const updatedAccount = {
      accountId: values.id,
      emailAddress: values.emailAddress,
      password: values.password,
      isEnabled: values.isEnabled
    };
    dispatch(updateAccountRequest(updatedAccount));
    API.updateAccount(values.id, updatedAccount)
    .then((payload) => {
      dispatch(updateAccountSuccess({
        account: payload.account
      }));
    }).catch((err) => {
      // if error was a 403 then redirect ?
      dispatch(updateAccountFailure(null, err));
    });
  };
};

export const getLogs = () => {
  return (dispatch, getState) => {
    dispatch(logsRequest());
    API.getLogs()
    .then((payload) => {
      dispatch(logsSuccess({
        logs: payload.logs
      }));
    }).catch((err) => {
      // if error was a 403 then redirect ?
      dispatch(logsFailure(null, err));
    });
  };
};

export const registerInterest = (emailAddress, mobile) => {
  return (dispatch, getState) => {
    dispatch(registerInterestRequest({
      emailAddress,
      mobile
    }));
    API.registerInterest(emailAddress, mobile)
    .then((payload) => {
      dispatch(registerInterestSuccess());
    }).catch((err) => {
      dispatch(registerInterestFailure(null, err));
    });
  };
};
