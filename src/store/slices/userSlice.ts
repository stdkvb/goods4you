import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "../../types";

const initialState: UserState = {
  id: null,
  firstName: "",
  lastName: "",
};

export const userSlice: Slice<UserState> = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
