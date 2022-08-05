import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "../../../services/api";
import {
  createProductRequest,
  createProductSuccess,
  deleteProductRequest,
  deleteProductSuccess,
  getProductsSucess,
} from "./actions";
import {
  CreateProductAPIDTO,
  DeleteProductAPIDTO,
  ProductsActions,
  ProductsAPIDTO,
} from "./types";

type CreateProductType = ReturnType<typeof createProductRequest>;

type DeleteProductType = ReturnType<typeof deleteProductRequest>;

function* getProducts() {
  try {
    const response: ProductsAPIDTO = yield call(api.get, "/products");

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

export default all([
  takeLatest(ProductsActions.getProductsRequest, getProducts),
  takeLatest(ProductsActions.createProductsRequest, createProduct),
  takeLatest(ProductsActions.deleteProductRequest, deleteProduct),
]);
