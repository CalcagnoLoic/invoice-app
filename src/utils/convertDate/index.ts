export const convertDate = (invoiceDate: string): string => {
  const dateParts = invoiceDate.split("-");
  const year = Number(dateParts[0]);
  const month = Number(dateParts[1]) - 1;
  const day = Number(dateParts[2]);

  const invoiceDateObj = new Date(year, month, day);
  const shortMonth = invoiceDateObj.toLocaleString("En-En", { month: "short" });

  return `${day} ${shortMonth} ${year}`;
};
