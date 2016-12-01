import Signup from '../components/Signup';
import { signup } from '../actions/auth';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    error: !!state.auth.error
  };
};
const actions = (dispatch) => {
  return {
    signup: (company, username, password) => {
      dispatch(signup(company, username, password));
    }
  };
};

export default connect(select, actions)(Signup);
