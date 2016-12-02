import React from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';
import configureStore from '../store';
import { setRouter } from '../actions/app';
const store = configureStore();

class Root extends React.Component {
  constructor (props) {
    super(props);
    if (this.props.router) {
      store.dispatch(setRouter(this.props.router));
    }
  }
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
}

Root.propTypes = {
  router: React.PropTypes.object
};

export default Root;
