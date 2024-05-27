import { Field } from "formik";
import { useTheme } from "../../../hooks/useTheme";

import Label from "../../Label";

const Component = () => {
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";
  return (
    <>
      <div className="flex flex-col">
        <Label htmlFor="invoiceDate" content="Invoice Date" />
        <Field
          className={`form-input text-baliHai ${theming}`}
          name="invoiceDate"
          type="date"
          css="md:w-full"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="paymentTerms" content="Payment Terms" />
        <Field
          className={`form-input text-baliHai p-[19px] ${theming}`}
          name="paymentTerms"
          css="md:w-full mt-3 md:mt-0"
          as="select"
        >
          <option value="1">Net 1 day</option>
          <option value="7">Net 7 days</option>
          <option value="14">Net 14 days</option>
          <option value="30">Net 30 days</option>
        </Field>
      </div>
    </>
  );
};

export default Component;
