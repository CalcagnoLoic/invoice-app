interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface ClientAdress extends SenderAddress {}

export interface Items {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: SenderAddress;
  clientAddress: ClientAdress;
  items: Items[];
  total: number;
}

export interface InvoiceProps {
  data: Invoice[];
}

export interface InvoiceDetails {
  filteredData: Invoice;
  theme: boolean;
}

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

export interface ContentProps {
  content: string | React.JSX.Element;
  css?: string;
}

export interface HeadingsProps extends ContentProps {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends ContentProps {
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

export interface Status {
  invoiceStatus: string;
}
