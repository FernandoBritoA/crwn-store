import React from "react";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";

import { connect } from "react-redux";
import { updateCollections } from "../../Redux/Shop/shopActions";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../Firebase/Firebase";

import WithSpinner from "../../Components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//because in the app.js  the ShopPage component is nested in a route,
//it automatically has access to the 3 objects
class ShopPage extends React.Component {
  //under the hood invoke state for us
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections"); //collections we uploaded to the db

    /*fetch(//!fetch
      "https://firestore.googleapis.com/v1/projects/store-db-56444/databases/(default)/documents/collections"
    )
      .then((response) => response.json())
      .then((collections) => console.log(collections));*/
    /*collectionRef
      .get() //!PROMISE WAY
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      });*/
    //inside this snapshot object we see the 5 docs
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        {/*render is a method that takes a function, where the parameters in the function are 
          just the parameters that the component will recerive. (match, location, history in this case)*/}
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

//:categoryId -> allows us to acces this id as a parameter on the match object
//when we are inside our category page
//!params:{collectionId:"hats"}
//path: "/sport-store/shop/:collectionId"
//url: "/sport-store/shop/hats"
export default connect(null, mapDispatchToProps)(ShopPage);
