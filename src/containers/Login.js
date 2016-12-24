import Login from '../components/Login';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    error: !!state.app.error
  };
};
const actions = (dispatch) => {
  return {
    login: (emailAddress, password) => {
      dispatch(login(emailAddress, password));
    }
  };
};

export default connect(select, actions)(Login);
