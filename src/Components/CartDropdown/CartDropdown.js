import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";

import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";

import { selectCartItems } from "../../Redux/Cart/cartSelectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
        //we are mapping the CartItem component passing the state item array
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//destructure our state
const mapStateToProps = (/*{ cart: { cartItems } }*/ state) => ({
  //cartItems,
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
