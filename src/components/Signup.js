import React, { Component, PropTypes } from 'react';

class Signup extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    const emailAddress = this.refs.emailAddress.value;
    const password = this.refs.password.value;
    const username = this.refs.username.value;
    this.props.signup(emailAddress, password, username);
  }
  render () {
    return (
      <div>
        <h2
          style={{
            fontSize: '20px',
            paddingBottom: '10px'
          }}
        >Signup Page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder='Enter email address'
              ref='emailAddress'
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginRight: '5px',
                marginBottom: '10px'
              }}
            />
          </label>
          <label>
            <input
              placeholder='Enter username'
              ref='username'
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginRight: '5px',
                marginBottom: '10px'
              }}
            />
          </label>
          <label>
            <input
              placeholder='Enter password'
              ref='password'
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginRight: '5px',
                marginBottom: '10px'
              }}
            />
          </label>
          <br />
          <button
            type={'submit'}
          >
            Signup
          </button>
          {this.props.error && (
            <p>Signup failed please try again</p>
          )}
        </form>
      </div>
    );
  }
}

Signup.displayName = 'Signup';

Signup.propTypes = {
  error: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired
};

export default Signup;
