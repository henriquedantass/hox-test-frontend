import { ProductData, ProductsActions, ProductsAPIDTO } from "./types";

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
