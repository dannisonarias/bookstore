import React from 'react';

const CategoryFilter = (props) => {
  const { filterCategory } = props
  const BOOKS_CATEGORY = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  
  const booksOption = (e, index) => {
    return (<option key={index}>{e}</option>);
  }

  return (
    <select onChange = {(event)=>filterCategory(event)} name="Category">
      {BOOKS_CATEGORY.map((x, index) => booksOption(x, index))}
    </select>
  );
};

export default CategoryFilter;