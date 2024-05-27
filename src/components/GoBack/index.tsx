import { Link } from "react-router-dom";

import ArrowIcons from "../../icons/ArrowIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = ({ theme }: { theme: boolean }) => (
  <div className="md:mt-12">
    <Link to="/invoice-app-web/" className="flex gap-6 xl:-mt-[95vh]">
      <ArrowIcons kind="left" />
      <Paragraph
        kind="span"
        content="Go Back"
        css={`self-center font-bold hover:text-baliHai xl:self-start ${theme ? "text-white" : "text-vulcan"}`}
      />
    </Link>
  </div>
);

export default Component;
