import { createSlice } from "@reduxjs/toolkit";
import {
  logOut,
  login,
  refresh,
  register,
  changeAvatar,
  updateUserName,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null, avatarURL: null },
    token: null,
    isAuthLoading: false,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isAuthLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthLoading = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
        state.isAuthLoading = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoading = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
        state.isAuthLoading = false;
      })
      .addCase(changeAvatar.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(changeAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoading = false;
      })
      .addCase(updateUserName.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoading = false;
      }),
});

export const authReducer = authSlice.reducer;
