import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { CartState } from "../../types";
import { RootState } from "../store";

const initialState: CartState = {
  products: [],
  totalQuantity: null,
  total: null,
  discountedTotal: null,
  status: "idle",
  error: null,
};

export const fetchCart = createAsyncThunk<CartState>(
  "cart/fetchCart",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = localStorage.getItem("authToken");
    const userId = state.userSlice.id;

    if (!userId) {
      return initialState;
    }

    const response = await fetch(`https://dummyjson.com/carts/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data.carts.length > 0 ? data.carts[0] : initialState;
  }
);

export const updateCart = createAsyncThunk<
  CartState,
  { productId: number; quantityChange: number }
>("cart/updateCart", async ({ productId, quantityChange }, { getState }) => {
  const state = getState() as RootState;
  const token = localStorage.getItem("authToken");
  const userId = state.userSlice.id;

  if (!userId) {
    return initialState;
  }

  const currentProducts: { id: number; quantity: number }[] =
    state.cartSlice.products.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));

  const productIndex = currentProducts.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    currentProducts[productIndex] = {
      ...currentProducts[productIndex],
      quantity:
        currentProducts[productIndex].quantity + quantityChange >= 0
          ? currentProducts[productIndex].quantity + quantityChange
          : 0,
    };
  } else if (quantityChange > 0) {
    currentProducts.push({ id: productId, quantity: quantityChange });
  }

  const response = await fetch(`https://dummyjson.com/carts/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      merge: false,
      products: currentProducts,
    }),
  });

  const data = await response.json();
  return data;
});

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
        state.products = action.payload.products;
        state.totalQuantity = action.payload.totalQuantity;
        state.total = action.payload.total;
        state.discountedTotal = action.payload.discountedTotal;
        state.status = "succeeded";
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(updateCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalQuantity = action.payload.totalQuantity;
        state.total = action.payload.total;
        state.discountedTotal = action.payload.discountedTotal;
        state.status = "succeeded";
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      });
  },
});

export default cartSlice.reducer;
