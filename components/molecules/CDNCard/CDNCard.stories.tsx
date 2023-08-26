import type { Meta, StoryObj } from "@storybook/react";
import CDNCard from ".";
import { libraryMock } from "../../../mocks/libraryMock";

const meta: Meta<typeof CDNCard> = {
  component: CDNCard,
};

export default meta;

type Story = StoryObj<typeof CDNCard>;

export const Default: Story = {
  args: {
    library: libraryMock,
  },
};
