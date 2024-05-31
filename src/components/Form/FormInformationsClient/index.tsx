import { ErrorMessage, Field } from "formik";
import { useTheme } from "../../../hooks/useTheme";

import Label from "../../Label";

const Component = () => {
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";

  return (
    <div className="form-group">
      <Label htmlFor="client_name" content="Client's Name" />
      <Field
        name="client_name"
        placeholder="Your name"
        className={`form-input ${theming}`}
      />
      <ErrorMessage
        name="client_name"
        component="span"
        className="text-burntSienna"
      />

      <Label htmlFor="client_email" content="Client's Mail" />
      <Field
        name="client_email"
        placeholder="Your email"
        className={`form-input mt-3 ${theming}`}
      />
      <ErrorMessage
        name="client_email"
        component="span"
        className="text-burntSienna"
      />

      <Label htmlFor="client_street" content="Client's Address" />
      <Field
        name="client_street"
        placeholder="Your address"
        className={`form-input mt-3 ${theming}`}
      />
      <ErrorMessage
        name="client_street"
        component="span"
        className="text-burntSienna"
      />
    </div>
  );
};

export default Component;
