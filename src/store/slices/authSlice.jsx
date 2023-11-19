import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    // Start the login process
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Successful login
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    // Login error
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    // Log out of the system
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = null;
    },
    // Resetting the error state
    resetError: (state) => {
      state.error = null;
    },
  },
});

// Exporting editorials as action movies
export const { loginStart, loginSuccess, loginFailure, logout, resetError } =
  authSlice.actions;

// Експорт редюсера
export default authSlice.reducer;
