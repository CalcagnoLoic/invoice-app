import { Meta, StoryObj } from "@storybook/react";
import Loader from ".";

const meta = {
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderAnimated: Story = {};
