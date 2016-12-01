import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Landing from './Landing';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Dashboard from './Dashboard';

const ProtectedView = () => {
  return (
    <div className='app'>
      <Match
        pattern='/'
        component={Dashboard}
      />
      <Miss component={Dashboard}
      />
    </div>
  );
};

const UnProtectedView = () => {
  return (
    <div className='app'>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>
      <Match
        exactly
        pattern='/'
        component={Landing}
      />
      <Match
        pattern='/signup'
        component={Signup}
      />
      <Match
        pattern='/login'
        component={Login}
      />
      <Miss component={Landing}
      />
    </div>
  );
};

const Main = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <ProtectedView />
  ) : (
    <UnProtectedView />
  );
};

Main.defaultProps = {
  isLoggedIn: false
};

Main.propTypes = {
  isLoggedIn: React.PropTypes.bool
};

export default Main;
