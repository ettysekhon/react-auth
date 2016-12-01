import React, { Component, PropTypes } from 'react';

class Logout extends Component {
  componentDidMount () {
    this.props.logout();
  }
  render () {
    return (<p>You are now logged out</p>);
  }
}

Logout.displayName = 'Logout';

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Logout;
