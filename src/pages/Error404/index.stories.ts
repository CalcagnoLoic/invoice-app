import { Meta, StoryObj } from "@storybook/react";
import Error404 from ".";

const meta = {
  component: Error404,
} satisfies Meta<typeof Error404>;

export default meta;
type Story = StoryObj<typeof meta>;

export const E404: Story = {};
