import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';

import rootReducerCreate from './rootReducer';
import rootSagas from './rootSagas';

export const history = createBrowserHistory();

const sagaMiddelware = createSagaMiddleware();
const initialState = {};
const enhancers = [];
const midelware = [sagaMiddelware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  typeof devToolsExtension === 'function' && enhancers.push(devToolsExtension())
}

export const store = createStore(
  rootReducerCreate(history),
  initialState,
  compose(
    applyMiddleware(...midelware),
    ...enhancers
  )
)

sagaMiddelware.run(rootSagas);
