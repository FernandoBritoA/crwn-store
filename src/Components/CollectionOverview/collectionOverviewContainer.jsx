import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../Redux/Shop/shopSelectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";

//!Containers dont render anything.
//!They just pass props down to components
//second level wrapper;
//wraps collection overview with spinner,
//which wraps collection overview

//we want this container to get the isLoading, isFetching,
//there is no need on them to be on the ShopPage just
//to pass them through
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  //isFetching true or false?
  //isLoading is what WithSpinner is expecting as prop
  //!isLoading={isCollectionFetching} <--
});

//!With compose
//Currying our functions together
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionOverviewContainer;

/*const CollectionOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview) //double wrap member?
);*/
