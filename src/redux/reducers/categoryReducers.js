import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCategory: [],
};

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setListCategory: (state, action) => {
            state.listCategory = action.payload;
        },
    },
});

export const { setListCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
