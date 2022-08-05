import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import {
  createProductRequest,
  createProductSuccess,
  getProductsSucess,
} from "./actions";
import { CreateProductAPIDTO, ProductsActions, ProductsAPIDTO } from "./types";

type CreateProductType = ReturnType<typeof createProductRequest>;

function* getProducts() {
  try {
    const response: ProductsAPIDTO = yield call(api.get, "/products");

    yield put(getProductsSucess(response));
  } catch {}
}

function* createProduct({ payload }: CreateProductType) {
  const { productData } = payload;

  try {
    const response: CreateProductAPIDTO = yield call(
      api.post,
      "/products",
      productData
    );

    console.log(response);

    yield put(createProductSuccess(response));
  } catch {}
}

export default all([
  takeLatest(ProductsActions.getProductsRequest, getProducts),
  takeLatest(ProductsActions.createProductsRequest, createProduct),
]);
