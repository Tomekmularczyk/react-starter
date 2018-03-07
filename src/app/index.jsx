import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Page404 from './pages/Page404';
import IndexPage from './pages';

const App = () => (
  <Fragment>
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

      .js-focus-ring *:focus:not(.focus-ring) {
        outline-width: 0;
      }
    `}
    </style>
  </Fragment>
);

export default hot(module)(App);
