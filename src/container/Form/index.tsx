import { FormSend } from "../../types/interface";
import { useTheme } from "../../hooks/useTheme";

import FormAddress from "../../components/Form/FormAddress";
import FormField from "../../components/Form/FormField";
import Heading from "../../typographies/Heading";
import Icon from "../../icons/InvoiceIcons";
import Paragraph from "../../typographies/Paragraph";


const Container = ({ FormSend }: FormSend) => {
  const { theme } = useTheme();

  return (
    <form action="" className="md:mb-20">
      <Heading kind="h2" content="Bill from" css="form-title" />

      <div>
        <div className="form-group">
          <FormField
            fieldType="text"
            fieldID="streetAddress"
            fieldValue="Street Address"
          />
        </div>
        <div className="form-group">
          <FormAddress isClientInfos={false} />
        </div>
      </div>

      <Heading kind="h2" content="Bill to" css="form-title" />
      <div className="form-group">
        <FormField
          fieldID="clientName"
          fieldType="text"
          fieldValue="Client's Name"
        />
        <FormField
          fieldID="clientName"
          fieldType="email"
          fieldValue="Client's Mail"
          css="mt-3"
        />
        <FormField
          fieldID="clientAddress"
          fieldType="text"
          fieldValue="Street Address"
          css="mt-3"
        />
      </div>

      <div className="form-group">
        <FormAddress isClientInfos={true} />
      </div>

      <div className="form-group mt-3 md:flex-row md:space-x-2">
        <FormField
          fieldID="invoiceDate"
          fieldType="date"
          fieldValue="Invoice Date"
          css="md:w-1/2 text-baliHai"
        />
        <FormField
          isSelect
          fieldID="payementTerms"
          fieldValue="Payement Terms"
          css="md:w-1/2 mt-3 md:mt-0"
        />
      </div>

      <FormField
        fieldID="description"
        fieldValue="Project Description"
        fieldType="text"
        css="form-group"
      />

      <Heading kind="h2" content="Items" css="mt-12 text-2xl text-baliHai" />

      <div className="form-group">
        <div>
          <FormField
            fieldID="itemName"
            fieldValue="Item Name"
            fieldType="text"
          />
        </div>
        <div className="mt-3 flex space-x-2">
          <FormField fieldID="quantity" fieldValue="Qty." fieldType="text" />
          <FormField fieldID="price" fieldValue="Price" fieldType="text" />
          <FormField fieldID="total" fieldValue="Total" fieldType="text" />{" "}
          {/* Devrai être le résultat des deux autres field */}
          <div className="flex">
            <Icon kind="remove" />
          </div>
        </div>
      </div>

      <Paragraph
        kind="span"
        content="+ Add a new item"
        css={`mt-12 flex justify-center rounded-full py-4 md:mt-4 ${theme ? "bg-mirage text-baliHai" : "bg-whisper text-shipCove"}`}
      />

      {FormSend}
    </form>
  );
};

export default Container;
