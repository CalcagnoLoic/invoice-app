import { useTheme } from "../../hooks/useTheme";

import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const { theme } = useTheme();

  return (
    <footer>
      <Paragraph
        kind="p"
        css={`text-center p-5 ${theme ? "text-white" : "text-vulcan"}`}
        content={
          <>
            Coded with love by{" "}
            <a href="https://github.com/CalcagnoLoic" target="_blank">
              @CalcagnoLoic 🥳
            </a>
          </>
        }
      />
    </footer>
  );
};

export default Component;
