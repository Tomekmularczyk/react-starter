/* eslint-disable no-underscore-dangle, global-require */
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

/**
 * if production environment we want to preload redux state (on client) to state provided by server.
 */
function createState(middleware) {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    const preloadedState = window.__PRELOADED_STATE__;

    //  Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;

    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middleware)
    );
  }
  return createStore(rootReducer, applyMiddleware(...middleware));
}

export default function configureStore() {
  const middleware = [];
  const logger = createLogger({ collapsed: true, diff: true });
  if (process.env.NODE_ENV !== "production") middleware.push(logger);

  const store = createState(middleware);

  //  Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
