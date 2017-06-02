import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from './components/Main';
import HomePage from 'HomePage';
import Account from './components/Account';
import Transaction from './components/Transaction';
import store from './store';

require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!./css/style.scss');
$(document).ready(() => $(document).foundation());

const requireLogin = (nextState, replace, next) => {
  if (store.getState().user === null) {
    replace('/account');
  }
  next();
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Router path='/' component={Main}>
        <IndexRoute component={HomePage} />
        <Route path='account' component={Account} />
        <Route path='transaction' component={Transaction} onEnter={requireLogin} />
      </Router>
    </Router>
  </Provider>,
  document.getElementById('root')
);
