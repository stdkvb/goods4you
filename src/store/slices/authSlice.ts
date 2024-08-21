import { createSlice, Slice } from "@reduxjs/toolkit";

import { AuthState } from "../../types";

const initialState: AuthState = {
  loggedIn: false,
  token: "",
};

export const authSlice: Slice<AuthState> = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.loggedIn = !!action.payload;
    },
    clearToken(state) {
      state = initialState;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
