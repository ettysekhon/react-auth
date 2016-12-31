import React from 'react';
import AccountForm from './forms/AccountForm';

class Account extends React.Component {
  componentDidMount () {
    const accountId = this.props.params.accountId;
    if (accountId) {
      this.props.getAccount(this.props.params.accountId);
    }
  }
  render () {
    const { isFetching } = this.props;
    const content = isFetching
      ? (<div>{'Loading...'}</div>)
      : (<AccountForm />);
    return (
      <div>
        <h2>Account</h2>
        { content }
      </div>
    );
  }
};

Account.propTypes = {
  getAccount: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  params: React.PropTypes.object.isRequired
};

export default Account;
