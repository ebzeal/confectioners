import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchVendorsStart } from "../../redux/shop/shop.action";

const ShopPage = ({ fetchVendorsFromStore, match }) => {
  useEffect(() => {
    fetchVendorsFromStore();
  }, [fetchVendorsFromStore]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:vendorId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchVendorsFromStore: () => dispatch(fetchVendorsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
