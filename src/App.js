import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import CheckoutPage from "./Pages/Checkout/Checkout";

import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";

import { connect } from "react-redux";

import { selectCurrentUser } from "./Redux/User/userSelectors";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./Redux/User/userActions";
//!import { selectCollectionsForPreview } from "./Redux/Shop/shopSelectors";

//The return of the mapDispatchToProps function will be merged to your connected component as props.
//You may call them directly to dispatch its action. this.props.newProp()
class App extends React.Component {
  unsubscribeFromAuth = null; //property on our class

  //component mount on the dom
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //close subscription when unmounting
  }

  render() {
    return (
      <div>
        {/*we dont need this.state.currentUser bc redux*/}
        <Header />
        <Switch>
          {/*Loads the first matching path, nothing else*/}
          <Route exact path="/" component={Homepage} />{" "}
          {/*If the path is exactlu '/', render component*/}
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={
              () =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              //render allows javascript; if user logged=true,
              //redirect to homepage
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //!collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
//null because we dont need state props from our reducer
//we dont use the first argument mapStateToProps

//* userActions.js --> gets "user" as payload.
//* userReducer.js --> receives action case "SET_CURRENT_USER", which creates a new object with
//                     all the properties from the initial state, where "currentUser" is now
//                     the action.payload a.k.a.the dispatched "user" object.
//* rootReducer.js --> "user" is now the dispatched "user" object
//* store.js --> updates the state with the combined reducers (at the moment only userReducer)
