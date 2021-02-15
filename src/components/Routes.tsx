import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Dashboard} />
      </Switch>
    </Router>
  );
}
