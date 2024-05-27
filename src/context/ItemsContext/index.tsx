import { createContext, useState } from "react";
import { ContextProps, ItemsProps } from "../../types/interface";

export const ItemsContext = createContext<ItemsProps>({
  itemCount: 0,
  addItems: () => {},
  removeItems: () => {},
});

export const ItemsProvider = ({ children }: ContextProps) => {
  const [itemCount, setItemCount] = useState<number>(0);

  const addItems = () => {
    setItemCount(itemCount + 1);
  };

  const removeItems = () => {
    setItemCount(itemCount - 1);
  };

  const contextValues: ItemsProps = { itemCount, addItems, removeItems };

  return (
    <ItemsContext.Provider value={contextValues}>
      {children}
    </ItemsContext.Provider>
  );
};
