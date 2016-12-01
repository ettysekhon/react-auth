import { connect } from 'react-redux';
import Main from '../components/Main';

const select = (state) => {
  return {
    loggedIn: state.app.loggedIn
  };
};
const actions = null;

export default connect(select, actions)(Main);
