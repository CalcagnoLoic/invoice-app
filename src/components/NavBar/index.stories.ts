import { Meta, StoryObj } from "@storybook/react";
import NavBar from ".";

const meta = {
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {};
