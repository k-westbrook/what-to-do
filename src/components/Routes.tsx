import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CalendarComponent from './Calendar';
import Dashboard from './Dashboard';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/calendar" component={CalendarComponent} />
        <Route component={Dashboard} />
      </Switch>
    </Router>
  );
}
