import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg"; //SVG syntax

import { auth } from "../../Firebase/Firebase";

import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/sport-store">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/sport-store/shop">
          SHOP
        </Link>
        <Link className="option" to="/sport-store/contact">
          CONTACT
        </Link>
        {currentUser ? ( //user state ==! null
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sport-store/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

//function that allows us to acces the state
//state being RootReducer
const mapStateToProps = (state) => ({
  //RootReducer has an object that points to userReducer
  //userReducer returns currentUser = action.payload or initial state,
  //depending if actions triggered to update the value
  currentUser: state.user.currentUser, //WILL BE CALLED WHENEVER STORE STATE CHANGES
}); //current user is now the null value, we can remove from app.js
//Your mapStateToProps functions are expected to return an object.
//This object, normally referred to as stateProps, will be merged as props to your connected component.

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