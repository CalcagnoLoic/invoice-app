import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    content: { description: "The text inside the button" },
    css: { description: "Design of button" },
    onClick: { description: "Allow to add a functionnality to the button" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CancelButton: Story = {
  args: {
    content: "Cancel",
    css: "bg-baliHai text-whisper",
  },
};

export const SaveButton: Story = {
  args: {
    content: "Save changes",
    css: "bg-heliotrope text-white",
  },
};

export const EditionButton: Story = {
  args: {
    content: "Edit",
    css: "bg-selago text-baliHai",
  },
};

export const DeleteButton: Story = {
  args: {
    content: "Delete",
    css: "bg-burntSienna text-white",
  },
};


export const HomepageButton: Story = {
  args: {
    content: "go to Homepage",
    css: "mt-5 rounded-xl bg-cornflowerBlue p-5 capitalize text-white duration-300 ease-in-out hover:bg-heliotrope",
  },
};
