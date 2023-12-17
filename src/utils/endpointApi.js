const API_URL = import.meta.env.VITE_BASE_URL;

export const ENDPOINTS = {
    //auth endpoints
    login: `${API_URL}/api/v1/user/login`,
    register: `${API_URL}/api/v1/user/register`,
    activateaccount: `${API_URL}/api/v1/user/verify`,
    resendotp: `${API_URL}/api/v1/user/resetOTP`,
    resetpassword: `${API_URL}/api/v1/user/reset-password`,
    setpassword: `${API_URL}/api/v1/user/set-password`,

    //users endpoints
    profile: `${API_URL}/api/v1/user/me`,
    updateprofile: `${API_URL}/api/v1/user/me`,
    changepassword: `${API_URL}/api/v1/user/me/change-password`,
    buyhistory: `${API_URL}/api/v1/user/me/history-transaction`,

    //course endpoints
    category: `${API_URL}/api/v1/category`,
    listcourse: (page) => {
        return `${API_URL}/api/v1/course/?page=${page}`;
    },
    detailcourse: (id) => {
        return `${API_URL}/api/v1/course/${id}`;
    },
    temporarybuycourses: (courseid) => {
        return `${API_URL}/api/v1/transaction/${courseid}/buy`;
    },
    detailtransaction: (id) => {
        return `${API_URL}/api/v1/transaction/${id}/detailTransaction`;
    },
    paycourses: (transcationid) => {
        return `${API_URL}/api/v1/transaction/${transcationid}/pay`;
    },

    //admin endpoints
    transactioncourse: (page) => {
        return `${API_URL}/api/v1/transaction/?page=${page}`;
    },
    admincoursedetails: (id) => {
        return `${API_URL}/api/v1/course/${id}`;
    },
    chapterupdate: (id) => {
        return `${API_URL}/api/v1/course/update/${id}`;
    },
};
