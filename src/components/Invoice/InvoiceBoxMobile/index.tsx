import { convertDate } from "../../../utils/convertDate";
import { convertPrice } from "../../../utils/convertPrice";
import { Invoice, InvoiceProps } from "../../../types/interface";
import { Link } from "react-router-dom";
import { useFilter } from "../../../hooks/useFilter";
import { useTheme } from "../../../hooks/useTheme";

import InvoiceStatus from "../InvoiceStatus";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ data }: InvoiceProps) => {
  const { theme } = useTheme();
  const { filterInvoices, filters } = useFilter();

  const noFiltersSelected = Object.values(filters).every((filter) => !filter);
  const filteredData = noFiltersSelected ? data : filterInvoices(data);

  return (
    <>
      {filteredData.map((invoice: Invoice, index: number) => (
        <Link to={`${invoice.id}`}>
          <div
            className={`mb-4 flex w-full flex-col rounded-xl  px-6 py-6 shadow-lg ${theme ? "bg-mirage" : "bg-white"}`}
            key={index}
          >
            <div className="flex justify-between">
              <Paragraph
                kind="p"
                css={`font-bold ${theme ? "text-white" : "text-vulcan"}`}
                content={
                  <>
                    <Paragraph
                      kind="span"
                      content="#"
                      css="font-thin text-cornflowerBlue"
                    />

                    {invoice.id}
                  </>
                }
              />

              <Paragraph
                kind="p"
                content={invoice.client_name}
                css="text-baliHai"
              />
            </div>

            <div className="mt-6 flex justify-between">
              <div>
                <Paragraph
                  kind="p"
                  content={`Due ${convertDate(invoice.payment_due)}`}
                  css="text-baliHai"
                />

                <Paragraph
                  kind="p"
                  content={`£ ${convertPrice(invoice.total)}`}
                  css={`text-xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
                />
              </div>
              <InvoiceStatus invoiceStatus={invoice.status} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default Component;
