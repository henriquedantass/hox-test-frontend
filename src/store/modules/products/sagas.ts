import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import {
  createProductRequest,
  createProductSuccess,
  deleteProductRequest,
  deleteProductSuccess,
  editProductRequest,
  editProductSuccess,
  getProductsSucess,
} from "./actions";

import {
  CreateProductAPIDTO,
  GetProductsAPIDTO,
  ProductsActions,
} from "./types";

type CreateProductType = ReturnType<typeof createProductRequest>;

type DeleteProductType = ReturnType<typeof deleteProductRequest>;

type EditProductType = ReturnType<typeof editProductRequest>;

function* getProducts() {
  try {
    const response: GetProductsAPIDTO = yield call(api.get, "/products");

    yield put(getProductsSucess(response));
  } catch {
    console.log("error");
  }
}

function* createProduct({ payload }: CreateProductType) {
  const { productData } = payload;

  try {
    const response: CreateProductAPIDTO = yield call(
      api.post,
      "/products",
      productData
    );

    yield put(createProductSuccess(response));
  } catch {
    console.log("error");
  }
}

function* deleteProduct({ payload }: DeleteProductType) {
  const { productId } = payload;

  try {
    yield call(api.delete, `/products/${productId}`);
    yield put(deleteProductSuccess(productId));
  } catch {
    console.log("error");
  }
}

function* editProduct({ payload }: EditProductType) {
  const { productData } = payload;

  try {
    const response: CreateProductAPIDTO = yield call(
      api.put,
      `/products/${productData.id}`,
      productData
    );

    yield put(editProductSuccess(response));
  } catch {
    console.log("error");
  }
}

export default all([
  takeLatest(ProductsActions.getProductsRequest, getProducts),
  takeLatest(ProductsActions.createProductsRequest, createProduct),
  takeLatest(ProductsActions.deleteProductRequest, deleteProduct),
  takeLatest(ProductsActions.editProductRequest, editProduct),
]);
