import { createStore, applyMiddleware, compose } from 'redux';
import webReducers from 'web/reducers';
import mobileReducers from 'mobile/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const reducers = process.env.REACT_APP_MOBILE ? mobileReducers : webReducers;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);
