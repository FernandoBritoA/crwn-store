import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//!HOC
//function that takes a componet that we wanna wrap with the
//functionality of our spinning loading feature
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  //if the component is loading
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  ); //else, we pass through the props to the component we wrap and render it
};

export default WithSpinner;
