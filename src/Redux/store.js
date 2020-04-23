import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //log function
import rootReducer from "./rootReducer"; //Unnamed export

import { persistStore } from "redux-persist";
//allows browser to cache our store

const middleWares = []; //catch and log

//FOR LOGGING ONLY FOR DEVELOPMENT
//access enviroment variable
// when we npm build, it sets this variable to "production"
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));
//spread into individual items

const persistor = persistStore(store);
//persisted version of our store

export { store, persistor };
//object that gives both
