import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'


import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.component";
import CollectionPageContainer from "../collection/collection.component";
import { fetchVendorsStartAsync } from "../../redux/shop/shop.action";


class ShopPage extends Component {
  componentDidMount() {

    // collectionRef.onSnapshot(async snapshot => {
    //   const vendorsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateVendors(vendorsMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
    // The above code was changed to a promise based format using redux thunk
    const { fetchVendorsFromStore } = this.props;
    console.log("TCL: ShopPage -> componentDidMount -> props", this.props)
    fetchVendorsFromStore()
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          Component={CollectionsOverviewContainer}  
        }
        />
        <Route
          exact
          path={`${match.path}/:vendorId`}
          // render={props => (
          //   <CollectionPageWithSpinner isLoading={!vendorsLoaded} {...props} />
          // )   
          // }
          Component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchVendorsFromStore: () => dispatch(fetchVendorsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
