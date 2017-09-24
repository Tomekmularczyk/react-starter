import path from 'path';
import Express from 'express';
import React from 'react';
import { flushToHTML } from 'styled-jsx-postcss/server';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from 'data/redux/index';
import app from '../src/app/index';

const server = Express();

// template engine
server.set('view engine', 'ejs');
// where to look for templates
server.set('views', path.join(__dirname, '/public'));
// Serve static files
server.use(Express.static(path.join(__dirname, '/public'), { index: false }));

server.get('*', (req, res) => {
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {app}
      </StaticRouter>
    </Provider>,
  );

  const styles = flushToHTML();
  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.render('index', { html, styles, preloadedState });
  }
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
server.listen(server_port, server_ip_address, () => {
  console.log(`Production Express server running at localhost:${PORT}`);
});
