import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenAdmin: localStorage.getItem("tokenAdmin") || null,
  idAdmin: localStorage.getItem("idAdmin") || null,
  paymentStatus: [],
  totalPages: [],
};

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setTokenAdmin: (state, action) => {
      if (action.payload) {
        localStorage.setItem("tokenAdmin", action.payload);
      } else {
        localStorage.removeItem("tokenAdmin");
      }

      state.tokenAdmin = action.payload;
    },
    setIdAdmin: (state, action) => {
      state.idAdmin = action.payload;
    },
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setTokenAdmin, setIdAdmin, setPaymentStatus, setTotalPages } =
  AdminSlice.actions;
export default AdminSlice.reducer;
