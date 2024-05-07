import { useMobile } from "../../hooks/useMobile";
import { useTheme } from "../../hooks/useTheme";

import Heading from "../../typographies/Heading";
import InvoiceIcons from "../../icons/InvoiceIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();

  return (
    <div className="mt-[100px] md:mt-[210px] xl:mt-[140px]">
      <InvoiceIcons kind="empty" />
      <Heading
        kind="h2"
        content="There is nothing here"
        css={`mt-16 text-center text-2xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
      />

      <Paragraph
        kind="p"
        css={`mt-6 text-center ${theme ? "text-white" : "text-vulcan"}`}
        content={
          <>
            Create an invoice by clicking the
            <br />
            <Paragraph
              kind="span"
              content={isMobile ? " New " : " New Invoice "}
              css="font-bold"
            />
            button and get started
          </>
        }
      />
    </div>
  );
};

export default Component;
