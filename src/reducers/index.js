import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  filterReducer,
  bookReducer,
});

export default rootReducer;
