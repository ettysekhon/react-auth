import ActionTypes from '../actions/types';
import objectAssign from 'object-assign';
import defaultState from './defaultState';

const app = (state = defaultState.app, action) => {
  switch (action.type) {
  case ActionTypes.LOGOUT_REQUEST:
  case ActionTypes.LOGIN_REQUEST:
    return objectAssign({}, state, {
      error: null,
      isFetching: true
    });
  case ActionTypes.LOGIN_SUCCESS:
    return objectAssign({}, state, {
      isFetching: false,
      loggedIn: action.payload.isLoggedIn,
      token: action.payload.token,
      user: action.payload.user,
    });
  case ActionTypes.LOGOUT_SUCCESS:
  case ActionTypes.LOGOUT_FAILURE:
  case ActionTypes.LOGIN_FAILURE:
    return objectAssign({}, state, {
      error: true,
      isFetching: false,
      loggedIn: false,
      token: '',
      user: {},
    });
  case ActionTypes.ACCOUNT_REQUEST:
  case ActionTypes.ACCOUNTS_REQUEST:
    return objectAssign({}, state, {
      error: null,
      isFetching: true
    });
  case ActionTypes.ACCOUNTS_SUCCESS:
    return objectAssign({}, state, {
      accounts: action.payload.accounts,
      error: true,
      isFetching: false
    });
  case ActionTypes.ACCOUNT_SUCCESS:
    return objectAssign({}, state, {
      account: action.payload.account,
      error: true,
      isFetching: false
    });
  case ActionTypes.ACCOUNTS_FAILURE:
    return objectAssign({}, state, {
      account: {},
      accounts: [],
      error: true,
      isFetching: false
    });
  case ActionTypes.ACCOUNT_FAILURE:
    return objectAssign({}, state, {
      account: {},
      error: true,
      isFetching: false
    });
  case ActionTypes.LOGS_REQUEST:
    return objectAssign({}, state, {
      error: null,
      isFetching: true
    });
  case ActionTypes.LOGS_SUCCESS:
    return objectAssign({}, state, {
      logs: action.payload.logs,
      error: true,
      isFetching: false
    });
  case ActionTypes.LOGS_FAILURE:
    return objectAssign({}, state, {
      logs: [],
      error: true,
      isFetching: false
    });
  case ActionTypes.NEXT_PATH_NAME:
    return objectAssign({}, state, {
      nextPathName: action.payload.nextPathName || '/'
    });
  case ActionTypes.SET_ROUTER:
    return objectAssign({}, state, {
      router: action.payload.router
    });
  default:
    return state;
  }
};

export default app;
