import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsVendorLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionsPage from './collection.component'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsVendorLoaded(state)
})

// const CollectionsPageContainer = connect(mapStateToProps)(WithSpinner(CollectionsPage));

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage)

export default CollectionsPageContainer
