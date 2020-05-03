import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import CheckoutPage from "./Pages/Checkout/Checkout";

import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";

import {
  auth,
  createUserProfileDocument,
  //!addCollectionAndDocuments,
} from "./Firebase/Firebase";

import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userActions";

import { selectCurrentUser } from "./Redux/User/userSelectors";
import { createStructuredSelector } from "reselect";

//!import { selectCollectionsForPreview } from "./Redux/Shop/shopSelectors";

//The return of the mapDispatchToProps function will be merged to your connected component as props.
//You may call them directly to dispatch its action. this.props.newProp()
class App extends React.Component {
  unsubscribeFromAuth = null; //property on our class

  //component mount on the dom
  componentDidMount() {
    //method from 'firebase/auth' to get user registered *open subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth); //get back userRef
          userRef.onSnapshot((snapShot) => {
            this.props.newProp({
              id: snapShot.id,
              ...snapShot.data(), //we spread the object with data
            });
          });
        } else {
          //user logs out
          this.props.newProp(userAuth); //null
        }
      },
      (error) => console.log(error)
    );
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

//inject newProp to App as a prop
const mapDispatchToProps = (dispatch) => ({
  newProp: (user) => dispatch(setCurrentUser(user)),
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
