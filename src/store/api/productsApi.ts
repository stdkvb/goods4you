import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Product } from "../../types";
import { baseUrl } from "../../config";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
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
      query: ({ search, skip }) => {
        const params = new URLSearchParams({
          q: search,
          limit: "12",
          skip: skip.toString(),
        });

        return `/products/search?${params.toString()}`;
      },
    }),
    getProductById: build.query<Product, { id: string | undefined }>({
      query: ({ id }) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
