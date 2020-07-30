import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="">
    <header className="header d-flex">
      <h1 className="h1-header">Bookstore CSM</h1>
      <ul className="d-flex align-i-center">
        <li>
          BOOKS
        </li>
        <li className="op-05">
          CATEGORIES
        </li>
      </ul>
    </header>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
