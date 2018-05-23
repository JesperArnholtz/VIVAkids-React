import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Counter from "./components/Counter";
import Home from './components/Home';
import Blogs from './components/Blogs';
import Music from './components/Music';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="blog" component={Blogs} />
    <Route path="musik" component={Music}/>
    <Route path="counter" component={Counter} />

  </Route>
);