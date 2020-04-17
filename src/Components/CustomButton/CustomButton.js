import React from 'react';
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    //console.log('gluglu', isGoogleSignIn)
    return ( //check whichbutton we want to render
        //isGoogleSignIn prop comes from any google button
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;