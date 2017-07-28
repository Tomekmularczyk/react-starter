import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './pages/Page404';
import IndexPage from './pages';

export default (
  <span>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route component={Page404} />
    </Switch>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
  </span>
);
