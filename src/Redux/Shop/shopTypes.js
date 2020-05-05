/*const ShopActionTypes = {
  UPDATE_COLLECTIONS: "UPDATE_COLLECTIONS",
};*/

const ShopActionTypes = {
  //tells redux we are starting to fetch data, before any API call
  FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",

  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTION_SUCCESS",
  FETCH_COLLECTION_FAILURE: "FETCH_COLLECTION_FAILURE",
  //FAILURE: server is down, poor connection
};

export default ShopActionTypes;
