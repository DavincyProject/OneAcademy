import axios from "axios";
import { setToken } from "../reducers/authReducers";
import { ENDPOINTS } from "../../utils/endpointApi";
import toast from "react-hot-toast";

// check token is it same with login token, if not same. redirect to login again and remove localstorage token if not same
export const protecttoken = () => async () => {};

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        const response = await axios.post(ENDPOINTS.login, {
            email,
            password,
        });

        const { data } = response.data;
        const { token } = data;

        dispatch(setToken(token));
        navigate("/");
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

export const register =
    (email, password, name, phone, navigate) => async () => {
        try {
            const response = await axios.post(ENDPOINTS.register, {
                email,
                name,
                phone,
                password,
                roleId: 2,
            });

            const { message, user } = response.data;

            toast.success(message);
            localStorage.setItem("email", user.email);

            setTimeout(() => {
                navigate("/validate");
            }, 2000);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(`${error?.response?.data?.message}`, {
                    duration: 1500,
                });
                return;
            }
            toast.error(`${error?.error}`, {
                duration: 2000,
            });
        }
    };

export const activateAccount = (OTP, navigate) => async () => {
    try {
        const email = localStorage.getItem("email");

        const response = await axios.post(ENDPOINTS.activateaccount, {
            email,
            OTP,
        });

        const { message } = response.data;

        toast.success(message);
        localStorage.removeItem("email");

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
        } else {
            toast.error(`${error?.error}`, {
                duration: 2000,
            });
        }
    }
};

export const resendOtp = () => async () => {
    try {
        const email = localStorage.getItem("email");

        await axios.post(ENDPOINTS.resendotp, {
            email,
        });

        toast.success("Otp berhasil dikirim");
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

export const resetPassword = (email) => async () => {
    try {
        const response = await axios.post(ENDPOINTS.resetpassword, {
            email,
        });

        const { message } = response.data;
        toast.success(message);
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

export const forgotPassword = (password, id, navigate) => async () => {
    try {
        const response = await axios.post(ENDPOINTS.setpassword, {
            id,
            password,
        });

        const { message } = response.data;
        toast.success(message);

        setTimeout(() => {
            navigate("/login");
        }, 1500);
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

export const logout = (navigate) => (dispatch) => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    navigate("/login");
};
