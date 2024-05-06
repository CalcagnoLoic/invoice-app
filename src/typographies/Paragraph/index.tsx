import { ParagraphProps } from "../../types/interface";

const Typography = ({ kind, content, css }: ParagraphProps) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;
    case "span":
      return <span className={css}>{content}</span>;
    default:
      return null;
  }
};

export default Typography;
