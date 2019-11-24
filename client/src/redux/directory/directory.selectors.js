import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectoryVendors = createSelector(
  selectDirectory,
  directory => directory.vendors
);
