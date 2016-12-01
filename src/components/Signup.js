import React, { Component, PropTypes } from 'react';

class Signup extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();

    const company = this.refs.company.value;
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.signup(company, username, password);
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
              placeholder='Enter company'
              ref='company'
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
            fillType={'outline'}
            styleType={'primary'}
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
