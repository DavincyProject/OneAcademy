import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCategory: [],
    listCourse: [],
};

const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setListCategory: (state, action) => {
            state.listCategory = action.payload;
        },
        setListCourse: (state, action) => {
            state.listCourse = action.payload;
        },
    },
});

export const { setListCategory, setListCourse } = CategorySlice.actions;
export default CategorySlice.reducer;
