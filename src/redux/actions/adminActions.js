import axios from "axios";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
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
        if (isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.error}`, {
            duration: 2000,
        });
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
            if (isAxiosError(error)) {
                toast.error(`${error?.response?.data?.message}`, {
                    duration: 2000,
                });
                return;
            }
        }
    };
