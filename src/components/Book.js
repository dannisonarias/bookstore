import React from 'react';

const Book = (props) => {
    const { key, title, category } = props;
    return (
    <tr key = {key}>
        <th>{key}</th>
        <th>{title}</th>
        <th>{category}</th>
    </tr>
    );
};

export default Book;