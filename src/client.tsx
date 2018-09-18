import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "services/redux/store";
import App from "./pages";

const store = configureStore(undefined);

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
