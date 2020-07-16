import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = state => state;

const handleRemove = () => {
};

const BookList = props => {
  const { title, category } = props.bookReducer[145];
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        <Book id="1" title={title} category={category} />
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(BookList);
