import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = ({ newToggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={newToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  newToggleCartHidden: () => dispatch(toggleCartHidden()),
  //function that triggers the dispatch of toggleCartHidden
}); //({}) -> returning an object

export default connect(null, mapDispatchToProps)(CartIcon);
