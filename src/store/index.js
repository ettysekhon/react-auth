import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from '../utils/localStorage';

export const configureStore = preloadedState => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    { ...preloadedState, ...persistedState },
    compose(
      applyMiddleware(thunk, createLogger())
    )
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 100));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
