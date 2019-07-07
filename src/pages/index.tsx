import { Router } from "@reach/router";
import React from "react";
import { hot } from "react-hot-loader/root";
import { createGlobalStyle } from "styled-components";
import IndexPage from "./IndexPage";
import Page404 from "./Page404";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <IndexPage path="/" />
      <Page404 default />
    </Router>
  </>
);

export default hot(App);
