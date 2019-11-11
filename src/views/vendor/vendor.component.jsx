import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";

const VendorPage = ({ match }) => {
  console.log("TCL: VendorPage -> match", match);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}/:vendorId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default VendorPage;
