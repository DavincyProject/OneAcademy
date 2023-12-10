import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCategory: [],
    listCourse: [],
    courseDetails: [],
    courseMaterial: [],
    courseChapter: [],
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
        setCourseChapter: (state, action) => {
            state.courseChapter = action.payload;
        },
        setCoursePage: (state, action) => {
            state.coursePage = action.payload;
        },
    },
});

export const {
    setListCategory,
    setListCourse,
    setCourseDetails,
    setCoursePage,
    setCourseChapter,
    setCourseMaterial,
} = CourseSlice.actions;
export default CourseSlice.reducer;
