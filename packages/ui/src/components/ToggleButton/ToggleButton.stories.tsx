import type { Meta } from "@storybook/react";

import { ToggleButton } from ".";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  title: "Toggle Button",
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: any) => (
  <ToggleButton {...args}>Pin</ToggleButton>
);
