import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postCode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),

  client_name: Yup.string().required("Required"),
  client_email: Yup.string().email("Invalid email").required("Required"),

  client_street: Yup.string().required("Required"),
  client_city: Yup.string().required("Required"),
  client_postCode: Yup.string().required("Required"),
  client_country: Yup.string().required("Required"),

  payment_due: Yup.string().required("Required"),
  payment_terms: Yup.string().required("Required"),
  description: Yup.string().required("Required"),

  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
    }),
  ),
});
