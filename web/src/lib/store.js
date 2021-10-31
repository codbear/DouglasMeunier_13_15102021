import { applyMiddleware, combineReducers, createStore, compose } from 'redux';

import { securityReducer, securityMiddleware } from '../modules/security';

const reducer = combineReducers({
  security: securityReducer,
});

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (args) => args;

const store = createStore(reducer, compose(applyMiddleware(securityMiddleware), reduxDevtools));

export default store;
