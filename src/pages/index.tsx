import { Router } from "@reach/router";
import React from "react";
import { hot } from "react-hot-loader";
import { injectGlobal } from "styled-components";
import IndexPage from "./IndexPage";
import Page404 from "./Page404";

// tslint:disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const App = () => (
  <Router>
    <IndexPage path="/" />
    <Page404 default />
  </Router>
);

export default hot(module)(App);
