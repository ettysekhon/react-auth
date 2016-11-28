import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router';

ReactDOM.render(
  <BrowserRouter>
    {({ router }) => (
      <App router={router} />
    )}
  </BrowserRouter>,
  document.getElementById('app')
);
