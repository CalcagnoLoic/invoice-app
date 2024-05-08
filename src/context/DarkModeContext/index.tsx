import { createContext, useState } from "react";
import { ContextProps, DarkModeProps } from "../../types/interface";

export const DarkModeContext = createContext<DarkModeProps>({
  theme: false,
  toggleTheme: () => {},
});

export const DarkModeProvider = ({ children }: ContextProps) => {
  const [theme, setTheme] = useState<boolean>(false);
  const body = document.body.classList;

  const toggleTheme = () => {
    setTheme(!theme);
  };

  body.remove("bg-whisper");
  body.remove("bg-mirageDarker");

  theme ? body.add("bg-mirageDarker") : body.add("bg-whisper");

  const contextValue: DarkModeProps = { theme, toggleTheme };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
