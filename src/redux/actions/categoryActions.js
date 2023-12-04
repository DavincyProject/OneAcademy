import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import toast from "react-hot-toast";
import { setListCategory } from "../reducers/categoryReducers";

export const listCategory = () => async (dispatch) => {
    try {
        const response = await axios.get(ENDPOINTS.category);
        const { category } = response.data;

        dispatch(setListCategory(category));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.error}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.data?.error}`, {
            duration: 2000,
        });
    }
};
