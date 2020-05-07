import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";
import directoryReducer from "./Directory/directoryReducer";
import shopReducer from "./Shop/shopReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//actual localStorage on our window browser
//we also have session storage available

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //string names of the reducers we want to store
};
//!user is being handled by firebase auth

//combine reducers, because store can only take one
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
//return back modified version of rootReducer with
//persistConfig on top of them (persistance capabilities)
