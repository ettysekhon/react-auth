import React from 'react';
import { Provider } from 'react-redux';
import Main from '../containers/Main';
import configureStore from '../store';
import { setRouter } from '../actions/app';
const store = configureStore();

class App extends React.Component {
  constructor (props) {
    super(props);
    if (this.props.router) {
      store.dispatch(setRouter(this.props.router));
    }
  }
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  };
}

App.propTypes = {
  router: React.PropTypes.object
};

export default App;
