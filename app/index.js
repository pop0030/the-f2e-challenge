import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** Redux */
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

import 'reset-css';
import 'app/style/global.css';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
