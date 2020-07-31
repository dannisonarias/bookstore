import React from 'react';
import { connect } from 'react-redux';
import { ADD_BOOK } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '' };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  booksOption(e, index) {
    return (<option className="option" key={index}>{e}</option>);
  }

  idCreator() { return (Date.now()); }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }

  createBook() {
    const book = Object.assign(this.state);
    book.id = this.idCreator();
    return book;
  }

  handleSubmit(event) {
    event.preventDefault();
    const book = this.createBook();
    this.props.dispatch(ADD_BOOK(book));
  }

  render() {
    const BOOKS_CATEGORY = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form className="">
        <h2>ADD NEW BOOK</h2>
        <input className="input-general name-input border-inputs " onChange={this.handleChange} value={this.state.title} type="text" name="title" placeholder="Book Name"/>
        <div className="arrow select-input">
          <select className="input-general border-inputs select-input" onChange={this.handleChangeCategory} value={this.state.category} name="Category" placeholder="Category" >
            <option className="option color-light" disable selected>Category</option>
            {BOOKS_CATEGORY.map((x, index) => this.booksOption(x, index))}
          </select>
        </div>
        <input className="button-one" onClick={this.handleSubmit} type="submit" value="ADD BOOK"/>
      </form>
    );
  }
}

export default connect()(BooksForm);
