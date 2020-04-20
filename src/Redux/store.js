import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //log function
import rootReducer from "./rootReducer"; //Unnamed export

const middleWares = [logger]; //catch and log

const store = createStore(rootReducer, applyMiddleware(...middleWares));
//spread into individual items

export default store;
