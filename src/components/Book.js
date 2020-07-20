import React from 'react';

const Book = (props) => {
    const {id, title, category} = props;
    return (
    <tr >
        <th>{id}</th>
        <th>{title}</th>
        <th>{category}</th>
    </tr>
    );
};

export default Book;