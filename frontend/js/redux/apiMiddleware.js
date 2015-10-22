'use strict';
// IMPORTS /////////////////////////////////////////////////////////////////////
import C from '../c';
////////////////////////////////////////////////////////////////////////////////

const parseJSON = (response) => {
  return response.json();
};

// https://rackt.github.io/redux/docs/advanced/Middleware.html
// Can be written as: const apiMiddleware = store => next => action => {
const apiMiddleware = (store) => {
  return (next) => {
    return (action) => {

      if (action[C.API_MIDDLEWARE]) {

        const errorHandler = (error) => {
          console.error('apiMiddleware failed', error.message, error.stack);
          const finalAction = Object.assign({}, action, {
            type: errorType,
            error,
          });
          delete finalAction[C.API_MIDDLEWARE];
          return next(finalAction);
        };

        const fetchHref = (href) => {
          return fetch(href);
        };

        const { href, phases } = action[C.API_MIDDLEWARE];
        const [ beginType, successType, errorType ] = phases;

        // Dispatch begin phase.
        next(Object.assign({}, action, {
          type: beginType
        }));

        if (Array.isArray(href)) {

          // Multi fetch.
          return Promise.all(href.map(fetchHref))
          .then((responseArray) => {
            return Promise.all(responseArray.map(parseJSON));
          })
          .then((jsonArray) => {
            const finalAction = Object.assign({}, action, {
              json: jsonArray,
              type: successType
            });
            delete finalAction[C.API_MIDDLEWARE];
            return next(finalAction);
          })
          .catch(errorHandler);

        } else {

          // Single fetch.
          return fetchHref(href)
          .then(parseJSON)
          .then((json) => {
            const finalAction = Object.assign({}, action, {
              json,
              type: successType,
            });
            delete finalAction[C.API_MIDDLEWARE];
            return next(finalAction);
          })
          .catch(errorHandler);

        }
      } else {
        return next(action);
      }
    }
  }
};

// EXPORTS /////////////////////////////////////////////////////////////////////
export default apiMiddleware;