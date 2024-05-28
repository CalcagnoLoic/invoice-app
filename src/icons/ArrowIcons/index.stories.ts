import { Meta, StoryObj } from "@storybook/react";
import ArrowIcons from ".";

const meta = {
  component: ArrowIcons,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The position of arrow" },
  },
} satisfies Meta<typeof ArrowIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowDown: Story = {
  args: {
    kind: "down",
  },
};

export const ArrowLeft: Story = {
  args: {
    kind: "left",
  },
};

export const ArrowRight: Story = {
  args: {
    kind: "right",
  },
};

export const ArrowUp: Story = {
  args: {
    kind: "up",
  },
};
