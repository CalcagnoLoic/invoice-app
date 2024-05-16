import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

import Button from "../../Button";

type FormSend = {
  isEdit: boolean;
};

const Component = ({ isEdit }: FormSend) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const cancelForm = () => {
    navigate("/invoice-app-web/");
  };

  return isEdit ? null : (
    <div
      className={`md:drop-shadow-4xl fixed bottom-0 left-0 flex w-full flex-row justify-between px-2 py-5 md:w-2/3 md:rounded-br-xl md:px-14 md:pl-14 xl:w-1/2 xl:pl-[160px]  ${theme ? "bg-mirageDarker" : "bg-white shadow-xl"}`}
    >
      <Button
        content="Discard"
        css="font-bold bg-whisper text-shipCove"
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
