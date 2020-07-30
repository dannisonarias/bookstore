const initialState = {
  0: {
    'title': "Little red riding hood travels to Innsmouth",
    'category': "Kids"
  },
  1: {
    'title': "Calamar Recipes, with Brian",
    'category': "Learning"
  },
  3: {
    'title': "The life of Albert N. Wilmarth",
    'category': "Biography"
  }
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
