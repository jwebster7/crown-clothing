import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// using the Container Pattern
// using higher-order components to compose components allows the decoupling of components.
// using containers like this allows composition of each component and reduces unnecessary coupling.
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
