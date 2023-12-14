export const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    });
};

export const validatePhoneInput = (input) => {
    return !isNaN(input) && input.length <= 14;
};

export const formatDateAndTime = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleString("id-ID", {
        hour12: false,
    });
};
