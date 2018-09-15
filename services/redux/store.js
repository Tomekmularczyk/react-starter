/* eslint-disable no-underscore-dangle, global-require */
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

/**
 * if production environment we want to preload redux state (on client) to state provided by server.
 */
function getStore() {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    const preloadedState = window.__PRELOADED_STATE__;

    //  Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;

    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware())
    );
  }
  return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}

export default function configureStore() {
  const store = getStore();

  //  Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
