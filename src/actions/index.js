const REMOVE_BOOK = book => ({ type: 'REMOVE_BOOK', book });
const ADD_BOOK = book => ({ type: 'ADD_BOOK', book });
const CHANGE_FILTER = category => ({type:'CHANGE_FILTER', category});

export {ADD_BOOK, REMOVE_BOOK, CHANGE_FILTER};
