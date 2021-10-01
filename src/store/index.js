import { createStore, combineReducers, applyMiddleware } from "redux";
import moviesReducer from '../reducers/moviesReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middlewares = [thunk];
middlewares = [...middlewares, logger];


const store=createStore(combineReducers({
   movies:moviesReducer
}),
applyMiddleware(...middlewares));
export default store;