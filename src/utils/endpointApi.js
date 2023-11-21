const API_URL = import.meta.env.VITE_BASE_URL;

export const ENDPOINTS = {
    login: `${API_URL}/api/v1/auth/login`, // ini hanya contoh saja
    register: `${API_URL}/api/v1/auth/register`,
    resetpassword: `${API_URL}/api/v1/auth/resetpassword`,
};
