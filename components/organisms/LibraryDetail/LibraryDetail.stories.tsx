import type { Meta, StoryObj } from "@storybook/react";
import LibraryDetail from ".";
import { libraryDetailMock } from "../../../mocks/libraryDetailMock";

const meta: Meta<typeof LibraryDetail> = {
  component: LibraryDetail,
};

export default meta;

type Story = StoryObj<typeof LibraryDetail>;

export const Default: Story = {
  args: {
    library: libraryDetailMock,
  },
};
