import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";

//PersistGate receives store and also fire actions that will rehidrate the state whenever our app refresh
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

/*Provider component will take the Redux store that you give it as a property 
and will put it into React's context API so that it can be available to any component
 rendered inside the <Provider> that needs access to the store. */
//it puts the store somewhere where child components can access it
