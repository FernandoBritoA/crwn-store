import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  /*multiple can be passed as aarguments in succesive order or as an array
    selectUser,
    selectCart ... || [selectUser, selectCart]
    (user, cart)=>
     */
  [selectUser],
  (user) => user.currentUser
);
