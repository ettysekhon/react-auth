import React from 'react';
import { Match } from 'react-router';
import Landing from './Landing';

if (global) {
  global.System = { import () {} };
}

const App = () => {
  return (
    <div className='app'>
      <Match
        exactly
        pattern='/'
        component={Landing}
      />
    </div>
  );
};

export default App;
