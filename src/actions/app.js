import ActionTypes from './types.js';

export const setRouter = (router) => {
  return {
    type: ActionTypes.SET_ROUTER,
    payload: {
      router
    }
  };
};

// export const registerInterest = (firstName, lastName, company, emailAddress) => {
//   return (dispatch, getState) => {
//     dispatch(signupRequest());
//     API.signup(emailAddress, username, password)
//     .then((payload) => {
//       dispatch(signupSuccess({
//         isLoggedIn: true,
//         user: payload.user,
//         token: payload.token
//       }));
//       nextRoute(getState, '/');
//     }).catch((err) => {
//       dispatch(signupFailure(null, err));
//     });
//   };
// };
