import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import { selectDirectoryVendors } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ vendors }) => (
  <div className="directory-menu">
    {vendors.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  vendors: selectDirectoryVendors
});

export default connect(mapStateToProps)(Directory);
