import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";

import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";

import { selectCartItems } from "../../Redux/Cart/cartSelectors";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../Redux/Cart/cartActions";

//DISPATCH connect passes dispatch as props if we dont supply a second argument to connect
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        //check if there are items
        cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />) //we are mapping the CartItem component passing the state item array
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden()); //!DISPATCH ACTION SHORTHAND
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
//destructure our state
/*const mapStateToProps = ({ cart: { cartItems } } state) => ({
  //cartItems,
  cartItems: selectCartItems(state),
});*/

export default withRouter(connect(mapStateToProps)(CartDropdown));
//High Order Components return components, and also take components as argument
//we take the component that got returned from the connect call as its component argument
//order matters, withRouter passes the match, history and location objects into
//the component that is being wrapped
