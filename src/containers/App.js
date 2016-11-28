import { connect } from 'react-redux';
import App from '../components/App';
import { setRouter } from '../actions/app';

const select = null;
const actions = (dispatch) => {
  return {
    setRouter: (router) => {
      dispatch(setRouter(router));
    }
  };
};

export default connect(select, actions)(App);
