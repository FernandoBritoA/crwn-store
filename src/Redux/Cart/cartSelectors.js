//npm i reselect
import { createSelector } from "reselect";

//two types of selector (input and output)

//input selecctor
const selectCart = (state) => state.cart;
//takes the whole state and just returns a slice

//output selector
export const selectCartItems = createSelector(
  [selectCart], //array of input selectors
  (cart) => cart.cartItems //function that returns the value we want from this selector
);
//createSelector() = memoized selector

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems], // total quantity
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
