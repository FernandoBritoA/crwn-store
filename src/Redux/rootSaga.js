import { all, call } from "redux-saga/effects";

import { userSagas } from "./User/userSagas";
import { cartSagas } from "./Cart/cartSagas";
import { shopSagas } from "./Shop/shopSagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
//yield all allows us to call any number of sagas inside the array
//and initialize them all on separate task streams
