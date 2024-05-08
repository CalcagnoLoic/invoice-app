import { useMobile } from "../../hooks/useMobile";

import data from "../../data/data.json";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InvoiceBoxDesktop from "../../components/Invoice/InvoiceBoxDesktop";
import InvoiceBoxMobile from "../../components/Invoice/InvoiceBoxMobile";
import InvoiceContainerLayout from "../../layouts/InvoiceContainerLayout";
import NoInvoice from "../../components/NoInvoice";

const Page = () => {
  const isMobile = useMobile();

  return (
    <>
      <Header />

      <InvoiceContainerLayout>
        {data.length !== 0 ? (
          isMobile ? (
            <InvoiceBoxMobile data={data} />
          ) : (
            <InvoiceBoxDesktop data={data} />
          )
        ) : (
          <NoInvoice />
        )}
      </InvoiceContainerLayout>

      <Footer />
    </>
  );
};

export default Page;
