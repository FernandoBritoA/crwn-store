import userActionTypes from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

//if state is ever undefined, use default value
const userReducer = (state = INITIAL_STATE, action) => {
  //a reducer takes every action thats why we need a switch
  switch (action.type) {
    //we can put two cases that do the same return state
    case userActionTypes.SIGN_IN_SUCCESS:
      //case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null, //clear the error in success case
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      //case userActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state; //current state
  }
};

export default userReducer;
