// IMPORTS /////////////////////////////////////////////////////////////////////
import C from '../../c';

// STATE ///////////////////////////////////////////////////////////////////////
const initialState = {
  count: 0,
  posts: [],
};

// ACTIONS /////////////////////////////////////////////////////////////////////
const EXAMPLE_AJAX_BEGIN = 'EXAMPLE_AJAX_BEGIN';
const EXAMPLE_AJAX_SUCCESS = 'EXAMPLE_AJAX_SUCCESS';
const EXAMPLE_AJAX_FAIL = 'EXAMPLE_AJAX_FAIL';

export const exampleAjaxAction = () => {
  return {
    [C.API_MIDDLEWARE]: {
      phases: [EXAMPLE_AJAX_BEGIN, EXAMPLE_AJAX_SUCCESS, EXAMPLE_AJAX_FAIL],
      href: 'http://jsonplaceholder.typicode.com/posts',
    },
  };
};

const EXAMPLE_INCREMENT = 'EXAMPLE_INCREMENT';

export const exampleIncrementAction = (byHowMany) => {
  return {
    type: EXAMPLE_INCREMENT,
    byHowMany,
  };
};

// REDUCER /////////////////////////////////////////////////////////////////////
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case EXAMPLE_INCREMENT:
      const { count } = state;
      return {
        ...state,
        count: count + (action.byHowMany || 1),
      };

    case EXAMPLE_AJAX_SUCCESS:
      const { json } = action;
      return {
        ...state,
        posts: json,
      };

    default:
      return state;
  }
};

// EXPORTS /////////////////////////////////////////////////////////////////////
export default reducer;