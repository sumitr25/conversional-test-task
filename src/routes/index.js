import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';

const routes = (
  <Router>
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
);

export default routes;
