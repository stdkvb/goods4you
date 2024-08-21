import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { productsApi } from "./api/productsApi";
import { authApi } from "./api/authApi";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    cartSlice,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
