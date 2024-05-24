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
  payment_due: string;
  description: string;
  paymentTerms: number;
  client_name: string;
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

export interface ItemsProps {
  itemCount: number;
  addItems: () => void;
  removeItems: () => void;
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

interface ContentProps {
  content: string | React.JSX.Element;
  css?: string;
}

export interface Popup extends ContentProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface HeadingsProps extends ContentProps {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends ContentProps {
  kind: "p" | "span";
  onClick?: () => void;
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
  id?: string;
  theme?: boolean;
}

export interface InputField {
  fieldValue: string;
  fieldID: string;
  fieldType?: string;
  isSelect?: boolean;
  css?: string;
}

export interface FormSend {
  FormSend: React.JSX.Element | React.JSX.Element[];
}

export interface FormAddress {
  isClientInfos: boolean;
}

export interface FormItems {
  itemName: string;
  quantity: string;
  price: string;
}
