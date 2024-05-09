import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import Heading from "../../typographies/Heading";
import InvoiceIcons from "../../icons/InvoiceIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const { theme } = useTheme();
  const url = window.location.pathname;

  return (
    <div className="absolute left-1/2 top-[20%] -translate-x-[50%] text-center">
      <Heading
        kind="h1"
        content="Page not found"
        css={`mb-5 text-5xl font-bold italic xl:text-7xl ${theme ? "text-white" : "text-vulcan"}`}
      />

      <InvoiceIcons kind="empty" />

      <Paragraph
        kind="p"
        css={`mt-5 md:text-xl ${theme ? "text-white" : "text-vulcan"}`}
        content={
          <>
            The request URL <strong>{url}</strong> was not found on this server
          </>
        }
      />

      <Paragraph
        kind="p"
        css={`mt-5 md:text-xl ${theme ? "text-white" : "text-vulcan"}`}
        content="The page you seem to be reaching has either been modified, replaced or
        deleted. Please try again later or contact the site administrator, thank
        you!"
      />

      <Link to={"/invoice-app-web/"}>
        <button className="mt-5 rounded-xl bg-cornflowerBlue p-5 capitalize text-white duration-300 ease-in-out hover:bg-heliotrope">
          go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Component;
