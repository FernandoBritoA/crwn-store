//import SHOP_DATA from "./ShopData";

import ShopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  collections: null, //SHOP_DATA,
  isFetching: false, //wheter or not we are fetching data from collection
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false, //done fetching, update collections now
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    /*case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };*/
    default:
      return state;
  }
};

export default shopReducer;
