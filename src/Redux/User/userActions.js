import userActionTypes from "./userTypes";

//actions = REPORTING THINGS THAT HAPPENED, NOT CAUSING SOMETHING TO HAPPEN
/*export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER, //report the facts
  payload: user, //the part of transmitted data that is the actual intended message
});*/
//!PERSISTANCE
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

//!SIGN UP
export const signUpStart = (userData) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userData,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

//!SIGN OUT
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

//!SIGN IN
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

//!as they do the same, we can reduce them to not repeat code
export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

/*export const emailSignInSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});
export const emailSignInFailure = (error) => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});
export const googleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});
export const googleSignInFailure = (error) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});*/
