import React from 'react';

class Account extends React.Component {
  componentDidMount () {
    const accountId = this.props.params.accountId;
    if (accountId) {
      this.props.getAccount(this.props.params.accountId);
    }
  }
  render () {
    const { isFetching, account } = this.props;
    const content = isFetching
      ? (<div>{'Loading...'}</div>)
      : (<div>{account.emailAddress}</div>);
    return (
      <div>
        <h2>Account</h2>
        { content }
      </div>
    );
  }
};

Account.propTypes = {
  account: React.PropTypes.object,
  getAccount: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  params: React.PropTypes.object.isRequired
};

export default Account;
