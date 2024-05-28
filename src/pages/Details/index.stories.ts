import { Meta, StoryObj } from "@storybook/react";
import Details from ".";

const meta = {
  component: Details,
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvoiceDetail: Story = {};
