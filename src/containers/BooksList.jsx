import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

import CategoryFilter from '../components/CategoryFilter';
import { REMOVE_BOOK } from '../actions/index';
import { CHANGE_FILTER } from '../actions/index';

const mapStateToProps = state => state;

const BookList = props => {
  const handleRemove = key => {
    const newbook = { [key]: props[key] };
    props.dispatch(REMOVE_BOOK(newbook));
  };

  const filterCategory = event => {
    let aux = {filter: event.target.value}
    if (aux.filter === 'ALL' || filter === 'Category') {
      aux = {filter: ''};
    }
    props.dispatch(CHANGE_FILTER(aux))
  };

  const books = props.bookReducer;
  const filter = props.filterReducer;
  return (
    <table  className="books-container">
      <thead className="d-flex">
        <tr className="d-flex">
          <th className="margin-r-1"><h2 class="op-05">Filter Category </h2></th>
          <th><CategoryFilter filterCategory={filterCategory} filter={filter}/></th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(books).map(key => <Book handleRemove={handleRemove} filter={filter} key={key} id={key} title={books[key].title} category={books[key].category} />)}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(BookList);
