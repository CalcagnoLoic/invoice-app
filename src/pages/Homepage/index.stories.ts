import { Meta, StoryObj } from "@storybook/react";
import HomePage from ".";

const meta = {
  component: HomePage,
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Homepage: Story = {};