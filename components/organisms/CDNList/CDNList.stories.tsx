import type { Meta, StoryObj } from "@storybook/react";
import CDNList from ".";
import { librariesMock } from "../../../mocks/librariesMock";

const meta: Meta<typeof CDNList> = {
  component: CDNList,
};

export default meta;

type Story = StoryObj<typeof CDNList>;

export const Default: Story = {
  args: {
    CDNListData: librariesMock,
  },
};
