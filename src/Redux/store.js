import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //log function
import rootReducer from "./rootReducer"; //Unnamed export

import { persistStore } from "redux-persist";
//allows browser to cache our store

const middleWares = [logger]; //catch and log

const store = createStore(rootReducer, applyMiddleware(...middleWares));
//spread into individual items

const persistor = persistStore(store);
//persisted version of our store

export { store, persistor };
//object that gives both
