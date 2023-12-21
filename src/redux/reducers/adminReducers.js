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
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setPaymentStatus, setTotalPages } = AdminSlice.actions;
export default AdminSlice.reducer;
