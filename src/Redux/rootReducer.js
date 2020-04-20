import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";

//combine reducers, because store can only take one
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
