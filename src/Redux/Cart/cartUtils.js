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
      (item) => {
        //console.log("item", item);
        //console.log("...item", ...item);
        return item.id === cartItemToAdd.id //if it is already in the cart
          ? { ...item, quantity: item.quantity + 1 } //spread cart item, and add 1
          : item; //or {...item}
      } //else just add the whole item
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
  //if the item doesnt exist, create a new array,
  //spread rest of the items,
  //spread item to add, and set quantity to 1
};

/////////////////////////////////////////////////////
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  ); //if in the cartItems array one item is equal  to the cartItemToRemove
  //return that item

  if (existingCartItem.quantity === 1) {
    //if that item quantity is 1
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    //return all the items, except the one that matches the cartItemToRemove
  } else {
    //if this action is allowed, there must be items
    return cartItems.map(
      //if mapped item is equal to the item to remove
      (cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? //that item returns a new array with previous spreaded
            //...cartItem properties, but reducing the quantity by one
            { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem //keep the item the exact same
    );
  }
};
