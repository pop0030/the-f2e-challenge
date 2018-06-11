import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** Redux */
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

/** Router */
import { createHashHistory } from 'history';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';

import 'reset-css';
import 'app/style/global.css';
import 'font-awesome/css/font-awesome.min.css';

const history = createHashHistory();
const store = createStore(
  connectRouter(history)(reducer),
  compose(applyMiddleware(
    logger,
    routerMiddleware(history)
  ))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
