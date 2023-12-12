import axios from "axios";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { setPaymentStatus } from "../reducers/adminReducers";

export const getTransactionData = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/v1/transaction`
        );

        const { transactions } = response.data;
        dispatch(setPaymentStatus(transactions));
    } catch (error) {
        if (isAxiosError(error)) {
            toast.error(`${error?.response?.data?.message}`, {
                duration: 2000,
            });
            return;
        }
        toast.error(`${error?.data?.error}`, {
            duration: 2000,
        });
    }
};
