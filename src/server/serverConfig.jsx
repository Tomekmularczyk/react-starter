import path from "path";
import Express from "express";
import React from "react";
import { flushToHTML } from "styled-jsx/server";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import configureStore from "data/redux";
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

  const context = {};
  const reactApp = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(reactApp);
  const styles = flushToHTML();
  const preloadedState = JSON.stringify(store.getState()).replace(
    /</g,
    "\\u003c"
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.render("index", { html, styles, preloadedState });
  }
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res
    .status(200)
    .render("index", { html: null, styles: null, preloadedState: null });
});

export default server;
