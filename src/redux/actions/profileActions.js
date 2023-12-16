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

export const updateProfile =
    (name, phone, country, city, avatar) => async (dispatch, getState) => {
        try {
            const { token } = getState().auth;
            await axios.put(
                ENDPOINTS.profile,
                {
                    name,
                    phone,
                    country,
                    city,
                    avatar,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const errorMessage = error.response.data.error;
                    toast.error(errorMessage, {
                        duration: 2000,
                    });
                } else {
                    // Respon tidak diterima dari server
                    toast.error("Error: No response received from the server", {
                        duration: 2000,
                    });
                }
            } else {
                // Kesalahan selain dari Axios
                toast.error("An unexpected error occurred", {
                    duration: 2000,
                });
            }
        }
    };
