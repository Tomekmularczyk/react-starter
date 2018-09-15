import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { injectGlobal } from "styled-components";
import Page404 from "./Page404/Page404";
import IndexPage from "./IndexPage/IndexPage";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .js-focus-ring *:focus:not(.focus-ring) {
    outline-width: 0;
  }
`;

const App = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route component={Page404} />
  </Switch>
);

export default hot(module)(App);
