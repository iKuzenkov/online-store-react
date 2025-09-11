import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { email, password } = action.payload;

      if (password.length < 6) {
        state.error = "Password must be at least 6 characters";
        return;
      }

      state.user = { email };
      state.error = null;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    login: (state, action) => {
      const { email, password } = action.payload;

      if (password.length < 6) {
        state.error = "Password must be at least 6 characters";
        return;
      }

      state.user = { email };
      state.error = null;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
