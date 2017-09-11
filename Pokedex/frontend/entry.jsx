import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';
import Pokedex from './components/Pokedex';

const store = createStore(rootReducer);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Pokedex store={store}/>, document.getElementById('root'));
});
