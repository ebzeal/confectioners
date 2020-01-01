import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { fetchVendorsStartAsync } from "../../redux/shop/shop.action";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsVendorFetching } from "../../redux/shop/shop.selectors";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class VendorPage extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchVendorsFromStore } = this.props;
    fetchVendorsFromStore();
  }

  render() {
    const { match, loading } = this.props;
    // console.log("TCL: VendorPage -> match", match);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}/:vendorId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchVendorsFromStore: () => dispatch(fetchVendorsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  loading: selectIsVendorFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(VendorPage);
