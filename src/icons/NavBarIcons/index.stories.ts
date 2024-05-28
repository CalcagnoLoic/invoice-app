import { Meta, StoryObj } from "@storybook/react";
import NavBarIcons from ".";

const meta = {
  component: NavBarIcons,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The element that composed the navbar" },
  },
} satisfies Meta<typeof NavBarIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Background: Story = {
    args: {
        kind: "background"
    }
}
export const LightMode: Story = {
    args: {
        kind: "sun"
    }
}
export const DarkMode: Story = {
    args: {
        kind: "moon"
    }
}
export const Logo: Story = {
    name: "Logo (Switch in dark mode 🌙 )",
    args: {
        kind: "logo"
    }
}
