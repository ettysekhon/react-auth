import ActionTypes from './types.js';
import createAction from './createAction';

const loginRequest = createAction(ActionTypes.LOGIN_REQUEST);
// const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
// const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);
// const nextPathName = createAction(ActionTypes.NEXT_PATH_NAME);

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(loginRequest({
      username,
      password
    }));
  };
  // return (dispatch, getState) => {
  //   const { app } = getState();
  //   dispatch(loginRequest({
  //     username,
  //     password
  //   }));
  //   API.login(username, password)
  //   .then((payload) => {
  //     dispatch(loginSuccess({
  //       isLoggedIn: true,
  //       user: payload.user,
  //       token: payload.token
  //     }));
  //     if (app.nextPathName) {
  //       routeReplace(app.nextPathName);
  //     } else {
  //       routeReplace('/');
  //     }
  //   }).catch((err) => {
  //     dispatch(loginFailure(null, err));
  //   });
  // };
};
