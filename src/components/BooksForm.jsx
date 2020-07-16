import React from 'react';

const BOOKS_CATEGORY = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

function booksOption(e){
  return (<option>{e}</option>);
};

const BooksForm = () => {
  return (
    <form>
      <label>Title: </label>
      <input type="text" name="title" />
      <label>Category: </label>
       <select name="Category">
         {BOOKS_CATEGORY.map((x)=>booksOption(x))}
      </select>
      <input type="submit"/>
    </form>
  );
};

export default BooksForm;

