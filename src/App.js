import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';

import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';

import { auth, createUserProfileDocument } from './Firebase/Firebase'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; //property on our class

  componentDidMount() { //component mount on the dom
    //method from 'firebase/auth' to get user registered *open subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {//async bc potential api request to firestore

      //if there was a document there
      if (userAuth) { //user auth exists, user signs out
        //if there is no user ref, we will create a new object in document
        const userRef = await createUserProfileDocument(userAuth); //get back userRef 

        //if snapShot is changed
        userRef.onSnapshot(snapShot => {
          //data that possibly stored or data of user already on data base
          //we need to combine; snapshot has the id created by google
          // snapshot.data() hasname, email, date
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() //we spread the object with data
            }
          })
          console.log(this.state);
        })
      } else { //user logs out
        this.setState({ currentUser: userAuth });//null
      }
      //this.setState({ currentUser: user });
      //console.log(user);
      //createUserProfileDocument(user); //query firestore user
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //close subscription when unmounting
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>{/*Loads the first matching path, nothing else*/}
          <Route exact path='/sport-store' component={Homepage} /> {/*If the path is exactlu '/', render component*/}
          <Route exact path='/sport-store/shop' component={ShopPage} />
          <Route exact path='/sport-store/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
