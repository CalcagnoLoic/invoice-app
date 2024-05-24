import { InvoiceDetails, Items } from "../../../types/interface";

import Paragraph from "../../../typographies/Paragraph";
import { convertPrice } from "../../../utils/convertPrice";

const Component = ({ filteredData, theme }: InvoiceDetails) => (
  <section className="mt-12">
    <article
      className={`rounded-t-xl px-8 py-6 ${theme ? "bg-ebonyClay" : "bg-selago"}`}
    >
      <table className="w-full border-separate border-spacing-y-3 md:border-spacing-y-6">
        <thead className="hidden md:mb-8 md:table-header-group">
          <tr>
            <th className="table-col" scope="col">
              Item Name
            </th>
            <th className="table-col text-center" scope="col">
              QTY.
            </th>
            <th className="table-col text-end" scope="col">
              Price
            </th>
            <th className="table-col text-end" scope="col">
              Total
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.items.map((item: Items, index: number) => (
            <tr
              key={index}
              className={`font-bold ${theme ? "text-white" : "text-vulcan"}`}
            >
              <td className="flex flex-col md:hidden md:flex-row">
                <Paragraph kind="span" content={item.name} />
                <Paragraph
                  kind="span"
                  content={`${item.quantity} x £ ${convertPrice(item.price)}`}
                  css="text-baliHai"
                />
              </td>

              <td className="table-body">{item.name}</td>
              <td className="table-body text-center">{item.quantity}</td>
              <td className="table-body text-end">
                £ {convertPrice(item.price)}
              </td>
              <td className="text-end">£ {convertPrice(item.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>

    <article
      className={`flex justify-between rounded-b-xl px-8 py-6 ${theme ? "bg-mirageDarker" : "bg-mirage"}`}
    >
      <Paragraph kind="p" content="Amount Due" css="self-center text-white" />
      <Paragraph
        kind="span"
        content={` £ ${convertPrice(filteredData.total)}`}
        css="text-2xl text-white md:text-3xl"
      />
    </article>
  </section>
);

export default Component;
