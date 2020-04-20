const INITIAL_STATE = {
  currentUser: null,
};

//if state is ever undefined, use default value
const userReducer = (state = INITIAL_STATE, action) => {
  //a reducer takes every action thats why we need a switch
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        //creates new object
        ...state,
        currentUser: action.payload,
        //"object spread" copies all properties from the original object (state),
        //into a NEW OBJECT, and includes the new value for our changed "currentUser" property
      };

    default:
      return state; //current state
  }
};

export default userReducer;
