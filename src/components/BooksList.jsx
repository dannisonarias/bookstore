import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import { REMOVE_BOOK } from '../actions/index';
import { CHANGE_FILTER } from '../actions/index';

const mapStateToProps = state => state;

const BookList = props => {
  const handleRemove = key => {
    const newbook = { [key]: props[key] };
    props.dispatch(REMOVE_BOOK(newbook));
  };

  const filterCategory = category => {
    console.log(props);
    props.dispatch(CHANGE_FILTER(category))
  };

  const books = props.bookReducer;
  const filter = props.filterReducer;
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
          <th><CategoryFilter filterCategory={filterCategory} filter={filter}/></th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(books).map(key => <Book handleRemove={handleRemove} key={key} id={key} title={books[key].title} category={books[key].category} />)}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(BookList);
