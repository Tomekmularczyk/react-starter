import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';

render(routes);
if (module.hot) {
  module.hot.accept();
}

function render(routes) {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  )
}