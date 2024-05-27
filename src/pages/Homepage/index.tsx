import { useFetch } from "../../hooks/useFetch";
import { useMobile } from "../../hooks/useMobile";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InvoiceBoxDesktop from "../../components/Invoice/InvoiceBoxDesktop";
import InvoiceBoxMobile from "../../components/Invoice/InvoiceBoxMobile";
import InvoiceContainerLayout from "../../layouts/InvoiceContainerLayout";
import Loader from "../../components/Loader";
import NoInvoice from "../../components/NoInvoice";
import Paragraph from "../../typographies/Paragraph";

const Page = () => {
  const isMobile = useMobile();

  const { data, isLoading, error } = useFetch("invoices");

  if (isLoading) {
    return (
      <>
        <Header />
        <InvoiceContainerLayout>
          <Loader />
        </InvoiceContainerLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <InvoiceContainerLayout>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-2xl font-semibold text-burntSienna">
            <Paragraph kind="span" content={`Error: ${error.message}`} />
          </div>
        </InvoiceContainerLayout>
      </>
    );
  }

  if (!data || data.length === 0) {
    return (
      <>
        <Header />
        <InvoiceContainerLayout>
          <NoInvoice />
        </InvoiceContainerLayout>
      </>
    );
  }

  return (
    <>
      <Header />

      <InvoiceContainerLayout>
        <>
          {isMobile ? (
            <InvoiceBoxMobile data={data} />
          ) : (
            <InvoiceBoxDesktop data={data} />
          )}
        </>
      </InvoiceContainerLayout>

      <Footer />
    </>
  );
};

export default Page;
