import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsVendorFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVendorFetching
})
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))  same with using compose as above

export default CollectionsOverviewContainer;
