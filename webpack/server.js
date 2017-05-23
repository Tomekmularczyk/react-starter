import path from 'path';
import Express from 'express';
import React from 'react';
import { flushToHTML } from 'styled-jsx-postcss/server'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import routes from '../src/routes';

const app = Express();

//template engine
app.set('view engine', 'ejs');
//where to look for templates
app.set('views', path.join(__dirname, '/dist'));

//Serve static files
app.use(Express.static(path.join(__dirname, 'dist'), {index: false}));

// This is fired every time the server side receives a request
app.get('*', (req, res) => {
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      {routes}
    </StaticRouter>
  );

  const styles = flushToHTML();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end()
  } else {
    res.render('index', { html, styles });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT)
});
