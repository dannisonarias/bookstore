import React from 'react';

const initialState = {
  123: {
    title: 'Book1',
    category: 'Sci-Fi',
  },
  145: {
    title: 'Book1',
    category: 'Sci-Fi',
  },
};

const bookReducer = (state = initialState, action) => {
  console.log(Object.assign(state));
  switch (action.type) {
    case 'REMOVE_BOOK': {
      return (delete Object.assign(state)[action.item]);
    }
    case 'ADD_BOOK': {
      return (Object.assign(state));
    }
    default: {
      return state;
    }
  }
  return state;
};
export default bookReducer;
