import React from 'react'
import ReactRouter, { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Main from './components/Main';
console.log(Main)

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute  component={Main}>
      </IndexRoute>
    </Route>
  </Router>
);


export default routes;
