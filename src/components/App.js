import React from 'react';
import { Match, Miss, Link } from 'react-router';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import configureStore from '../store';
import { setRouter } from '../actions/app';
const store = configureStore();

class App extends React.Component {
  constructor (props) {
    super(props);
    if (this.props.router) {
      store.dispatch(setRouter(this.props.router));
    }
  }
  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <ul>
            <li><Link to='/'>Home</Link></li>
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
      </Provider>
    );
  };
}

App.propTypes = {
  router: React.PropTypes.object
};

export default App;
