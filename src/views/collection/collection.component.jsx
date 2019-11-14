import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectVendor } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ vendor }) => {
  // console.log("TCL: CollectionPage -> vendor", vendor);
  const { title, items } = vendor;
  return (
    <div className="collection-page ">
      <h2 className="title"> {title} </h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  vendor: selectVendor(ownProps.match.params.vendorId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
