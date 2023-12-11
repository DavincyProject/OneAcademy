const API_URL = import.meta.env.VITE_BASE_URL;

export const ENDPOINTS = {
  login: `${API_URL}/api/v1/user/login`,
  register: `${API_URL}/api/v1/user/register`,
  activateaccount: `${API_URL}/api/v1/user/verify`,
  resendotp: `${API_URL}/api/v1/user/resetOTP`,
  resetpassword: `${API_URL}/api/v1/user/reset-password`,
  setpassword: `${API_URL}/api/v1/user/set-password`,

  // updateprofile: `${API_URL}/api/v1/profile/`,
  category: `${API_URL}/api/v1/category`,
  listcourse: (page) => {
    return `${API_URL}/api/v1/course/?page=${page}`;
  },
  detailcourse: (id) => {
    return `${API_URL}/api/v1/course/${id}`;
  },
};
