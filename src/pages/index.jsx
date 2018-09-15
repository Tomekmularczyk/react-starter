import React from "react";
import { Router } from "@reach/router";
import { hot } from "react-hot-loader";
import { injectGlobal } from "styled-components";
import Page404 from "./Page404";
import IndexPage from "./IndexPage";

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
  <Router>
    <IndexPage path="/" />
    <Page404 default />
  </Router>
);

export default hot(module)(App);
