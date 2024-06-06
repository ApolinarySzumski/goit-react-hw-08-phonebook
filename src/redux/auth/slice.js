import { createSlice } from "@reduxjs/toolkit";
import { eraseCookie, getCookie, setCookie } from "../../utils/cookies";
import { logIn, logOut, refreshUser, register } from "./api";

const initialState = {
  user: { name: null, email: null },
  token: getCookie("token"),
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        setCookie("token", action.payload.token, 30);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        setCookie("token", action.payload.token, 30);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        eraseCookie("token");
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        eraseCookie("token");
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;

        state.isRefreshing = false;
        eraseCookie("token");
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        eraseCookie("token");
      });
  },
});

export const authReducer = authSlice.reducer;
