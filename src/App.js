import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUp from './Pages/SignInSignUp/SignInSignUp';

import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';

import { auth } from './Firebase/Firebase'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
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
