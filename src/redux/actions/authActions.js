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

      toast.success("Tautan Berhasil dikirim ke email");

      setTimeout(() => {
        navigate("/validate");
      }, 2000);
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

export const resetPassword = (email) => async () => {
  try {
    const response = await axios.post(ENDPOINTS.resetpassword, {
      email,
    });

    const { data } = response.data;

    if (data) {
      toast.success("Tatutan reset password terkirim ke email anda");
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

export const forgotPassword = (password, id) => async () => {
  const resetPass = ENDPOINTS.setpassword(id);
  try {
    const response = await axios.post(resetPass, {
      password,
    });

    const { data } = response.data;

    if (data) {
      toast.success("Password berhasil diganti");
    }
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

export const logout = (navigate) => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
  navigate("/login");
};
