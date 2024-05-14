import { ContentProps } from "../../types/interface";

const Component = ({ content, css }: ContentProps) => (
  <button
    className={`self-center rounded-full px-6 py-4 duration-300 ease-in-out hover:opacity-75 ${css}`}
  >
    {content}
  </button>
);

export default Component;
