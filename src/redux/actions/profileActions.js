import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import { setProfileData } from "../reducers/profileReducers";
import toast from "react-hot-toast";

export const getProfileData = (token) => async (dispatch) => {
    try {
        const response = await axios.get(ENDPOINTS.updateprofile, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const { data } = response.data;
        console.log(data);
        dispatch(setProfileData(data));
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
