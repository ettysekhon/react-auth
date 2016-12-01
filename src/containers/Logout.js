import Logout from '../../../components/auth/Logout';
import { logout } from '../../../actions/auth';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    error: !!state.app.error
  };
};
const actions = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(select, actions)(Logout);
