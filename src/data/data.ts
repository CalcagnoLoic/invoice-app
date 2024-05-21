import { DropdownType } from "../types/interface";

export const dropdownItems: DropdownType[] = [
  { id: 1, content: "Draft", link: "draft" },
  { id: 2, content: "Pending", link: "pending" },
  { id: 3, content: "Paid", link: "paid" },
];

export const initialValues = {
  streetAddress: "",
  city: "",
  postCode: "",
  country: "",
  clientName: "",
  clientMail: "",
  clientAddress: "",
  clientCity: "",
  clientPostCode: "",
  clientCountry: "",
  invoiceDate: "",
  payementTerms: "",
  description: "",
  items: [
    {
      itemName: "",
      quantity: "",
      price: "",
    },
  ],
};
