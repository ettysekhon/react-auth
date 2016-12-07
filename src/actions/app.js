import ActionTypes from './types.js';
import createAction from './createAction';
import API from '../api';

const accountRequest = createAction(ActionTypes.ACCOUNT_REQUEST);
const accountSuccess = createAction(ActionTypes.ACCOUNT_SUCCESS);
const accountFailure = createAction(ActionTypes.ACCOUNT_FAILURE);

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

export const getAccounts = (username, password) => {
  return (dispatch, getState) => {
    dispatch(accountRequest());
    API.getAccounts(username, password)
    .then((payload) => {
      dispatch(accountSuccess({
        accounts: payload.accounts
      }));
    }).catch((err) => {
      // if error was a 403 then redirect ?
      dispatch(accountFailure(null, err));
    });
  };
};

export const registerInterest = (emailAddress, mobile) => {
  return (dispatch, getState) => {
    dispatch(registerInterestRequest());
    API.registerInterest(emailAddress, mobile)
    .then((payload) => {
      dispatch(registerInterestSuccess());
    }).catch((err) => {
      dispatch(registerInterestFailure(null, err));
    });
  };
};
