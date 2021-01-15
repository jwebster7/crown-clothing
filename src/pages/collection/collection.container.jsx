import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAreCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectAreCollectionsLoaded(state)
});

// this composes the collection page and removes the need to drill props through the shop component.
// using containers like this allows composition of each component and reduces unnecessary coupling.
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
