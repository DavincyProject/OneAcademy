import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import { setToken } from "../reducers/authReducers";
import toast from "react-hot-toast";

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        const response = await axios.post(ENDPOINTS.login, {
            email,
            password,
        });

        const { data } = response.data;
        console.log(data);
        const { token } = data;

        dispatch(setToken(token));
        navigate("/");
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.errors?.msg}`, {
                duration: 2000,
            });
            return;
        }

        toast.error(`${error?.errors}`, {
            duration: 2000,
        });
    }
};
