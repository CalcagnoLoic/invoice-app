export interface ContextProps {
  children: React.JSX.Element | React.JSX.Element[];
}

export interface DarkModeProps {
  theme: boolean;
  toggleTheme: () => void;
}
