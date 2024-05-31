import { useContext } from "react";
import { FilterContext } from "../context/FIlterContext";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context)
    throw new Error(
      "Error with the context, the provider is present in the main file?",
    );

  return context;
};
