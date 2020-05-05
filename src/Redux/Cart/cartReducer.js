import cartActionTypes from "./cartTypes";
import { addItemToCart } from "./cartUtils";
import { removeItemFromCart } from "./cartUtils";

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
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
        //keep items that dont match the selected item for deleting
        //erase the ones that match
        //filter returns the ones thar return true to condition
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        //(complete cartItems array, item payloaded)
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
