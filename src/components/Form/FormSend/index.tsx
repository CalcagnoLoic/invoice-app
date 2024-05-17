import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

import Button from "../../Button";

type FormSend = {
  isEdit: boolean;
  id?: string;
};

const Component = ({ isEdit, id }: FormSend) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const cancelForm = () => {
    navigate(!isEdit ? "/invoice-app-web/" : `/invoice-app-web/${id}`);
  };

  return isEdit ? (
    <div
      className={`fixed bottom-0 left-0 flex w-full flex-row justify-end px-2 py-5 font-bold md:w-2/3 md:rounded-br-xl md:px-14 md:pl-14 md:drop-shadow-4xl xl:w-1/2 xl:pl-[160px]  ${theme ? "bg-mirageDarker" : "bg-white shadow-xl"}`}
    >
      <div className="flex gap-1 md:gap-3">
        <Button
          content="Cancel"
          css={`
            ${theme ? "bg-mirage text-shipCove" : "bg-baliHai text-whisper"}
          `}
          onClick={() => cancelForm()}
        />
        <Button content="Save changes" css="bg-heliotrope text-white" />
      </div>
    </div>
  ) : (
    <div
      className={`fixed bottom-0 left-0 flex w-full flex-row justify-between px-2 py-5 font-bold md:w-2/3 md:rounded-br-xl md:px-14 md:pl-14 md:drop-shadow-4xl xl:w-1/2 xl:pl-[160px]  ${theme ? "bg-mirageDarker" : "bg-white shadow-xl"}`}
    >
      <Button
        content="Discard"
        css={`
          ${theme ? "bg-mirage text-shipCove" : "bg-whisper text-baliHai"}
        `}
        onClick={() => cancelForm()}
      />
      <div className="flex gap-1 md:gap-3">
        <Button
          content="Save as Draft"
          css={`
            ${theme
              ? "bg-baliHai text-whisper"
              : "bg-mirageDarker text-whisper"}
          `}
        />
        <Button content="Save & send" css="bg-heliotrope text-white" />
      </div>
    </div>
  );
};

export default Component;
