import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import { setToken, setResetToken } from "../reducers/authReducers";
import toast from "react-hot-toast";

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
    (nama, email, nomor, password, navigate) => async () => {
        try {
            await axios.post(ENDPOINTS.register, {
                nama,
                email,
                nomor,
                password,
            });

            toast.success("Registrasi Berhasil");

            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(`${error?.response?.data?.error}`, {
                    duration: 2000,
                });
                return;
            }
            toast.error(`${error?.error}`, {
                duration: 2000,
            });
        }
    };

export const resetPassword = (email) => async (dispatch) => {
    try {
        const response = await axios.post(ENDPOINTS.resetpassword, {
            email,
        });

        const { data } = response.data;
        const { tokenReset } = data;

        if (tokenReset) {
            toast.success("Tatutan reset password terkirim ke email anda");
            dispatch(setResetToken(tokenReset));
        }
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

export const forgotPassword = (newPassword, id) => async () => {
    const forgotPassword = ENDPOINTS.setpassword(id);
    try {
        await axios.post(forgotPassword, {
            newPassword,
        });

        toast.success("Password berhasil diganti");
    } catch (error) {
        console.log(error);
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
