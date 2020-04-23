import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;
//takes the whole state and just returns a slice

export const selectDirectorySections = createSelector(
  [selectDirectory], //array of input selectors
  (directory) => directory.sections //function that returns the value we want from this selector
);
