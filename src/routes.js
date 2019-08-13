import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Main from './pages/Main';

const Routes = () => (
  <Router>
    <Route exact path="/" component={ Login } />
    <Route path="/main/:id" component={ Main } />
  </Router>
);

export default Routes;
