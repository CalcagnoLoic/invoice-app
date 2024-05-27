import { Popup } from "../../types/interface";

const Component = ({ content, css, onClick }: Popup) => (
  <button
    className={`rounded-full px-6 py-4 hover:opacity-75 ${css}`}
    onClick={onClick}
    type="submit"
  >
    {content}
  </button>
);

export default Component;
