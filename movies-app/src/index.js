import ReactDOM from 'react-dom';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';

import {store, history} from './store';
import styles from './styles/index.scss';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
