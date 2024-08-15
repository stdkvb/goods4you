import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Product } from "../../types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<
      { products: Product[]; total: number },
      { search: string; skip: number }
    >({
      query: ({ search, skip }) =>
        `/products/search?q=${search}&limit=12&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
