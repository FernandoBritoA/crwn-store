import React from "react";
import "./Header.scss";
//import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg"; //SVG syntax

import { auth } from "../../Firebase/Firebase";

import { connect } from "react-redux";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/Cart/cartSelectors";
import { selectCurrentUser } from "../../Redux/User/userSelectors";

/*import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  //OptionDiv,
  OptionLink,
} from "./header.styles";*/
import * as sc from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <sc.HeaderContainer>
      <sc.LogoContainer to="/">
        <Logo className="logo"></Logo>
      </sc.LogoContainer>
      <sc.OptionsContainer>
        <sc.OptionLink to="/shop">SHOP</sc.OptionLink>
        <sc.OptionLink to="/contact">CONTACT</sc.OptionLink>
        {currentUser ? ( //user state ==! null
          <sc.OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </sc.OptionLink>
        ) : (
          <sc.OptionLink to="/signin">SIGN IN</sc.OptionLink>
        )}
        <CartIcon />
      </sc.OptionsContainer>
      {
        hidden ? null : <CartDropdown /> //hide show
      }
    </sc.HeaderContainer>
  );
};

//more efficient way to do it, comparing it to the way we did it in the CartIcon component
const mapStateToProps = createStructuredSelector({
  //instead of passing it as a function
  //automaticallly pass our top level state into
  //each subsequent selector
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/*
//function that allows us to acces the state
//state being RootReducer
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  //RootReducer has an object that points to userReducer
  //userReducer returns currentUser = action.payload or initial state,
  //depending if actions triggered to update the value
  currentUser, //: state.user.currentUser, //WILL BE CALLED WHENEVER STORE STATE CHANGES
  hidden, //advanced nested destructuring
}); //current user is now the null value, we can remove from app.js
//Your mapStateToProps functions are expected to return an object.
//This object, normally referred to as stateProps, will be merged as props to your connected component.
*/
//get properties from our reducers
//CONNECT  lets you connect relevant state that your component may need from the store
//and handles re-rendering the component if any of that "connected state" changes.

export default connect(mapStateToProps)(Header);

// here we call `connect` and pass it our mapStateToProps function
// which in turn returns a function.
//const ourWrapperFunction = connect(mapStateToProps)

// now we pass our component to this new function which
// will return a connected component that can now be
// used by other components.
//export default ourWrapperFunction(Header)

// instead of doing this in two steps, we can pass our
// component to the function returned by `connect` without
// needing to assign it to a variable first.
//export default connect(mapStateToProps)(Header)
