/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { formSchema } from "../../validation/schema";
import { FormSend } from "../../types/interface";
import { initialValues } from "../../data/data";
import { useItem } from "../../hooks/useItem";
import { useTheme } from "../../hooks/useTheme";

import FormAddressClient from "../../components/Form/FormAddressClient";
import FormBillFrom from "../../components/Form/FormBillFrom";
import FormInformationsClient from "../../components/Form/FormInformationsClient";
import FormItem from "../../components/Form/FormItem";
import FormPayement from "../../components/Form/FormPayement";
import Heading from "../../typographies/Heading";
import Label from "../../components/Label";
import Paragraph from "../../typographies/Paragraph";

const Container = ({ FormSend }: FormSend) => {
  const { itemCount, addItems } = useItem();
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";

  /* const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    console.log(values);
  }; */

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={async (values) => {
        console.log(values);
        console.log("test");
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="md:mb-20">
        <Heading kind="h2" content="Bill from" css="form-title" />
        <FormBillFrom />

        <Heading kind="h2" content="Bill to" css="form-title" />
        <FormInformationsClient />

        <div className="form-group">
          <FormAddressClient isClientInfos={true} />
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <FormPayement />
        </div>

        <div className="form-group">
          <Label htmlFor="description" content="Project Description" />
          <Field
            className={`form-input form-group ${theming}`}
            name="description"
          />
          <ErrorMessage
            name="description"
            component="span"
            className="text-burntSienna"
          />
        </div>

        <Heading kind="h2" content="Items" css="mt-12 text-2xl text-baliHai" />

        <div className="form-group">
          {Array.from({ length: itemCount }).map((_, index) => (
            <FormItem
              key={index}
              itemName={`items[${index}].name`}
              quantity={`items[${index}].quantity`}
              price={`items[${index}].price`}
            />
          ))}
        </div>

        <Paragraph
          kind="span"
          content="+ Add a new item"
          css={`mt-12 flex justify-center rounded-full py-4 md:mt-4 cursor-pointer duration-300 ease-in-out ${theme ? "bg-mirage text-baliHai hover:brightness-150" : "bg-whisper text-shipCove hover:bg-selago"}`}
          onClick={() => addItems()}
        />
        {FormSend}
      </Form>
    </Formik>
  );
};

export default Container;
