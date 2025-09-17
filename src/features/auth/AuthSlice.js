import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
const savedUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
  user: savedUser || null,
  users: savedUsers,
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

      const exists = state.users.find((u) => u.email === email);
      if (exists) {
        state.error = "User already exists";
        return;
      }

      const newUser = { email, password };
      state.users.push(newUser);
      state.user = { email };
      state.error = null;

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("currentUser", JSON.stringify(state.user));
    },

    login: (state, action) => {
      const { email, password } = action.payload;

      if (password.length < 6) {
        state.error = "Password must be at least 6 characters";
        return;
      }

      const exists = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (exists) {
        state.user = { email };
        state.error = null;
        localStorage.setItem("currentUser", JSON.stringify(state.user));
      } else {
        state.error = "Invalid email or password";
      }
    },

    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("currentUser");
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
