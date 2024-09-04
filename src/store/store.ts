import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { productsApi } from "./api/productsApi";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
