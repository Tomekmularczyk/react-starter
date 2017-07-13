import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from 'data/redux';
import routes from './routes';

function render() {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
}

render();
if (module.hot) {
  module.hot.accept();
}
