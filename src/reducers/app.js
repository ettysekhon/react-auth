import ActionTypes from '../actions/types';
import objectAssign from 'object-assign';

const app = (state = {
  error: null,
  isFetching: false,
  loggedIn: false,
  token: '',
  user: {}
}, action) => {
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
  default:
    return state;
  }
};

export default app;
