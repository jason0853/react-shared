import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import webReducers from 'web/reducers';
// import webEpics from 'web/epics';
import mobileReducers from 'mobile/reducers';
// import mobileEpics from 'mobile/epics';
import rootEpics from 'shared/epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];
const reducers = process.env.REACT_APP_MOBILE ? mobileReducers : webReducers;
// const rootEpics = process.env.REACT_APP_MOBILE ? mobileEpics : webEpics;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

epicMiddleware.run(rootEpics);
