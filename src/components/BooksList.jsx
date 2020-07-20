import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import REMOVE_BOOK from '../actions/index';

const mapStateToProps = state => state.bookReducer;

const BookList = props => {
  const handleRemove = key => {
    const newbook = { [key]: props[key] };
    props.dispatch(REMOVE_BOOK(newbook));
  };

  const books = props;
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(books).map(key => <Book handleRemove={handleRemove} key={key} id={key} title={books[key].title} category={books[key].category} />)}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(BookList);
