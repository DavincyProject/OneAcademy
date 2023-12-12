import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCategory: [],
    listCourse: [],
    courseDetails: [],
    courseMaterial: [],
    transaction: null,
    coursePage: null,
};

const CourseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setListCategory: (state, action) => {
            state.listCategory = action.payload;
        },
        setListCourse: (state, action) => {
            state.listCourse = action.payload;
        },
        setCourseDetails: (state, action) => {
            state.courseDetails = action.payload;
        },
        setCourseMaterial: (state, action) => {
            state.courseMaterial = action.payload;
        },
        setCoursePage: (state, action) => {
            state.coursePage = action.payload;
        },
        setTransaction: (state, action) => {
            state.transaction = action.payload;
        },
    },
});

export const {
    setListCategory,
    setListCourse,
    setCourseDetails,
    setCoursePage,
    setCourseMaterial,
    setTransaction,
} = CourseSlice.actions;
export default CourseSlice.reducer;
