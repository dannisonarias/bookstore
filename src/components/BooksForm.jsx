import React from 'react';
import { connect } from 'react-redux';
import ADD_BOOK from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '' };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  booksOption(e, index) {
    return (<option key={index}>{e}</option>);
  }

  idCreator() { return (Math.floor(Math.random() * 100) * Date.now()); }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const book = Object.assign(this.state);
    book.id = this.idCreator();
    this.props.dispatch(ADD_BOOK(book));
  }

  render() {
    const BOOKS_CATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <label>Title: </label>
        <input onChange={this.handleChange} value={this.state.title} type="text" name="title" />
        <label>Category: </label>
        <select onChange={this.handleChangeCategory} value={this.state.category} name="Category">
          {BOOKS_CATEGORY.map((x,index) => this.booksOption(x, index))}
        </select>
        <input onClick={this.handleSubmit} type="submit" />
      </form>
    );
  }
}

export default connect()(BooksForm);
