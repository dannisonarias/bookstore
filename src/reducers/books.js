const initialState = {
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
