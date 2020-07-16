import React from 'react';

const BOOKS_CATEGORY = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BooksForm = () => {
  return (
    <form>
      <label>Title: </label>
      <input type="text" name="title" />
      <label>Category: </label>
      <select name="Category"></select>
      <input type="submit"/>
    </form>
  );
};

export default BooksForm;

