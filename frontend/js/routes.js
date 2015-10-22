'use strict';
// IMPORTS /////////////////////////////////////////////////////////////////////
import App from './react/App.jsx';
import HomePage from './react/HomePage.jsx';
import React from 'react';
import store from './redux/store';
import { IndexRoute, Route } from 'react-router';
import { exampleAjaxAction, exampleIncrementAction } from './redux/actions/example';
////////////////////////////////////////////////////////////////////////////////

const onHomeRouteEntered = (nextState, replaceState) => {
  store.dispatch(exampleIncrementAction()); // You can dispatch events when routes are navigated to.
  store.dispatch(exampleAjaxAction()); // You can dispatch events when routes are navigated to.
};

const routes = (
<Route path="/" component={ App }>
  <IndexRoute component={ HomePage } onEnter={ onHomeRouteEntered } />
</Route>
);

// EXPORTS /////////////////////////////////////////////////////////////////////
export default routes;