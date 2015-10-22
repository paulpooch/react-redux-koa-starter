'use strict';
// IMPORTS /////////////////////////////////////////////////////////////////////
import apiMiddleware from './apiMiddleware';
import createLogger from 'redux-logger';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'; // Lets us dispatch() functions.
import { applyMiddleware, createStore } from 'redux';
////////////////////////////////////////////////////////////////////////////////

const REDUCER_FILE = './reducer';
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, apiMiddleware, loggerMiddleware)(createStore);

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers.
    module.hot.accept(REDUCER_FILE, () => {
      const nextReducer = require('./reducer');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};

const store = configureStore();

// EXPORTS /////////////////////////////////////////////////////////////////////
export default store;