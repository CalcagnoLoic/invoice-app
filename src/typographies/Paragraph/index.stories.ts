import { Meta, StoryObj } from "@storybook/react";
import Paragraph from ".";

const meta = {
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The type of paragraph" },
    content: { description: "The text from the paragraph" },
    css: { description: "Design of paragraph" },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P: Story = {
  args: {
    kind: "p",
    content:
      "The page you seem to be reaching has either been modified, replaced ordeleted. Please try again later or contact the site administrator, thank you!",
    css: "mt-5 md:text-xl text-vulcan",
  },
};

export const SPAN: Story = {
  args: {
    kind: "span",
    content: "£ 556.00",
    css: "text-xl font-bold text-vulcan",
  },
};
