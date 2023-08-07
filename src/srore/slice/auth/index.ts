import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../../common/types/auth";

const initialState: IAuthState = {
  user: {
    id: null,
    firstName: "",
    username: "",
    email: "",
    createdAt: "",
    updateAt: "",
    watchList: [
      {
        id: null,
        name: "",
        assetId: "",
        createdAt: "",
        updatedAt: "",
        user: null,
      },
    ],
  },
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
