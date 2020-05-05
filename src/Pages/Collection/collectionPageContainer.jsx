import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../Redux/Shop/shopSelectors";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";
import CollectionPage from "./Collection";

//! + Info in collectionOverviewContainer
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
  //the point of padding the function is to reverse its value
  //we pass the function that gets the state into our selector
  //switched bc reverse boolean logic
});

//!both the same
/*const mapStateToProps2 = (state) => ({
  isLoading: ((state) => !selectIsCollectionsLoaded(state))(state),
});*/
//state = store
//we simply invert what is returned from selectIsCollectionsLoaded(state)
// !selectIsCollectionsLoaded wouldnt work beacuse it is just a function declaration,
//you need create structured selector to run it
/*function abc ()={}
  !abc = false
  false(state) gives error */

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
