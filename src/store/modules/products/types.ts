import { AxiosResponse } from "axios";

export enum ProductsActions {
  getProductsRequest = "GET_PRODUCTS_REQUEST",
  getProductsSuccess = "GET_PRODUCTS_SUCCESS",
  createProductsRequest = "CREATE_PRODUCT_REQUEST",
  createProductsSuccess = "CREATE_PRODUCT_SUCCESS",
  deleteProductRequest = "DELETE_PRODUCT_REQUEST",
  deleteProductSuccess = "DELETE_PRODUCT_SUCCESS",
  editProductRequest = "EDIT_PRODUCT_REQUEST",
  editProductSuccess = "EDIT_PRODUCT_SUCCESS",
}

export type ProductData = {
  id: number;
  name: string;
  perishable: boolean;
  manufacturing_date: string;
  due_date: string;
  price: number;
};

export type ProductsState = {
  data: ProductData[];
  isLoaded: boolean;
  editSuccess: boolean;
};

export type GetProductsAPIDTO = Promise<
  AxiosResponse<{
    data: ProductData[];
  }>
>;

export type CreateProductAPIDTO = Promise<
  AxiosResponse<{
    data: ProductData;
  }>
>;

export type ProductAPIDTO = Promise<AxiosResponse>;
