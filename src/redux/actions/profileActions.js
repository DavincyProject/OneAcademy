import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import { setProfileData } from "../reducers/profileReducers";
import toast from "react-hot-toast";

export const getProfileData = () => async (dispatch, getState) => {
    try {
        const { token } = getState().auth;
        const response = await axios.get(ENDPOINTS.profile, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const { profile } = response.data;
        dispatch(setProfileData(profile));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Kesalahan selain dari Axios
            toast.error("An unexpected error occurred", {
                duration: 2000,
            });
        }
    }
};
