import { Reducer } from "redux";
import { ProductsActions, ProductsState } from "./types";

const initialState = {
  data: [],
  isLoaded: false,
  editSuccess: false,
} as ProductsState;

const products: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActions.getProductsSuccess: {
      const { response } = action.payload;

      return {
        data: response.data,
        isLoaded: true,
        editSuccess: false,
      };
    }

    case ProductsActions.createProductsSuccess: {
      const { response } = action.payload;

      return {
        ...state,
        data: [...state.data, response.data],
      };
    }

    case ProductsActions.deleteProductSuccess: {
      const { productId } = action.payload;
      const filteredArray = state.data.filter((item) => item.id !== productId);

      return {
        ...state,
        data: filteredArray,
      };
    }

    case ProductsActions.editProductSuccess: {
      return {
        ...state,
        editSuccess: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default products;
