import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export const userApi = createApi({
  reducerPath: "userApi",
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
    getUser: build.query({
      query: () => `auth/me`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
