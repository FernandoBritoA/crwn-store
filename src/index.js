import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

/*Provider component will take the Redux store that you give it as a property 
and will put it into React's context API so that it can be available to any component
 rendered inside the <Provider> that needs access to the store. */
//it puts the store somewhere where child components can access it
