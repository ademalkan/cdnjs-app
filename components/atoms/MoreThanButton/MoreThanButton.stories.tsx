import type { Meta, StoryObj } from "@storybook/react";
import MoreThanButton from ".";

const meta: Meta<typeof MoreThanButton> = {
  component: MoreThanButton,
};

export default meta;

type Story = StoryObj<typeof MoreThanButton>;

export const Default: Story = {
  args: {
    length: 1,
    showDataEnd: 0,
    moreShowDataHandler: () => {},
  },
};
export const Hidden: Story = {
  args: {
    length: 1,
    showDataEnd: 2,
    moreShowDataHandler: () => {},
  },
};
