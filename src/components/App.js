import React from 'react';
import { Match } from 'react-router';
import { Provider } from 'react-redux';
import Landing from './Landing';
import configureStore from '../store';
const store = configureStore();

// TODO: REMOVE REDUX TEST
import { loginRequest } from '../actions/login';
store.dispatch(loginRequest());

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match
          exactly
          pattern='/'
          component={Landing}
        />
      </div>
    </Provider>
  );
};

export default App;
