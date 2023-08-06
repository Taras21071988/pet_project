import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  Islogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.Islogged = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
