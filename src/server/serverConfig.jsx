import path from "path";
import Express from "express";
import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { renderToString } from "react-dom/server";
import { ServerLocation, isRedirect } from "@reach/router";
import { Provider } from "react-redux";
import configureStore from "services/redux/store";
import App from "../pages";

const server = Express();

// template engine
server.set("view engine", "ejs");
// where to look for templates
server.set("views", path.join(__dirname, "/public"));
// Serve static files
server.use(Express.static(path.join(__dirname, "/public"), { index: false }));

server.get("*", (req, res) => {
  const store = configureStore();
  const sheet = new ServerStyleSheet();
  const reactApp = (
    <ServerLocation url={req.url}>
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={store}>
          <App />
        </Provider>
      </StyleSheetManager>
    </ServerLocation>
  );

  try {
    const html = renderToString(reactApp);
    const styles = sheet.getStyleTags();
    const preloadedState = JSON.stringify(store.getState()).replace(
      /</g,
      "\\u003c"
    );
    res.render("index", { html, styles, preloadedState });
  } catch (error) {
    if (isRedirect(error)) {
      res.redirect(error.uri);
    } else {
      throw new Error(error.message); // send static html
    }
  }
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res
    .status(200)
    .render("index", { html: null, styles: null, preloadedState: null });
});

export default server;
