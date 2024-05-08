export const convertPrice = (invoicePrice: number): string => {
  const priceString = invoicePrice.toString();
  const pattern = /\B(?=(\d{3})+(?!\d))/g;

  if (pattern.test(priceString)) {
    return priceString.replace(pattern, ",");
  } else {
    return priceString;
  }
};
