import ShopActionTypes from "./shopTypes";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../Firebase/Firebase";

/*export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});*/

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
}); //switch reducers 'isFetching' state

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
}); //get our collections map

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
}); //ERROR

//actual function we pass to our components to begin process
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    //const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections"); //collections we uploaded to the db
    dispatch(fetchCollectionsStart());
    //*switch our reducer state 'isFetching' to true
    //*then, begin the async request down

    collectionRef
      .get() //!PROMISE WAY
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        //*request succeeded, now dispatch the collection
        /*updateCollections(collectionsMap);
        this.setState({ loading: false });*/
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
    //inside this snapshot object we see the 5 docs
  };
};
//!THUNK: function that returns a function that gets acces to dispatch
//!Dispatch multiple actions and handle async code inside of it
//!Reusable action
//!If redus-thunk middleware is enabled, any time you attempt to
//!dispatch a function instead of an object, the middleware will
//!call that function with dispatch method itself as the first argument
