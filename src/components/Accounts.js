import React from 'react';
import { Link } from 'react-router';

class Accounts extends React.Component {
  componentDidMount () {
    this.props.getAccounts();
  }
  renderAccount (account, index) {
    return (
      <li key={index}>
        <Link to={`/account/${account.id}`}>{account.emailAddress}</Link>
      </li>
    );
  }
  render () {
    const accounts = () => {
      return (<ul>
        { this.props.accounts.map((account, index) =>
          this.renderAccount(account, index))
        }
      </ul>);
    };
    const content = this.props.isFetching
      ? (<div>{'Loading...'}</div>)
      : (accounts());
    return (
      <div>
        <h2>Accounts</h2>
        { content }
      </div>
    );
  }
}

Accounts.propTypes = {
  accounts: React.PropTypes.array.isRequired,
  getAccounts: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
};

Accounts.defaultProps = {
  accounts: []
};

export default Accounts;
