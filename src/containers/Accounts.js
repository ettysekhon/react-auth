import Accounts from '../components/Accounts';
import { getAccounts } from '../actions/app';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    isFetching: state.app.isFetching,
    accounts: state.app.accounts
  };
};
const actions = (dispatch) => {
  return {
    getAccounts: () => {
      dispatch(getAccounts());
    }
  };
};

export default connect(select, actions)(Accounts);
