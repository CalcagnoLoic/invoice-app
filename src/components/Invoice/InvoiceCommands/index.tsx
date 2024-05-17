import { useClickOutside } from "../../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import { MouseEvent, useRef, useState } from "react";
import { Status } from "../../../types/interface";

import Button from "../../Button";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ invoiceStatus, id, theme }: Status) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  useClickOutside({ callback: setIsOpen, ref: popupRef });

  const handleEdit = () => {
    navigate(`/invoice-app-web/edit-invoice/${id}`);
  };

  return (
    <>
      <div className="flex justify-between gap-2">
        <Button
          content="Edit"
          css={`
            ${theme ? "bg-ebonyClay text-white" : "bg-selago text-baliHai"}
          `}
          onClick={() => handleEdit()}
        />
        <Button
          content="Delete"
          css="bg-burntSienna text-white"
          onClick={(e) => handleClick(e)}
        />
        <Button
          content={invoiceStatus === "paid" ? "Paid" : "Mark as paid"}
          css={`text-white bg-heliotrope ${invoiceStatus === "paid" ? "cursor-not-allowed" : "cursor-pointer"}`}
        />
      </div>

      {isOpen && (
        <>
          <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-70"></div>
          <div
            ref={popupRef}
            className={`absolute left-1/2 top-1/2 w-[330px] -translate-x-[50%] -translate-y-[50%] rounded-xl p-12 md:w-[480px] ${theme ? "bg-mirage" : "bg-white"}`}
          >
            <Heading
              kind="h1"
              content="Confirm deletion"
              css={`font-bold text-2xl md:text-4xl ${theme ? "text-white" : "text-vulcan"}`}
            />
            <Paragraph
              kind="p"
              content={`Are you sure you want to delete invoice #${id}? This action cannot
              be undone`}
              css="mt-4 text-baliHai"
            />

            <div className="mt-4 flex flex-row justify-end gap-2">
              <Button
                content="Cancel"
                css="text-baliHai bg-selago"
                onClick={(e) => handleClick(e)}
              />
              <Button content="Delete" css="bg-burntSienna text-white" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Component;
