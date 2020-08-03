import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="">
    <header className="header d-flex d-flex-md-column">
      <h1 className="h1-header">Bookstore CMS</h1>
      <ul className="d-flex align-i-center">
        <li>
          BOOKS
        </li>
        <li className="op-05">
          CATEGORIES
        </li>
      </ul>
      <div class="user-icon d-flex justify-c-center align-i-center">
        <img src={require('../assets/user-icon.png')} alt="icon" />
      </div>
    </header>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
