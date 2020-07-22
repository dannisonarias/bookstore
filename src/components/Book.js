import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, handleRemove, filter
  } = props;
  if (filter.filter === '' || filter.filter === category) {
    return (
      <tr>
        <th>{id}</th>
        <th>{title}</th>
        <th>{category}</th>
        <th><button type="button" onClick={() => { handleRemove(id); }}>remove</button></th>
      </tr>
    );
  }
  else {
    return null;
  }
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
