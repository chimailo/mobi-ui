import { ToggleButton } from "@mobi/ui";
import type { Meta } from "@storybook/react";

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
