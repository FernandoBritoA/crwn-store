import cartActionTypes from "./cartTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
//payload is an optional property

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
