import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postCode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  clientName: Yup.string().required("Required"),
  clientMail: Yup.string().email("Invalid email").required("Required"),
  clientAddress: Yup.string().required("Required"),
  clientCity: Yup.string().required("Required"),
  clientPostCode: Yup.string().required("Required"),
  clientCountry: Yup.string().required("Required"),
  invoiceDate: Yup.date().required("Required"),
  payementTerms: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  items: Yup.array().of(
    Yup.object().shape({
      itemName: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
    }),
  ),
});
