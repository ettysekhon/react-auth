import React, { Component, PropTypes } from 'react';

class Login extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.login(username, password);
  }
  render () {
    return (
      <div>
        <h2
          style={{
            fontSize: '20px',
            paddingBottom: '10px'
          }}
        >Login Page</h2>
        <form onSubmit={this.handleSubmit}>
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
            Login
          </button>
          {this.props.error && (
            <p>Enter correct username & password</p>
          )}
        </form>
      </div>
    );
  }
}

Login.displayName = 'Login';

Login.propTypes = {
  error: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;
