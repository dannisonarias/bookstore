import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = state => state.bookReducer;

const handleRemove = () => {
};
const BookList = props => {
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
        {Object.keys(books).map(key => <Book key={key} id={key} title={books[key].title} category={books[key].category} />)}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(BookList);
