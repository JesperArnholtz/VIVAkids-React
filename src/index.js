/* global document */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import App from './App';
import store from './store';
import routes from './routes';

// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={store}>
    {/* <App /> */}
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);