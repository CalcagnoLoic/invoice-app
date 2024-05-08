import { useMobile } from "../../hooks/useMobile";

import data from "../../data/data.json";
import Header from "../../components/Header";
import InvoiceBoxDesktop from "../../components/Invoice/InvoiceBoxDesktop";
import InvoiceBoxMobile from "../../components/Invoice/InvoiceBoxMobile";
import NoInvoice from "../../components/NoInvoice";

const Page = () => {
  const isMobile = useMobile();

  return (
    <>
      <Header />

      <div className="mx-6 mt-8 grid grid-cols-1 items-center md:mx-12 md:mt-14 xl:mx-[325px]">
        {data.length !== 0 ? (
          isMobile ? (
            <InvoiceBoxMobile data={data} />
          ) : (
            <InvoiceBoxDesktop data={data} />
          )
        ) : (
          <NoInvoice />
        )}
      </div>
    </>
  );
};

export default Page;
