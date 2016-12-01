import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Accounts from './Accounts';
import AccessLogs from './AccessLogs';

const Dashboard = ({ pathname }) => (
  <div>
    <h2>Dashboard</h2>
    <ul>
      <li><Link to={`${pathname}/access-logs`}>Access Logs</Link></li>
      <li><Link to={`${pathname}/accounts`}>Accounts</Link></li>
    </ul>

    <Match
      component={AccessLogs}
      pattern={`${pathname}/access-logs`}
    />
    <Match
      component={Accounts}
      pattern={`${pathname}/accounts`}
    />
    <Match pattern={pathname} exactly component={Accounts}
    />
    <Miss component={Accounts}
    />
  </div>
);

Dashboard.propTypes = {
  pathname: React.PropTypes.string
};

export default Dashboard;
