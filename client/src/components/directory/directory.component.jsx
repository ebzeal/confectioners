import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import SectionHeading from '../section-heading/section-heading';

import { selectDirectoryVendors } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ vendors, heading, sideLinks }) => (
  <>
    <SectionHeading heading={heading} sideLinks={sideLinks} linkedPage="vendors" />
    <div className="directory-menu">
      {vendors.slice(0,4).map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  vendors: selectDirectoryVendors
});

export default connect(mapStateToProps)(Directory);
