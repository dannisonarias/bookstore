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
  
  switch (action.type) {
    case 'REMOVE_BOOK': {
      return (delete Object.assign(state)[action.item]);
    }
    case 'ADD_BOOK': {
      const { id, category, title } = action.book;
      const newBook = Object.assign(state);
      newBook[id] = { title, category };
      return newBook;
    }
    default: {
      return state;
    }
  }
  return state;
};
export default bookReducer;
