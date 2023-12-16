import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
    idUser: localStorage.getItem("idUser") || null,
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
        setIdUser: (state, action) => {
            state.idUser = action.payload;
        },
    },
});

export const { setToken, setIdUser } = authSlice.actions;
export default authSlice.reducer;
