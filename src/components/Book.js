import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, handleRemove, filter,
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

  return null;
};

Book.defaultProps = {
  category: 'None',
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  handleRemove: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    filter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
