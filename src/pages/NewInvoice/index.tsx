import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import ArrowIcons from "../../icons/ArrowIcons";
import Heading from "../../typographies/Heading";
import Homepage from "../Homepage";
import Form from "../../container/Form";
import FormSend from "../../components/Form/FormSend";
import Paragraph from "../../typographies/Paragraph";

const Page = () => {
  const { theme } = useTheme();

  return (
    <>
      <Homepage />
      <div className="fixed left-0 top-0 h-screen w-screen bg-black opacity-70"></div>
      <div
        className={`fixed left-0 top-0 box-border h-screen w-full overflow-y-auto px-5 pb-32 pt-32 md:top-[103px] md:w-2/3 md:rounded-r-xl md:px-14 md:pb-20 md:pt-7 xl:top-0 xl:w-1/2 xl:pl-[160px] xl:pt-14 ${theme ? "bg-mirageDarker" : "bg-white"}`}
      >
        <Link to="/invoice-app-web" className="flex gap-6 md:hidden">
          <ArrowIcons kind="left" />
          <Paragraph
            kind="span"
            content="Go Back"
            css={`self-center font-bold hover:text-baliHai xl:self-start ${theme ? "text-white" : "text-vulcan"}`}
          />
        </Link>

        <Heading
          kind="h1"
          content="New Invoice"
          css={`mt-4 text-3xl md:mt-0 ${theme ? "text-white" : "text-vulcan"}`}
        />

        <Form FormSend={<FormSend isEdit={false} />} />
      </div>
    </>
  );
};

export default Page;
