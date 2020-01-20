import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectVendor } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ vendor }) => {
  const { title, items, image, address, content } = vendor;
  return (
    <div className="collection-page ">
      <div className="vendor-detail">
      <div>
        <h2 className="title"> {title} </h2>
        <h3>{address || '11 Otigba St, Ikeja, Lagos'}</h3>
        <p>{content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu'}</p>
      </div>
      <img src={image || "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209528/confectioners/Vendors/P1010180__71599.1429012214_pjcoz9.webp"} />
     

      </div>

      <h2>Products</h2>

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
