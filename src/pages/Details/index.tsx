import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import GoBack from "../../components/GoBack";
import InvoiceContainerLayout from "../../layouts/InvoiceContainerLayout";
import InvoiceCommands from "../../components/Invoice/InvoiceCommands";
import InvoiceDetails from "../../components/Invoice/InvoiceDetails";
import InvoiceInformations from "../../components/Invoice/InvoiceInformations";
import InvoiceHeader from "../../components/Invoice/InvoiceHeader";
import InvoiceStatus from "../../components/Invoice/InvoiceStatus";
import Loader from "../../components/Loader";
import NoInvoice from "../../components/NoInvoice";
import Paragraph from "../../typographies/Paragraph";

const Page = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { data: filteredData, error, isLoading } = useFetch(`invoices/${id}`);
  const invoice = filteredData[0];

  if (isLoading) {
    return (
      <>
        <GoBack theme={theme} />
        <InvoiceContainerLayout>
          <Loader />
        </InvoiceContainerLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <GoBack theme={theme} />
        <InvoiceContainerLayout>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-2xl font-semibold text-burntSienna">
            <Paragraph kind="span" content={`Error: ${error.message}`} />
          </div>
        </InvoiceContainerLayout>
      </>
    );
  }

  if (!filteredData || filteredData.length === 0) {
    return (
      <>
        <GoBack theme={theme} />
        <InvoiceContainerLayout>
          <NoInvoice />
        </InvoiceContainerLayout>
      </>
    );
  }

  return (
    <>
      <div className="mx-6 mt-8 md:mx-12 md:mt-12 xl:mx-[350px]">
        <GoBack theme={theme} />

        <div
          className={`mt-8 rounded-xl px-8 py-6 shadow-lg md:flex md:justify-between ${theme ? "bg-mirage" : "bg-white"}`}
        >
          <div className="flex justify-between md:justify-normal md:gap-4">
            <Paragraph
              kind="span"
              content="Status"
              css={`self-center ${theme ? "text-white" : "text-vulcan"}`}
            />

            <InvoiceStatus invoiceStatus={invoice.status} />
          </div>

          <div className="hidden md:flex md:self-center">
            <InvoiceCommands
              invoiceStatus={invoice.status}
              id={id}
              theme={theme}
            />
          </div>
        </div>

        <section
          className={`mt-8 rounded-xl p-8 shadow-lg ${theme ? "bg-mirage" : "bg-white"}`}
        >
          <InvoiceHeader filteredData={invoice} theme={theme} />
          <InvoiceInformations filteredData={invoice} theme={theme} />
          <InvoiceDetails filteredData={invoice} theme={theme} />
        </section>
      </div>

      <div
        className={`mt-8 w-full p-6 md:hidden ${theme ? "bg-mirage" : "bg-white"} `}
      >
        <InvoiceCommands invoiceStatus={invoice.status} id={id} theme={theme} />
      </div>
    </>
  );
};

export default Page;
