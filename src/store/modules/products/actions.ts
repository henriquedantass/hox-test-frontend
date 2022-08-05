import {
  CreateProductAPIDTO,
  ProductData,
  ProductsActions,
  ProductsAPIDTO,
} from "./types";

export function getProductsRequest() {
  return {
    type: ProductsActions.getProductsRequest,
    payload: {},
  };
}

export function getProductsSucess(response: ProductsAPIDTO) {
  return {
    type: ProductsActions.getProductsSuccess,
    payload: {
      response,
    },
  };
}

export function createProductRequest(productData: ProductData) {
  return {
    type: ProductsActions.createProductsRequest,
    payload: {
      productData,
    },
  };
}

export function createProductSuccess(response: CreateProductAPIDTO) {
  return {
    type: ProductsActions.createProductsSuccess,
    payload: {
      response,
    },
  };
}
