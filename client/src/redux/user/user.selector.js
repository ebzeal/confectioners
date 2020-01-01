import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser], // the array is used for multiple selectors e.g [selectUser, selectCart], if just one selector, you do not need the square brackets
  user => user.currentUser
);

export const selectUserStatus = createSelector(
  [selectUser],
  user => user.loading
);
