import { convertDate } from "../../../utils/convertDate";
import { InvoiceDetails } from "../../../types/interface";

import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ filteredData, theme }: InvoiceDetails) => (
  <section className="mt-8 flex grow flex-col justify-between md:flex-row">
    <article className="flex gap-12 md:gap-24 xl:gap-40">
      <div>
        <Heading kind="h3" content="Invoice Date" css="mb-3 text-baliHai" />
        <Paragraph
          kind="span"
          content={convertDate(filteredData.created_at)}
          css={`text-xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
        />

        <Heading
          kind="h3"
          content="Payement Due"
          css="mb-3 mt-8 text-baliHai"
        />
        <Paragraph
          kind="span"
          content={convertDate(filteredData.payment_due)}
          css={`text-xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
        />
      </div>

      <div>
        <Heading kind="h3" content="Bill to" css="text-baliHai" />
        <Paragraph
          kind="span"
          content={filteredData.client_name}
          css={`my-3 block text-xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
        />
        {filteredData.client_address && (
          <>
            <Paragraph
              kind="p"
              content={filteredData.client_address.street || "N/A"}
              css="text-baliHai"
            />
            <Paragraph
              kind="p"
              content={filteredData.client_address.city || "N/A"}
              css="text-baliHai"
            />
            <Paragraph
              kind="p"
              content={filteredData.client_address.post_code || "N/A"}
              css="text-baliHai"
            />
            <Paragraph
              kind="p"
              content={filteredData.client_address.country || "N/A"}
              css="text-baliHai"
            />
          </>
        )}
        {!filteredData.client_address && (
          <Paragraph
            kind="p"
            content="No address available"
            css="text-baliHai"
          />
        )}
      </div>
    </article>

    <article className="mt-8 pr-8 md:mt-0">
      <Heading kind="h3" content="Sent to" css="mb-3 text-baliHai" />
      {!filteredData.client_email && (
        <Paragraph kind="p" content="No email available" css="text-baliHai" />
      )}
      <Paragraph
        kind="span"
        content={filteredData.client_email}
        css={`text-xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
      />
    </article>
  </section>
);

export default Component;
