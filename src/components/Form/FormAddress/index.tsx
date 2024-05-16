import FormField from "../FormField";

type FormAddress = {
  isClientInfos: boolean;
};

const Component = ({ isClientInfos }: FormAddress) => (
  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex w-full flex-row space-x-4 ">
      <div className="flex w-1/2 flex-col">
        <FormField
          fieldID={isClientInfos ? "clientCity" : "city"}
          fieldType="text"
          fieldValue="City"
        />
      </div>
      <div className="flex w-1/2 flex-col">
        <FormField
          fieldID={isClientInfos ? "clientPostCode" : "postCode"}
          fieldType="text"
          fieldValue="Post Code"
        />
      </div>
    </div>
    <div className="mt-3 flex w-full flex-col md:mt-0 md:w-1/2">
      <FormField
        fieldID={isClientInfos ? "clientCountry" : "country"}
        fieldType="text"
        fieldValue="Country"
      />
    </div>
  </div>
);

export default Component;
