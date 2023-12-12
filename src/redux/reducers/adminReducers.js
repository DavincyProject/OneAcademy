import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentStatus: [],
};

const AdminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
    },
});

export const { setPaymentStatus } = AdminSlice.actions;
export default AdminSlice.reducer;
