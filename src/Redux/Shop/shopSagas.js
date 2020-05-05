import { takeLatest, call, put, all } from "redux-saga/effects";
//check Redux backup file for explanation
import ShopActionTypes from "./shopTypes";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../Firebase/Firebase";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";
//////////////////////////////////////////////////////////////////////////////////

//we want to bring the fetchCollectionStartAsync from shopActions
//(check backup to see previous promise way)
export function* fetchCollectionsAsync() {
  //!THUNKS into SAGAS
  try {
    const collectionRef = firestore.collection("collections"); //collections we uploaded to the db
    const snapshot = yield collectionRef.get(); //vaalue comes back in a promise form that get resolved with the value of our collectionRef
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    //call: method that takes as first argument a function/method, the parameters you pass
    //because we yield the call, we differ control back to the saga middleware, in case cancel is needed
    //i.e. convertCollectionSnapshotToMap(snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap)); //'put' is SAGAS 'dispatch' keyword
  } catch (error) {
    put(fetchCollectionsFailure(error.message)); //dispatch
  }
}

//PAUSE whenever a especific action type comes in
export function* fetchCollectionsStart() {
  //we just want to call it once takeLatest()
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
//1. FETCH_COLLECTIONS_START action came in
//2. our saga fetchCollectionsStart() was listening to these action
//3. when heard the action, it fires our fetchCollectionsAsync() gfnc

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
