import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './App';

let reducer = ''

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider >
<App />
</Provider>

document.getElementById('root'));


