import AccessLogs from '../components/AccessLogs';
import { getLogs } from '../actions/app';
import { connect } from 'react-redux';

const select = (state) => {
  return {
    logs: state.app.logs
  };
};
const actions = (dispatch) => {
  return {
    getLogs: () => {
      dispatch(getLogs());
    }
  };
};

export default connect(select, actions)(AccessLogs);
