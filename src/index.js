import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import tripReducer from './reducers/tripReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(tripReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <Router> 
    <App />
  </Router>
</Provider>,

document.getElementById('root'));


