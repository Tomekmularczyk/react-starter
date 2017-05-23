import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './Page404';
import App from './App/App';

export default (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route component={Page404}/>
  </Switch>
);