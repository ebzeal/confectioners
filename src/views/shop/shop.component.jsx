import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  console.log("TCL: ShopPage -> match", match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  );
};

export default ShopPage;
