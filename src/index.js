import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import { BrowserRouter } from 'react-router';

render(
  <BrowserRouter>
    {({ router }) => (
      <Root router={router} />
    )}
  </BrowserRouter>,
  document.getElementById('app')
);
