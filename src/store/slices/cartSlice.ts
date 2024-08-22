import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { CartState } from "../../types";
import { RootState } from "../store";

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  total: 0,
  discountedTotal: 0,
  status: "idle",
  error: null,
};

export const fetchCart = createAsyncThunk<CartState>(
  "cart/fetchCart",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.authSlice.token;
    const response = await fetch(`https://dummyjson.com/carts/user/6`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.carts.length > 0 ? data.carts[0] : initialState;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.totalQuantity = action.payload.totalQuantity;
        state.total = action.payload.total;
        state.discountedTotal = action.payload.discountedTotal;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default cartSlice.reducer;
