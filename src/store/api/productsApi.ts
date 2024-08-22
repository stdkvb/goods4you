import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Product } from "../../types";
import { RootState } from "../store";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.authSlice.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getProducts: build.query<
      { products: Product[]; total: number },
      { search: string; skip: number }
    >({
      query: ({ search, skip }) =>
        `/products/search?q=${search}&limit=12&skip=${skip}`,
    }),
    getProductById: build.query<Product, { id: string | undefined }>({
      query: ({ id }) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
