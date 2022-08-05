import { Reducer } from "redux";
import { ProductsActions, ProductsState } from "./types";

const initialState = {
  data: [],
  isLoaded: false,
} as ProductsState;

const products: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActions.getProductsSuccess: {
      const { response } = action.payload;

      return {
        data: response.data,
        isLoaded: true,
      };
    }

    case ProductsActions.createProductsSuccess: {
      const { response } = action.payload;

      return {
        ...state,
        data: [...state.data, response.data],
      };
    }

    default: {
      return state;
    }
  }
};

export default products;
