import axios from "axios";
import { setIdUser, setToken } from "../reducers/authReducers";
import { ENDPOINTS } from "../../utils/endpointApi";
import toast from "react-hot-toast";
import { setProfileData } from "../reducers/profileReducers";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(ENDPOINTS.login, {
      email,
      password,
    });

    const { token } = response.data.data;
    const { id } = response.data;

    dispatch(setToken(token));
    dispatch(setIdUser(id));

    localStorage.setItem("idUser", id);
    localStorage.removeItem("countdown");
    navigate("/");
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
        if (error.response) {
          const errorMessage = error.response.data.message;
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
      if (error.response) {
        const errorMessage = error.response.data.message;
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

export const resendOtp = () => async () => {
  try {
    const email = localStorage.getItem("email");

    await axios.post(ENDPOINTS.resendotp, {
      email,
    });

    toast.success("Otp berhasil dikirim");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorMessage = error.response.data.message;
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

export const resetPassword = (email) => async () => {
  try {
    const response = await axios.post(ENDPOINTS.resetpassword, {
      email,
    });

    const { message } = response.data;
    localStorage.removeItem("countdown");
    toast.success(message);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorMessage = error.response.data.message;
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
      if (error.response) {
        const errorMessage = error.response.data.message;
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

export const logout = (navigate) => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("idUser");
  localStorage.removeItem("idAdmin");
  dispatch(setToken(null));
  dispatch(setIdUser(null));
  dispatch(setProfileData(null));
  navigate("/login");
};
