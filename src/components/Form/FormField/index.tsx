import { useTheme } from "../../../hooks/useTheme";
import { InputField } from "../../../types/interface";

const Component = ({
  fieldValue,
  fieldType,
  fieldID,
  isSelect,
  css,
}: InputField) => {
  const { theme } = useTheme();

  return (
    <div className={css}>
      <label htmlFor="streetAddress" className="mt-3">
        {fieldValue}
      </label>
      {isSelect ? (
        <select
          name={fieldID}
          id={fieldID}
          className={`form-input flex w-full p-[19px] text-baliHai ${theme ? "border-baliHai bg-mirage" : "bg-white"}`}
          defaultValue="30"
        >
          <option value="1">Net 1 day</option>
          <option value="7">Net 7 day</option>
          <option value="14">Net 14 day</option>
          <option value="30">Net 30 day</option>
        </select>
      ) : (
        /*  */
        <input
          type={fieldType}
          name={fieldID}
          id={fieldID}
          className={`form-input w-full max-w-full ${theme ? "border-baliHai bg-mirage" : "bg-white"}`}
          placeholder={`Your ${fieldValue} `}
        />
      )}
    </div>
  );
};

export default Component;
