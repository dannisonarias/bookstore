import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const mapStateToProps = (state) => {
    return state;
};

const handleRemove = () => {
};

const BookList = (props) => {
    const {title, category } = props.bookReducer[145];
    return (
    <table>
        <Book id='1' title={title} category={category} />
    </table>
    )
};

export default connect(mapStateToProps)(BookList);