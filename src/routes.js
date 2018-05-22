import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Counter from "./components/Counter";
import Home from './components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Counter} />
    <Route path="home" component={Home} />
    {/* <Route component={Music} path="/Musik" /> */}
    <Route path="counter" component={Counter} />

  </Route>
);