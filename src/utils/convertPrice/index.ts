export const convertPrice = (invoicePrice: number): string => {
  const priceString = invoicePrice.toString();
  const pattern = /\B(?=(\d{3})+(?!\d))/g;

  if (pattern.test(priceString)) {
    return Number(priceString.replace(pattern, ",")).toFixed(2);
  } else {
    return Number(priceString).toFixed(2);
  }
};
