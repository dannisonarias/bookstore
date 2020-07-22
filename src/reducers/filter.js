const initialState = {
  filter: '',
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return action.category;
    }
    default: {
      return state.filter;
    }
  }
  return state;
};

export default filterReducer;
