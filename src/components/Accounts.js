import React from 'react';

class Accounts extends React.Component {
  constructor () {
    super();
    this.state = {
      redirectToReferrer: false
    };
  }
  componentDidMount () {
    this.props.getAccounts();
  }
  render () {
    return (
      <div>
        <h2>Accounts</h2>
      </div>
    );
  }
}

Accounts.propTypes = {
  getAccounts: React.PropTypes.func.isRequired,
  accounts: React.PropTypes.array.isRequired,
};

Accounts.defaultProps = {
  accounts: []
};

export default Accounts;
