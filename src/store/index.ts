import { configureStore } from "@reduxjs/toolkit";
import { UserProps } from "./modules/user/types";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./modules/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { ProductsState } from "./modules/products/types";
export interface IState {
  user: UserProps;
  products: ProductsState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  blacklist: ["products"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
