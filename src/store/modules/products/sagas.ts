import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import { getProductsSucess } from "./actions";
import { ProductsActions, ProductsAPIDTO } from "./types";

function* getProducts() {
  try {
    const response: ProductsAPIDTO = yield call(api.get, "/products");

    yield put(getProductsSucess(response));
  } catch {}
}

export default all([
  takeLatest(ProductsActions.getProductsRequest, getProducts),
]);
