import { Button } from "@mobi/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Click Me",
		color: "primary",
	},
	argTypes: {
		variant: {
			control: "radio",
			options: ["filled", "outlined", "text"],
		},
		color: {
			control: "radio",
			options: ["primary", "secondary", "danger", "success", "neutral"],
		},
		size: {
			control: "radio",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
		round: {
			control: "boolean",
		},
		isDisabled: {
			control: "boolean",
		},
	},
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		color: "secondary",
	},
	argTypes: {
		...Primary.argTypes,
	},
};

export const Danger: Story = {
	args: {
		...Primary.args,
		color: "danger",
	},
	argTypes: {
		...Primary.argTypes,
	},
};

export const Success: Story = {
	args: {
		...Primary.args,
		color: "success",
	},
	argTypes: {
		...Primary.argTypes,
	},
};

export const Neutral: Story = {
	args: {
		...Primary.args,
		color: "neutral",
	},
	argTypes: {
		...Primary.argTypes,
	},
};

export const Filled: Story = {
	args: {
		...Primary.args,
		variant: "filled",
	},
	argTypes: {
		...Primary.argTypes,
	},
};

export const Outlined: Story = {
	args: {
		...Filled.args,
		variant: "outlined",
	},
	argTypes: {
		...Filled.argTypes,
	},
};

export const Text: Story = {
	args: {
		...Filled.args,
		variant: "text",
	},
	argTypes: {
		...Filled.argTypes,
	},
};

export const Icons: Story = {
	args: {
		...Filled.args,
		children: Heart,
		icon: true,
	},
	argTypes: {
		...Primary.argTypes,
	},
};

function Heart() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
		</svg>
	);
}
