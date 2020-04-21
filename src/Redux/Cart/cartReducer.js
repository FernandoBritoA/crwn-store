import cartActionTypes from "./cartTypes";
import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        //show hide cart
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        //cart items = new array with old cart items + added payload
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload), //[...state.cartItems, action.payload],
      }; //(exixting cartItems, itemToAdd)
    default:
      return state;
  }
};

export default cartReducer;
