import { useParams, Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import ArrowIcons from "../../icons/ArrowIcons";
import invoiceData from "../../data/data.json";
import InvoiceDetails from "../../components/Invoice/InvoiceDetails";
import InvoiceInformations from "../../components/Invoice/InvoiceInformations";
import InvoiceHeader from "../../components/Invoice/InvoiceHeader";

const Page = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const filteredData = invoiceData.find((invoice) => id === invoice.id);

  return (
    <div className="mx-6 mt-8 md:mx-12 md:mt-12 xl:mx-[350px]">
      <Link to="/invoice-app-web" className="flex gap-6 xl:-mt-[95vh]">
        <ArrowIcons kind="left" />
        <span
          className={`self-center font-bold xl:self-start ${theme ? "text-white" : "text-vulcan"}`}
        >
          Go Back
        </span>
      </Link>

      <div
        className={`mt-8 rounded-xl px-8 py-6 shadow-lg ${theme ? "bg-mirage" : "bg-white"}`}
      >
        TODO BUTTON
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
  );
};

export default Page;
