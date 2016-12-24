import Signup from '../components/Signup';
import { signup } from '../actions/auth';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    error: !!state.app.error
  };
};
const actions = (dispatch) => {
  return {
    signup: (emailAddress, password, username) => {
      dispatch(signup(emailAddress, password, username));
    }
  };
};

export default connect(select, actions)(Signup);
