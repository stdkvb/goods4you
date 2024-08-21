import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { productsApi } from "./api/productsApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    cartSlice,
    authSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
