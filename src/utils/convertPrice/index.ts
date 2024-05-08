export const convertPrice = (invoicePrice: string): string => {
  const pattern = /\B(?=(\d{3})+(?!\d))/g;

  if (pattern.test(invoicePrice)) {
    return invoicePrice.replace(pattern, ",");
  } else {
    return invoicePrice;
  }
};
