//actions = REPORTING THINGS THAT HAPPENED, NOT CAUSING SOMETHING TO HAPPEN
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER", //report the facts
  payload: user, //the part of transmitted data that is the actual intended message
});
