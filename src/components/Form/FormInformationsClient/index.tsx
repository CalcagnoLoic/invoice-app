import { ErrorMessage, Field } from "formik";
import { useTheme } from "../../../hooks/useTheme";

import Label from "../../Label";

const Component = () => {
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";

  return (
    <div className="form-group">
      <Label htmlFor="clientName" content="Client's Name" />
      <Field
        name="clientName"
        placeholder="Your name"
        className={`form-input ${theming}`}
      />
      <ErrorMessage
        name="clientName"
        component="span"
        className="text-burntSienna"
      />
      <Label htmlFor="clientMail" content="Client's Mail" />
      <Field
        name="clientMail"
        placeholder="Your email"
        className={`form-input mt-3 ${theming}`}
      />
      <ErrorMessage
        name="clientMail"
        component="span"
        className="text-burntSienna"
      />
      <Label htmlFor="clientAddress" content="Client's Address" />
      <Field
        name="clientAddress"
        placeholder="Your address"
        className={`form-input mt-3 ${theming}`}
      />
      <ErrorMessage
        name="clientAddress"
        component="span"
        className="text-burntSienna"
      />
    </div>
  );
};

export default Component;
