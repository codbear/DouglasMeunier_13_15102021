import { applyMiddleware, combineReducers, createStore, compose } from 'redux';

import {
  securityReducer,
  securityMiddleware,
  userReducer,
  userMiddleware,
} from '../modules/security';

const reducer = combineReducers({
  security: securityReducer,
  user: userReducer,
});

const middlewares = [securityMiddleware, userMiddleware];

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (args) => args;

const store = createStore(reducer, compose(applyMiddleware(...middlewares), reduxDevtools));

export default store;
