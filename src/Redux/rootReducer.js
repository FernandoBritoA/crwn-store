import { combineReducers } from "redux";
import userReducer from "./User/userReducer";

//combine reducers, because store can only take one
export default combineReducers({
  user: userReducer,
});
