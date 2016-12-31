import ActionTypes from './types.js';
import createAction from './createAction';
import API from '../api';
import { loadState, saveState } from '../utils/localStorage';

const loginRequest = createAction(ActionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);

const signupRequest = createAction(ActionTypes.SIGNUP_REQUEST);
const signupSuccess = createAction(ActionTypes.SIGNUP_SUCCESS);
const signupFailure = createAction(ActionTypes.SIGNUP_FAILURE);

const logoutRequest = createAction(ActionTypes.LOGOUT_REQUEST);
const logoutSuccess = createAction(ActionTypes.LOGOUT_SUCCESS);
const logoutFailure = createAction(ActionTypes.LOGOUT_FAILURE);

const saveToken = (token) => {
  const state = loadState();
  state.app.token = token;
  saveState(state);
};

const nextRoute = (getState, path) => {
  const { app } = getState();
  const router = app && app.router;
  if (router) {
    router.replaceWith('/');
  }
};

export const login = (emailAddress, password) => {
  return (dispatch, getState) => {
    dispatch(loginRequest({
      emailAddress,
      password
    }));
    API.login(emailAddress, password)
    .then((payload) => {
      saveToken(payload.token);
      dispatch(loginSuccess({
        isLoggedIn: true,
        user: payload.user,
        token: payload.token
      }));
      nextRoute(getState, '/');
    }).catch((err) => {
      dispatch(loginFailure(null, err));
    });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch(logoutRequest());
    API.logout()
    .then(() => {
      dispatch(logoutSuccess({}));
    })
    .catch((err) => {
      dispatch(logoutFailure(null, err));
    })
    .then(() => {
      saveToken('');
      nextRoute(getState, '/');
    });
  };
};

export const signup = (emailAddress, password, username) => {
  return (dispatch, getState) => {
    dispatch(signupRequest());
    API.signup(emailAddress, password, username)
    .then((payload) => {
      saveToken(payload.token);
      dispatch(signupSuccess({
        isLoggedIn: true,
        user: payload.user,
        token: payload.token
      }));
      nextRoute(getState, '/');
    }).catch((err) => {
      dispatch(signupFailure(null, err));
    });
  };
};
