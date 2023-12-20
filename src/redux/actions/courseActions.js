import axios from "axios";
import { ENDPOINTS } from "../../utils/endpointApi";
import toast from "react-hot-toast";
import {
  setCourseDetails,
  setCourseMaterial,
  setCoursePage,
  setFilterSearch,
  setListCategory,
  setListCourse,
  setTransaction,
} from "../reducers/courseReducers";

export const listCategory = () => async (dispatch) => {
  try {
    const response = await axios.get(ENDPOINTS.category);
    const { category } = response.data;

    dispatch(setListCategory(category));
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

export const listCourse = (page) => async (dispatch) => {
  const listCourses = ENDPOINTS.listcourse(page);
  try {
    const response = await axios.get(listCourses);
    const { courses } = response.data;

    dispatch(setListCourse(courses));
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

export const detailsCourse = (id) => async (dispatch, getState) => {
  if (!id) {
    dispatch(setCourseDetails([]));
    return;
  }
  const detailCourse = ENDPOINTS.detailcourse(id);
  try {
    const { token } = getState().auth;
    const response = await axios.get(detailCourse, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { course, chapters, transaction } = response.data;

    dispatch(setCourseDetails(course));
    dispatch(setCourseMaterial(chapters));
    dispatch(setTransaction(transaction));
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

export const temporarybuyCourse =
  (id, navigate) => async (dispatch, getState) => {
    try {
      const temporarybuy = ENDPOINTS.temporarybuycourses(id);

      const { token } = getState().auth;
      const response = await axios.post(
        temporarybuy,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { transaction } = response.data;
      dispatch(setTransaction(transaction));

      toast.success("Processing your order..");

      setTimeout(() => {
        navigate(`/payment/${id}`);
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error?.response?.data?.message;

        // Check if the error message indicates an existing transaction
        if (
          errorMessage === "You already have a transaction for this course!"
        ) {
          // Redirect to the payment page
          navigate(`/payment/${id}`);
        } else {
          // Handle other errors
          toast.error(errorMessage, {
            duration: 2000,
          });
        }
      } else {
        // Handle non-Axios errors
        toast.error(`${error?.data?.error}`, {
          duration: 2000,
        });
      }
    }
  };

export const transactionDetails = (id) => async (dispatch, getState) => {
  try {
    const detail = ENDPOINTS.detailtransaction(id);

    const { token } = getState().auth;
    const response = await axios.get(detail, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { transaction, course } = response.data;
    localStorage.setItem("date", transaction.paymentDate);
    dispatch(setTransaction(transaction));
    dispatch(setCourseDetails(course));
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

export const payCourses = (transcationid) => async (dispatch, getState) => {
  try {
    const pay = ENDPOINTS.paycourses(transcationid);
    const { token } = getState().auth;
    await axios.post(
      pay,
      {
        paymentMethod: "Credit Card",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Payment success!");

    setTimeout(() => {
      window.location.reload();
      // navigate(`/payment/${id}`);
    }, 1000);
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

export const payCoursesWithoutPayment =
  (transcationid) => async (dispatch, getState) => {
    try {
      const pay = ENDPOINTS.paycourses(transcationid);
      const { token } = getState().auth;
      await axios.post(
        pay,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Payment success!");

      setTimeout(() => {
        window.location.reload();
        // navigate(`/payment/${id}`);
      }, 1000);
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

export const searchFilter = (filters, currentPage) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL
      }/api/v1/course/filtersearch/?page=${currentPage}`,
      {
        params: filters,
      }
    );
    console.log(currentPage);

    const { courses, totalPages } = response.data;
    dispatch(setFilterSearch(courses));
    dispatch(setCoursePage(totalPages));
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
