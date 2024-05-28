import { DropdownType } from "../types/interface";

export const dropdownItems: DropdownType[] = [
  { id: 1, content: "Draft", link: "draft" },
  { id: 2, content: "Pending", link: "pending" },
  { id: 3, content: "Paid", link: "paid" },
];

export const initialValues = {
  street: "",
  city: "",
  postCode: "",
  country: "",
  client_name: "",
  client_email: "",
  client_street: "",
  client_city: "",
  client_postCode: "",
  client_country: "",
  payment_due: "",
  payment_terms: "",
  description: "",
  items: [
    {
      name: "",
      quantity: "",
      price: "",
    },
  ],
};
