const initialState = {
  1: {
    title: 'Book1',
    category: 'Sci-Fi',
  },
  2: {
    title: 'Book1',
    category: 'Sci-Fi',
  },
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK': {
      const newState = { ...state };
      const key = Object.keys(action.book);
      delete newState[key];
      return newState;
    }
    case 'ADD_BOOK': {
      const { id, category, title } = action.book;
      return { ...state, [id]: { category, title } };
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;