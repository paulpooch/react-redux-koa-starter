# react-redux-koa-start

## Installation:

1. Install node 4.x (ES6 generators required by koa).

2. `npm install -g webpack`

3. `npm install`

4. `node backend/server.js`

5. Open `http://localhost:9999` 

## References:

The `frontend/jsredux/actions` folder contains 
[ducks](https://github.com/erikras/ducks-modular-redux)
as proposed by Erik Rasmussen.

A "duck" is a file containing a set of { actionTypes, actions, reducer } specific to one piece of the store (global app state).
 
JSX components should adhere to the 
[Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react#ordering).