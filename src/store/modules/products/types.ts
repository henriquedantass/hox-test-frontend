import { AxiosResponse } from "axios";

export enum ProductsActions {
  getProductsRequest = "GET_PRODUCTS_REQUEST",
  getProductsSuccess = "GET_PRODUCTS_SUCCESS",
  getProductsFailure = "GET_PRODUCTS_FAILURE",
  createProductsRequest = "CREATE_PRODUCT_REQUEST",
  createProductsSuccess = "CREATE_PRODUCT_SUCCESS",
  createProductsFailure = "CREATE_PRODUCT_FAILURE",
}

export type ProductData = {
  id?: number;
  name: string;
  perishable: boolean;
  manufacturing_date: string;
  due_date: string;
  price: number;
};

export type ProductsState = {
  data: ProductData[];
  isLoaded: boolean;
};

export type ProductsAPIDTO = Promise<
  AxiosResponse<{
    data: ProductData[];
  }>
>;

export type CreateProductAPIDTO = Promise<
  AxiosResponse<{
    data: ProductData;
  }>
>;
