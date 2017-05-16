import React from 'react';
import { Route, Switch } from 'react-router-dom';
import _404page from './404page';
import App from './App/App';

export default (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route component={_404page}/>
  </Switch>
);