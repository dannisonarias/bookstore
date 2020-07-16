import React from 'react';

const initialState = {
  id:'1',
  title:'Book1',
  category:'Sci-Fi',
}

//const INITIAL_STATE = () => {
//  
//  
//  
//};
//Math.random() * (max - min) + min;
const bookReducer = (state = initialState ,action)=>
{
    switch(action.type) {
      case 'REMOVE_BOOK': {
        state: console.log('removing');
        return state;
      }
      case 'ADD_BOOK': {
        state: console.log('Adding book')
        return state;
      }
      default: {
        return state;
      }
    }
    return state;
};
export default bookReducer;