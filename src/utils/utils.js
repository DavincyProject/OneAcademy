export const formatPrice = (price) => {
  // Assuming price is a number
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
};
