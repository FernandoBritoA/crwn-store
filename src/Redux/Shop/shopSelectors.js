import { createSelector } from "reselect";

//we dont need this ID_MAP anymore
/*const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
  //use string as dinamic value to get id
};*/

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    //if collections doesnt exist return empty array
    collections ? Object.keys(collections).map((key) => collections[key]) : []
  //Object.key gets us all the keys fro the object and gives is in an array format
  //then we map our keys and return our collections at that key value
  //will give us an array of items we are trying to get
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null)
    //instead of the collections.find
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
  //*  !! -> return boolean value
  //if collection is loaded we get true, otherwise we get false (null collection value)
);

//DATA NORMALIZATION... changing tht array to an object
//storing lists of data in objects instead of arrays
//its faster because it only look for the corresponding property
//instead of looping through all the array

/*//collectionUrlParam = hats, sneakers. jackets, mens, womens
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections], //
    (
      collections //we get collections array
    ) =>
      collections.find(
        //find on that array
        (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      ) //we match the correct id with the COLLECTION_ID_MAP using the string parameter value that we get from url
    //find where the collection.id is equal to the collectionUrlParam mapped
  );*/
