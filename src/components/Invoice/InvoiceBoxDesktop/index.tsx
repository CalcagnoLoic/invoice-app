import { convertDate } from "../../../utils/convertDate";
import { convertPrice } from "../../../utils/convertPrice";
import { Invoice, InvoiceProps } from "../../../types/interface";
import { Link } from "react-router-dom";
import { useFilter } from "../../../hooks/useFilter";
import { useTheme } from "../../../hooks/useTheme";

import ArrowIcons from "../../../icons/ArrowIcons";
import InvoiceStatus from "../InvoiceStatus";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ data }: InvoiceProps) => {
  const { theme } = useTheme();
  const { filterInvoices, filters } = useFilter();
  
  const noFiltersSelected = Object.values(filters).every(filter => !filter);
  const filteredData = noFiltersSelected ? data : filterInvoices(data);

  return (
    <>
      {filteredData.map((invoice: Invoice, index: number) => (
        <Link to={`${invoice.id}`}>
          <div
            className={`mb-4 flex w-full justify-between gap-10 rounded-xl px-6 py-7 shadow-lg duration-75 ease-in-out hover:border-2 hover:border-heliotrope ${theme ? "bg-mirage" : "bg-white"}`}
            key={index}
          >
            <Paragraph
              kind="p"
              css={`font-bold self-center ${theme ? "text-white" : "text-vulcan"}`}
              content={
                <>
                  <Paragraph
                    kind="span"
                    content="#"
                    css="font-thin text-cornflowerBlue self-center"
                  />

                  {invoice.id}
                </>
              }
            />

            <Paragraph
              kind="p"
              content={`Due ${convertDate(invoice.payment_due)}`}
              css="text-baliHai self-center"
            />

            <Paragraph
              kind="p"
              content={invoice.client_name}
              css="text-baliHai self-center justify-start"
            />

            <Paragraph
              kind="p"
              content={`£ ${convertPrice(invoice.total)}`}
              css={`text-xl font-bold self-center ${theme ? "text-white" : "text-vulcan"}`}
            />
            <div className="flex justify-between gap-5">
              <InvoiceStatus invoiceStatus={invoice.status} />

              <ArrowIcons kind="right" />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Component;
