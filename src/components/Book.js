import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, handleRemove,
  } = props;

  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{(category === '' ? 'None' : category)}</th>
      <th><button type="button" onClick={() => { handleRemove(id); }}>remove</button></th>
    </tr>
  );
};

Book.defaultProps = {
  category: 'None',
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
