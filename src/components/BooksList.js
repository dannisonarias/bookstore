import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = (state) => {
    return state;
}

const BookList = (props) => {
    const { id, title, category } = props.books;
    return (
    <table>
        <Book id={id} title={title} category={category} />
    </table>
    )
};

export default connect(mapStateToProps)(BookList);