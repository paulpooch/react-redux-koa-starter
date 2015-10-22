'use strict';
// CSS /////////////////////////////////////////////////////////////////////////
import '../css/normalize.css';
import '../css/font-awesome.css';

// IMAGES //////////////////////////////////////////////////////////////////////
// import '../img/some_image.png';

// IMPORTS /////////////////////////////////////////////////////////////////////
import history from './history';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import Router from 'react-router';
import { Provider } from 'react-redux';

////////////////////////////////////////////////////////////////////////////////

const rootEl = document.getElementById('reactRoot');

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ history }>{ routes }</Router>
  </Provider>
), rootEl);