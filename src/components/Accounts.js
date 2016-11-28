import React from 'react';

class Accounts extends React.Component {
  constructor () {
    super();
    this.state = {
      redirectToReferrer: false
    };
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
  isLoggedIn: React.PropTypes.bool
};

Accounts.defaultProps = {
  isLoggedIn: true
};

export default Accounts;
