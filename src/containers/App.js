import { connect } from 'react-redux';
import App from '../components/App';

const select = (state) => {
  return {
    loggedIn: state.app.loggedIn
  };
};
const actions = null;

export default connect(select, actions)(App);
