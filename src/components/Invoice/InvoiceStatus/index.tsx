import { Status } from "../../../types/interface";

import Paragraph from "../../../typographies/Paragraph";

const Component = ({ invoiceStatus }: Status) => {
  switch (invoiceStatus) {
    case "paid":
      return (
        <div className="bg-grannyApple status-container bg-opacity-35">
          <Paragraph
            kind="span"
            css="text-shamrock status"
            content={
              <>
                <div className="bg-shamrock round"></div>
                {invoiceStatus}
              </>
            }
          />
        </div>
      );

    case "pending":
      return (
        <div className="bg-karry status-container bg-opacity-35">
          <Paragraph
            kind="span"
            css="text-pizazz status"
            content={
              <>
                <div className="bg-pizazz round"></div>
                {invoiceStatus}
              </>
            }
          />
        </div>
      );

    case "draft":
      return (
        <div className="status-container bg-selago bg-opacity-35">
          <Paragraph
            kind="span"
            css="text-oxfordBlue status"
            content={
              <>
                <div className="round bg-oxfordBlue"></div>
                {invoiceStatus}
              </>
            }
          />
        </div>
      );

    default:
      return null;
  }
};

export default Component;
