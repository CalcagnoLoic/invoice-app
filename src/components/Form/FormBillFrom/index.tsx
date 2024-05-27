import { ErrorMessage, Field } from "formik";
import { useTheme } from "../../../hooks/useTheme";

import FormAddressClient from "../FormAddressClient";
import Label from "../../Label";

const Component = () => {
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";

  return (
    <div>
      <div className="form-group">
        <Label htmlFor="street" content="Street Address" />
        <Field
          name="street"
          placeholder="Your street address"
          className={`form-input ${theming}`}
        />
        <ErrorMessage
          name="street"
          component="span"
          className="text-burntSienna"
        />
      </div>
      <div className="form-group">
        <FormAddressClient isClientInfos={false} />
      </div>
    </div>
  );
};

export default Component;
