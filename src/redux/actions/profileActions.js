import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import { setBuyingHistory, setProfileData } from "../reducers/profileReducers";
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

    localStorage.setItem("idProfile", profile.id);
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

export const updateProfile = (formData) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.put(ENDPOINTS.profile, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    const { message } = response.data;
    toast.success(message);

    window.location.reload();
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

export const changePassword =
  (oldPassword, newPassword) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      const response = await axios.put(
        ENDPOINTS.changepassword,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { message } = response.data;
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

export const buyingHistory = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const response = await axios.get(ENDPOINTS.buyhistory, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setBuyingHistory(response.data));
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
