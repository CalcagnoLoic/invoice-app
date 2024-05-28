import { ErrorMessage, Field } from "formik";
import { useTheme } from "../../../hooks/useTheme";

import Label from "../../Label";

type FormAddress = {
  isClientInfos: boolean;
};

const Component = ({ isClientInfos }: FormAddress) => {
  const { theme } = useTheme();
  const theming = theme ? "border-baliHai bg-mirage" : "bg-white";

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="flex w-full flex-row space-x-4 ">
        <div className="flex w-1/2 flex-col">
          <Label
            htmlFor={isClientInfos ? "client_city" : "city"}
            content="City"
          />
          <Field
            name={isClientInfos ? "client_city" : "city"}
            placeholder="Your city"
            className={`form-input ${theming}`}
          />
          <ErrorMessage
            name={isClientInfos ? "client_city" : "city"}
            component="span"
            className="text-burntSienna"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <Label
            htmlFor={isClientInfos ? "client_postCode" : "postCode"}
            content="Post Code"
          />
          <Field
            name={isClientInfos ? "client_postCode" : "postCode"}
            placeholder="Your post code"
            className={`form-input ${theming}`}
          />
          <ErrorMessage
            name={isClientInfos ? "client_postCode" : "postCode"}
            component="span"
            className="text-burntSienna"
          />
        </div>
      </div>
      <div className="mt-3 flex w-full flex-col md:mt-0 md:w-1/2">
        <Label
          htmlFor={isClientInfos ? "client_country" : "country"}
          content="Country"
        />
        <Field
          name={isClientInfos ? "client_country" : "country"}
          placeholder="Your country"
          className={`form-input ${theming}`}
        />
        <ErrorMessage
          name={isClientInfos ? "client_country" : "country"}
          component="span"
          className="text-burntSienna"
        />
      </div>
    </div>
  );
};

export default Component;
