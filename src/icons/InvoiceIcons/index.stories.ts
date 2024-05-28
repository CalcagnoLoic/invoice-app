import { Meta, StoryObj } from "@storybook/react";
import InvoiceIcons from ".";

const meta = {
  component: InvoiceIcons,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The kind of icons" },
  },
} satisfies Meta<typeof InvoiceIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddInvoice: Story = {
  args: {
    kind: "add",
  },
};

export const RemoveInvoice: Story = {
  args: {
    kind: "remove",
  },
};

export const EmptyInvoice: Story = {
  args: {
    kind: "empty",
  },
};
