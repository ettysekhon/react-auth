import ActionTypes from './types.js';

export const setRouter = (router) => {
  return {
    type: ActionTypes.SET_ROUTER,
    payload: {
      router
    }
  };
};
