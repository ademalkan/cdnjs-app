import type { Meta, StoryObj } from "@storybook/react";
import ErrorContent from ".";

const meta: Meta<typeof ErrorContent> = {
  component: ErrorContent,
};

export default meta;

type Story = StoryObj<typeof ErrorContent>;

export const Default: Story = {
  args: {},
};
