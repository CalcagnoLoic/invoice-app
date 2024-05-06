import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const useTheme = () => {
  const context = useContext(DarkModeContext);

  if (!context)
    throw new Error(
      "Error with the context, the provider is présent in the main file?",
    );

  return context;
};
