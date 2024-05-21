import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export const useItem = () => {
  const context = useContext(ItemsContext);

  if (!context)
    throw new Error(
      "Error with the context, the provider is présent in the main file?",
    );

  return context;
};
