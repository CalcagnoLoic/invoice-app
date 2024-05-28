import { ErrorMessage, Field } from "formik";
import { useTheme } from "../../../hooks/useTheme";
import { FormItems } from "../../../types/interface";

import Label from "../../Label";
import Icon from "../../../icons/InvoiceIcons";

const Component = ({ itemName, quantity, price }: FormItems) => {
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";


  return (
    <>
      <div className="mt-3">
        <Label htmlFor={itemName} content="Item Name" />
        <Field
          className={`form-input ${theming}`}
          name={itemName}
          placeholder="Your item"
        />
        <ErrorMessage
          name={itemName}
          component="span"
          className="text-burntSienna"
        />
      </div>
      <div className="mt-3 flex space-x-2">
        <div>
          <Label htmlFor={quantity} content="Qty." />
          <Field
            className={`form-input ${theming}`}
            name={quantity}
            placeholder="Qty."
          />
          <ErrorMessage
            name={quantity}
            component="span"
            className="text-burntSienna"
          />
        </div>

        <div>
          <Label htmlFor={price} content="Price" />
          <Field
            className={`form-input ${theming}`}
            name={price}
            placeholder="Price"
          />
          <ErrorMessage
            name={price}
            component="span"
            className="text-burntSienna"
          />
        </div>

        <div>
          <Label htmlFor="total" content="Total" />
          <Field
            className={`mt-2 w-full max-w-full rounded-lg p-4 font-bold outline-none ${theme ? "bg-mirage" : "bg-whisper"}`}
            name="total"
          />
        </div>

        <div className="flex">
          <Icon kind="remove" />
        </div>
      </div>
    </>
  );
};

export default Component;
