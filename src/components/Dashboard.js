import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Logout from '../containers/Logout';
import Accounts from '../containers/Accounts';
import Account from '../containers/Account';
import AccessLogs from '../containers/AccessLogs';

const UnknownView = () => {
  return (
    null
  );
};

const Dashboard = ({ pathname }) => (
  <div>
    <h2>Dashboard</h2>
    <ul>
      <li><Link to='/logout'>Logout</Link></li>
      <li><Link to={`/access-logs`}>Access Logs</Link></li>
      <li><Link to={`/accounts`}>Accounts</Link></li>
    </ul>
    <Match
      pattern='/logout'
      component={Logout}
    />
    <Match
      component={AccessLogs}
      pattern={`/access-logs`}
    />
    <Match
      exactly
      component={Accounts}
      pattern={`/accounts`}
    />
    <Match
      exactly
      component={Account}
      pattern={`/account/:accountId`}
    />
    <Miss component={UnknownView}
    />
  </div>
);

Dashboard.propTypes = {
  pathname: React.PropTypes.string
};

export default Dashboard;
