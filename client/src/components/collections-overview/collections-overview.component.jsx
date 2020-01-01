import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectVendorForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ vendors }) => (
  <div className="collections-overview">
    {vendors.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateTopProps = createStructuredSelector({
  vendors: selectVendorForPreview
});

export default connect(mapStateTopProps)(CollectionsOverview);
