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
            <p className="percentage m-0 ">64%</p>
            <p className="completed m-0 op-05">Completed</p>
          </div>
          <div className="vertical-line op-05"></div>
          <div>
            <p className="progress-title m-0 progress-update-text op-05">CURRENT CHAPTER</p>
            <p className="chapter m-0 progress-update-text">Chapter: 43</p>
            <button className="button-one button-two">UPDATE PROGRESS</button>
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
