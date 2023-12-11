const API_URL = import.meta.env.VITE_BASE_URL;

export const ENDPOINTS = {
    login: `${API_URL}/api/v1/auth/login`, // ini hanya contoh saja
    register: `${API_URL}/api/v1/auth/register`,
    resetpassword: `${API_URL}/api/v1/auth/reset-password`,
    setpassword: (id) => {
        return `${API_URL}/api/v1/auth/set-password/${id}`;
    },
    updateprofile: `${API_URL}/api/v1/profile/`,

    category: `${API_URL}/api/v1/category`,
    listcourse: (page) => {
        return `${API_URL}/api/v1/course/?page=${page}`;
    },
    detailcourse: (id) => {
        return `${API_URL}/api/v1/course/${id}`;
    },
};
