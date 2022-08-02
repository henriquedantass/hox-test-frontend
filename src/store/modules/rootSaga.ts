import { all } from "redux-saga/effects";

import user from "./user/sagas";
import products from "./products/sagas";

export default function* rootSaga() {
  return yield all([user, products]);
}
