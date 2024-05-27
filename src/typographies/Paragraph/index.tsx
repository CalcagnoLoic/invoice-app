import { ParagraphProps } from "../../types/interface";

const Typography = ({ kind, content, css, onClick }: ParagraphProps) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;
    case "span":
      return <span className={css} onClick={onClick}>{content}</span>;
    default:
      return null;
  }
};

export default Typography;
