//Utility functions allow us to keep our files clean
//and organize functions that we may need in multiple files, in one location
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  ); //if condition is validated, it returns true

  if (existingCartItem) {
    //we need to return a new array, ergo map
    //this is to know which array item is being increased
    return cartItems.map(
      (item) =>
        item.id === cartItemToAdd.id //if it is already in the cart
          ? { ...item, quantity: item.quantity + 1 } //spread cart item, and add 1
          : { item } //else just add the whole item
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
  //if the item doesnt exist, create a new array,
  //spread rest of the items,
  //spread item to add, and set quantity to 1
};
