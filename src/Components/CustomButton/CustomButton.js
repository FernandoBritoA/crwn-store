import React from "react";
import "./CustomButton.scss";

import * as sc from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  //console.log('gluglu', isGoogleSignIn)
  return (
    //check whichbutton we want to render
    //isGoogleSignIn prop comes from any google button
    <sc.CustomButtonContainer className="custom-button" {...props}>
      {children}
    </sc.CustomButtonContainer>
  );
};
export default CustomButton;
