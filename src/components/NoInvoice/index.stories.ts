import { Meta, StoryObj } from "@storybook/react";
import NoInvoices from ".";

const meta = {
  component: NoInvoices,
} satisfies Meta<typeof NoInvoices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoInvoice: Story = {};
