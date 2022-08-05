import {
  CreateProductAPIDTO,
  GetProductsAPIDTO,
  ProductAPIDTO,
  ProductData,
  ProductsActions,
} from "./types";

export function getProductsRequest() {
  return {
    type: ProductsActions.getProductsRequest,
    payload: {},
  };
}

export function getProductsSucess(response: GetProductsAPIDTO) {
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

export function editProductRequest(productData: ProductData) {
  return {
    type: ProductsActions.editProductRequest,
    payload: {
      productData,
    },
  };
}

export function editProductSuccess(response: CreateProductAPIDTO) {
  return {
    type: ProductsActions.editProductSuccess,
    payload: {
      response,
    },
  };
}

export function deleteProductRequest(productId: number) {
  return {
    type: ProductsActions.deleteProductRequest,
    payload: {
      productId,
    },
  };
}

export function deleteProductSuccess(productId: number) {
  return {
    type: ProductsActions.deleteProductSuccess,
    payload: {
      productId,
    },
  };
}
