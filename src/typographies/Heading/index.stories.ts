import { Meta, StoryObj } from "@storybook/react";
import Heading from ".";

const meta = {
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The level of heading" },
    content: { description: "The text from the heading" },
    css: { description: "Design of heading" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    kind: "h1",
    content: "Invoices",
    css: "text-2xl md:text-3xl xl:text-5xl font-bold text-vulcan",
  },
};

export const H2: Story = {
  args: {
    kind: "h2",
    content: "There is nothing here",
    css: "text-center text-2xl font-bold text-vulcan",
  },
};

export const H3: Story = {
  args: {
    kind: "h3",
    content: "Invoice Date",
    css: "mb-3 text-baliHai",
  },
};
