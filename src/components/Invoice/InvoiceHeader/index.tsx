import { InvoiceDetails } from "../../../types/interface";

import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ filteredData, theme }: InvoiceDetails) => (
  <section className="flex flex-col md:flex-row md:justify-between">
    <div>
      <div className="flex text-xl">
        <Paragraph kind="span" content="#" css="text-heliotrope" />
        <Heading
          kind="h1"
          content={filteredData.id}
          css={`font-bold ${theme ? "text-white" : "text-vulcan"}`}
        />
      </div>
      <Paragraph
        kind="p"
        content={filteredData.description}
        css="text-baliHai md:mt-2"
      />
    </div>

    <div className="mt-7 text-baliHai md:mt-0">
      <Paragraph kind="p" content={filteredData.senderAddress.street} />
      <Paragraph kind="p" content={filteredData.senderAddress.city} />
      <Paragraph kind="p" content={filteredData.senderAddress.postCode} />
      <Paragraph kind="p" content={filteredData.senderAddress.country} />
    </div>
  </section>
);

export default Component;
