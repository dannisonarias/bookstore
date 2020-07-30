import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, handleRemove, filter,
  } = props;
  if (filter.filter === '' || filter.filter === category) {
    return (
      <tr className="card d-flex justify-c-between">
        <div className="d-flex flex-column justify-c-center align-i-start">
          <th className="category op-05 ">{category}</th>
          <th className="title">{title}</th>
          <th className="author">H.P Lovecraft</th>
          <th className="remove">
            <button className="button-card author" type="button" onClick={() => { handleRemove(id); }}>Comment</button><span class="op-05">&nbsp;|&nbsp;</span>
            <button className="button-card author" type="button" onClick={() => { handleRemove(id); }}>Remove</button>
            <span class="op-05">&nbsp;|&nbsp;</span>
            <button className="button-card author" type="button" onClick={() => { handleRemove(id); }}>Edit</button>
          </th>
        </div>
        <div className="d-flex justify-c-center align-i-center">
          <div className="completition-bar" >
          </div>
          <div>
            <p class="percentage m-0 ">64%</p>
            <p class="completed m-0 op-05">Completed</p>
          </div>
        </div>
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
