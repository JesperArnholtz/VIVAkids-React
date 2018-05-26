/* global document */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
//import store from './store';

import './styles/main.scss';
import './styles/navigation.scss';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);