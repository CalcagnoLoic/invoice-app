import { Meta, StoryObj } from "@storybook/react";
import NewInvoice from ".";

const meta = {
  component: NewInvoice,
} satisfies Meta<typeof NewInvoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Newinvoice: Story = {};
