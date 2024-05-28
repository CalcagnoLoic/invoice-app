import { Meta, StoryObj } from "@storybook/react";
import EditInvoice from ".";

const meta = {
  component: EditInvoice,
} satisfies Meta<typeof EditInvoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Homepage: Story = {};
