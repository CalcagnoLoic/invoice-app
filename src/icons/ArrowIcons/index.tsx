import { ArrowIcons } from "../../types/interface";

const Icon = ({ kind }: ArrowIcons) => {
  switch (kind) {
    case "down":
      return (
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center"
        >
          <path
            d="M1 1L5.2279 5.2279L9.4558 1"
            stroke="#7C5DFA"
            strokeWidth="2"
          />
        </svg>
      );

    case "left":
      return (
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center "
        >
          <path
            d="M4.3418 0.886047L0.113895 5.11395L4.3418 9.34185"
            stroke="#7C5DFA"
            strokeWidth="2"
          />
        </svg>
      );

    case "right":
      return (
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center"
        >
          <path d="M1 1L5 5L1 9" stroke="#7C5DFA" strokeWidth="2" />
        </svg>
      );

    case "up":
      return (
        <svg
          width="10"
          height="7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center"
        >
          <path
            d="M9 6L5 2L1 6"
            stroke="#7C5DFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
