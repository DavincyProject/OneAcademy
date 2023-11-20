import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  tokenReset: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = action.payload;
    },
    setTokenReset: (state, action) => {
      state.tokenReset = action.payload;
    },
  },
});

export const { setToken, setTokenReset } = authSlice.actions;
export default authSlice.reducer;
