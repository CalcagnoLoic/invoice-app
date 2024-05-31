import { useFetch } from "../../hooks/useFetch";
import { useFilter } from "../../hooks/useFilter";
import { useMobile } from "../../hooks/useMobile";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

import ArrowIcons from "../../icons/ArrowIcons";
import FilterDropdown from "../FilterDropdown";
import Heading from "../../typographies/Heading";
import InvoiceIcons from "../../icons/InvoiceIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useFetch("invoices");
  const { theme } = useTheme();
  const { countFilteredInvoices } = useFilter();
  const isMobile = useMobile();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigate = () => {
    navigate("/invoice-app-web/new-invoie");
  };

  const countInvoice = countFilteredInvoices(data);

  return (
    <header className="mx-6 mt-8 flex justify-between md:mx-12 md:mt-12 xl:mx-[350px] xl:-mt-[90vh]">
      <div>
        <Heading
          kind="h1"
          content="Invoices"
          css={`text-2xl md:text-3xl xl:text-5xl font-bold ${theme ? "text-white" : "text-vulcan"}`}
        />
        {countInvoice === 0 ? (
          <Paragraph
            kind="p"
            content="No Invoices"
            css={`
              ${theme ? "text-selago" : "text-baliHai"}
            `}
          />
        ) : (
          <Paragraph
            kind="p"
            content={
              isMobile
                ? `${countInvoice} invoice${countInvoice === 1 ? "" : "s"}`
                : `There ${countInvoice === 1 ? "is" : "are"} ${countInvoice} invoice${countInvoice === 1 ? "" : "s"} in total`
            }
            css={`
              ${theme ? "text-selago" : "text-baliHai"}
            `}
          />
        )}
      </div>

      <div className="flex gap-5 self-center md:gap-10">
        <div className="flex cursor-pointer gap-4" onClick={handleClick}>
          <Paragraph
            kind="span"
            content={isMobile ? "Filter" : "Filter by status"}
            css={`font-bold self-center
              ${theme ? "text-white" : "text-vulcan"}
            `}
          />

          {isOpen ? <ArrowIcons kind="up" /> : <ArrowIcons kind="down" />}
        </div>
        {isOpen && <FilterDropdown callback={setIsOpen} />}

        <button
          className="flex rounded-full bg-cornflowerBlue p-4 font-bold text-white hover:bg-heliotrope"
          onClick={() => handleNavigate()}
        >
          <div className="mr-4 self-center rounded-full bg-white p-2">
            <InvoiceIcons kind="add" />
          </div>

          <Paragraph
            kind="span"
            content={isMobile ? "New" : "New invoice"}
            css="self-center"
          />
        </button>
      </div>
    </header>
  );
};

export default Component;
