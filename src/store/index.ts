import { configureStore, createSlice } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";
import { UserProps } from "./modules/user/types";

export interface IState {
  user: UserProps;
  products: any;
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
