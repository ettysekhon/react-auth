import ActionTypes from '../actions/types';
import objectAssign from 'object-assign';
import defaultState from './defaultState';

const app = (state = defaultState.app, action) => {
  switch (action.type) {
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
  case ActionTypes.LOGIN_FAILURE:
    return objectAssign({}, state, {
      error: true,
      isFetching: false,
      loggedIn: false,
      token: '',
      user: {},
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
