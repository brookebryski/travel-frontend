import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import tripFormData from './reducers/tripFormData'
import errors from './reducers/errors'
import tripsReducer from './reducers/tripsReducer'

import thunk from 'redux-thunk';
  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    loginForm,
    tripFormData,
    signupForm,
    errors,
    tripsReducer
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store