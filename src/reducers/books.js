import React from 'react';

const initialState = {
  books: {
    {
      id:'1',
      title:'Book1',
      category:'Sci-Fi',
    },
    {
      id:'2',
      title:'Book1',
      category:'Sci-Fi',
    },
    {
      id:'3',
      title:'Book1',
      category:'Sci-Fi',
    }
  }
}

//ath.random() * (max - min) + min;

const bookReducer = ( state = initialState ,action)=>
{
    switch(action.type) {
      case 'REMOVE_BOOK': {
        state: console.log('removing');
      }
      case 'ADD_BOOK': {
        state: console.log('Adding book')
      }
      default: {
        return state;
      }
    }
    return state;
};
export default bookReducer;