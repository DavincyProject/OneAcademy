import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
    resetToken: null,
    resetPassword: null,
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
        setResetToken: (state, action) => {
            state.resetToken = action.payload;
        },
        setResetPassword: (state, action) => {
            state.resetPassword = action.payload;
        },
    },
});

export const { setToken, setResetToken, setResetPassword } = authSlice.actions;
export default authSlice.reducer;
