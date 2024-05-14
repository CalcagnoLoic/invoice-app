import { Status } from "../../../types/interface";
import Button from "../../Button";

const Component = ({ invoiceStatus }: Status) => (
  <div className="flex justify-between gap-2">
    <Button content="Edit" css="text-baliHai bg-selago" />
    <Button content="Delete" css="bg-burntSienna text-white" />
    <Button
      content={invoiceStatus === "paid" ? "Paid" : "Mark as paid"}
      css={`text-white bg-heliotrope ${invoiceStatus === "paid" ? "cursor-not-allowed" : "cursor-pointer"}`}
    />
  </div>
);

export default Component;
