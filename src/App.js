import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>{/*Loads the first matching path, nothing else*/}
        <Route exact path='/sport-store' component={Homepage} /> {/*If the path is exactlu '/', render component*/}
        <Route exact path='/sport-store/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
