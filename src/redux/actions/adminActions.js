import axios from "axios";
import toast from "react-hot-toast";
import { setPaymentStatus, setTotalPages } from "../reducers/adminReducers";
import { ENDPOINTS } from "../../utils/endpointApi";

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

export const updateChapter =
    (
        id,
        image,
        title,
        instructor,
        description,
        price,
        level,
        courseType,
        categoryId
    ) =>
    async () => {
        try {
            const chapterupdate = ENDPOINTS.updateChapter(id);

            await axios.put(chapterupdate, {
                id,
                image,
                title,
                instructor,
                description,
                price,
                level,
                courseType,
                categoryId,
            });

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
