import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Counter from "./components/Counter";
import Home from './components/Home';
import Blogs from './components/Blogs';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="blogs" component={Blogs} />
    <Route component={Blogs} path="/Musik" />
    <Route path="counter" component={Counter} />

  </Route>
);