import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from 'data/redux';
import routes from './routes';

render(routes, store);
if (module.hot) {
  module.hot.accept();
}

function render(routes, store) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}