import React from 'react';
import { Match, Miss, Link } from 'react-router';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Accounts from './Accounts';
import AccessLogs from './AccessLogs';
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
            <li><Link to='/access-logs'>Access Logs</Link></li>
            <li><Link to='/accounts'>Accounts</Link></li>
          </ul>
          <Match
            exactly
            pattern='/'
            component={Landing}
          />
          <Match
            exactly
            pattern='/access-logs'
            component={AccessLogs}
          />
          <Match
            exactly
            pattern='/accounts'
            component={Accounts}
          />
          <Miss
            component={Landing}
          />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  router: React.PropTypes.object
};

export default App;
