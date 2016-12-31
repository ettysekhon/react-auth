import Account from '../components/Account';
import { getAccount } from '../actions/app';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    isFetching: state.app.isFetching
  };
};
const actions = (dispatch) => {
  return {
    getAccount: (accountId) => {
      dispatch(getAccount(accountId));
    }
  };
};

export default connect(select, actions)(Account);
