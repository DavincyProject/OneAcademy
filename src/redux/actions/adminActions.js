import axios from "axios";
import toast from "react-hot-toast";
import {
  setIdAdmin,
  setPaymentStatus,
  setTokenAdmin,
  setTotalPages,
} from "../reducers/adminReducers";
import { ENDPOINTS } from "../../utils/endpointApi";
import { setIdUser, setToken } from "../reducers/authReducers";
import { setProfileData } from "../reducers/profileReducers";

export const loginAdmin = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(ENDPOINTS.login, {
      email,
      password,
    });

    const { token } = response.data.data;
    const { id } = response.data;

    dispatch(setTokenAdmin(token));
    dispatch(setIdAdmin(id));

    localStorage.setItem("idAdmin", id);
    navigate("/admin/dashboard");
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

export const getTransactionData = (page) => async (dispatch) => {
  try {
    const datatransaction = ENDPOINTS.transactioncourse(page);
    const response = await axios.get(datatransaction);

    const { transactions, totalPages } = response.data;
    dispatch(setPaymentStatus(transactions));
    dispatch(setTotalPages(totalPages));
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

export const addcourse = (formData) => async (dispatch, getState) => {
  try {
    const { tokenAdmin } = getState().admin;
    await axios.post(ENDPOINTS.addcategory, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenAdmin}`,
      },
    });

    toast.success("Kelas baru berhasil dibuat");
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

export const addcategory = (formData) => async () => {
  try {
    await axios.post(ENDPOINTS.addcategory, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Kategori baru berhasil dibuat");
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

export const updatedCategory = (id, formData) => async () => {
  try {
    const updateCategory = ENDPOINTS.updatedeletecategory(id);
    await axios.put(updateCategory, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Kategori berhasil diubah");
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

export const deleteCategory = (id) => async () => {
  try {
    const deletedCategory = ENDPOINTS.updatedeletecategory(id);
    await axios.delete(deletedCategory);

    toast.success(`Kategori Berhasil Dihapus`);
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

export const updateCourse = (id, formData) => async (dispatch, getState) => {
  try {
    const { tokenAdmin } = getState().admin;
    const chapterupdate = ENDPOINTS.courseupdate(id);

    await axios.put(
      chapterupdate,
      {
        id,
        formData,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${tokenAdmin}`,
        },
      }
    );

    toast.success(`Chapter ${id} updated successfully`);
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

export const logoutAdmin = (navigate) => (dispatch) => {
  localStorage.removeItem("tokenAdmin");
  localStorage.removeItem("idAdmin");
  localStorage.removeItem("idAdmin");
  localStorage.removeItem("activeLink");
  localStorage.removeItem("token");
  localStorage.removeItem("idUser");
  localStorage.removeItem("idProfile");
  dispatch(setToken(null));
  dispatch(setIdUser(null));
  dispatch(setProfileData(null));
  dispatch(setTokenAdmin(null));
  dispatch(setIdAdmin(null));
  navigate("/admin");
};
