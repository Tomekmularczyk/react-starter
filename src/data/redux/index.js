import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

/**
 * creates store. Pass 'true' for logging redux.
 */
function configureStore(logActions) {
  const middleware = [];
  const logger = createLogger({ collapsed: true, diff: true });
  logActions && middleware.push(logger);

  const store = createState(reducers, middleware);

  //-- Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

/**
 * if production environment we want to preload redux state (on client) to state provided by server.
 */
function createState(reducers, middleware) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    const preloadedState = window.__PRELOADED_STATE__;

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;

    return createStore(reducers, preloadedState, applyMiddleware(...middleware));
  } else {
    return createStore(reducers, applyMiddleware(...middleware));
  }
}

const store = configureStore(true);
export default store;