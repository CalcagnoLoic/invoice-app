import { useParams, Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import ArrowIcons from "../../icons/ArrowIcons";
import InvoiceCommands from "../../components/Invoice/InvoiceCommands";
import invoiceData from "../../data/data.json";
import InvoiceDetails from "../../components/Invoice/InvoiceDetails";
import InvoiceInformations from "../../components/Invoice/InvoiceInformations";
import InvoiceHeader from "../../components/Invoice/InvoiceHeader";
import InvoiceStatus from "../../components/Invoice/InvoiceStatus";
import Paragraph from "../../typographies/Paragraph";

const Page = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const filteredData = invoiceData.find((invoice) => id === invoice.id);

  return (
    <>
      <div className="mx-6 mt-8 md:mx-12 md:mt-12 xl:mx-[350px]">
        <Link to="/invoice-app-web" className="flex gap-6 xl:-mt-[95vh]">
          <ArrowIcons kind="left" />
          <Paragraph
            kind="span"
            content="Go Back"
            css={`self-center font-bold hover:text-baliHai xl:self-start ${theme ? "text-white" : "text-vulcan"}`}
          />
        </Link>

        <div
          className={`mt-8 rounded-xl px-8 py-6 shadow-lg md:flex md:justify-between ${theme ? "bg-mirage" : "bg-white"}`}
        >
          <div className="flex justify-between md:justify-normal md:gap-4">
            <Paragraph
              kind="span"
              content="Status"
              css={`self-center ${theme ? "text-white" : "text-vulcan"}`}
            />
            {filteredData && (
              <InvoiceStatus invoiceStatus={filteredData.status} />
            )}
          </div>

          <div className="hidden md:flex md:self-center">
            {filteredData && (
              <InvoiceCommands
                invoiceStatus={filteredData.status}
                id={id}
                theme={theme}
              />
            )}
          </div>
        </div>

        {filteredData && (
          <section
            className={`mt-8 rounded-xl p-8 shadow-lg ${theme ? "bg-mirage" : "bg-white"}`}
          >
            <InvoiceHeader filteredData={filteredData} theme={theme} />

            <InvoiceInformations filteredData={filteredData} theme={theme} />

            <InvoiceDetails filteredData={filteredData} theme={theme} />
          </section>
        )}
      </div>

      <div
        className={`mt-8 w-full p-6 md:hidden ${theme ? "bg-mirage" : "bg-white"} `}
      >
        {filteredData && (
          <InvoiceCommands
            invoiceStatus={filteredData.status}
            id={id}
            theme={theme}
          />
        )}
      </div>
    </>
  );
};

export default Page;
