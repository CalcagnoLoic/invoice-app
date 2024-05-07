export interface ContextProps {
  children: React.JSX.Element | React.JSX.Element[];
}

export interface DarkModeProps {
  theme: boolean;
  toggleTheme: () => void;
}

export interface NavBarIcons {
  kind: "background" | "sun" | "moon" | "logo";
}

export interface ArrowIcons {
  kind: "down" | "left" | "right" | "up";
}

export interface InvoiceIcons {
  kind: "add" | "remove" | "empty";
}

interface Typographies {
  content: string;
  css: string;
}

export interface HeadingsProps extends Typographies {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends Typographies {
  kind: "p" | "span";
}

export interface DropdownType {
  id: number;
  content: string;
  link: string;
}

export interface CallbackProps {
  callback: (newValue: boolean) => void;
}

export interface useClickOutsideProps extends CallbackProps {
  ref: React.RefObject<HTMLDivElement>;
}
