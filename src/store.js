import { createStore } from 'redux';

const initialState = {
  posts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
