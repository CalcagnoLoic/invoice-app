export const convertPrice = (invoicePrice: number): string => {
  const priceString = invoicePrice.toFixed(2);
  const parts = priceString.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
