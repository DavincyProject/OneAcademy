import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import toast from "react-hot-toast";
import {
    setCourseDetails,
    setCourseMaterial,
    setCoursePage,
    setListCategory,
    setListCourse,
    setTransaction,
} from "../reducers/courseReducers";

export const listCategory = () => async (dispatch) => {
    try {
        const response = await axios.get(ENDPOINTS.category);
        const { category } = response.data;

        dispatch(setListCategory(category));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.data?.error}`, {
            duration: 2000,
        });
    }
};

export const listCourse = (page) => async (dispatch) => {
    const listCourses = ENDPOINTS.listcourse(page);
    try {
        const response = await axios.get(listCourses);
        const { courses, totalPages } = response.data;

        dispatch(setListCourse(courses));
        dispatch(setCoursePage(totalPages));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.data?.error}`, {
            duration: 2000,
        });
    }
};

export const detailsCourse = (id) => async (dispatch) => {
    if (!id) {
        dispatch(setCourseDetails([]));
        return;
    }
    const detailCourse = ENDPOINTS.detailcourse(id);
    try {
        const response = await axios.get(detailCourse);
        const { course, chapters } = response.data;

        dispatch(setCourseDetails(course));
        dispatch(setCourseMaterial(chapters));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.data?.error}`, {
            duration: 2000,
        });
    }
};

export const buyCourse = (id, navigate) => async (dispatch, getState) => {
    try {
        const temporarybuy = ENDPOINTS.buycourses(id);

        const { token } = getState().auth;
        const response = await axios.post(
            temporarybuy,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const { transaction } = response.data;
        dispatch(setTransaction(transaction));

        toast.success("Processing your order..");

        setTimeout(() => {
            navigate(`/payment/${id}`);
        }, 1500);
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.data?.error}`, {
            duration: 2000,
        });
    }
};
