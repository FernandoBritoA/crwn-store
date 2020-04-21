import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./CartIcon.scss";

import { selectCartItemsCount } from "../../Redux/Cart/cartSelectors";

const CartIcon = ({ newToggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={newToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  newToggleCartHidden: () => dispatch(toggleCartHidden()),
  //function that triggers the dispatch of toggleCartHidden
}); //({}) -> returning an object

//selector; we are getting cart, then cart items, then reducing them to show total
//gets called anytime state changes, i.e. user log in
const mapStateToProps = (/*{ cart: { cartItems } }*/ state) => ({
  itemCount: selectCartItemsCount(state), //cartSelector function memoized selector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
