import React from "react";
import {
	composeRenderProps,
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "../../lib/utils";

export interface ButtonProps extends RACButtonProps {
	variant?: "primary" | "secondary" | "destructive" | "icon";
}

const button = tv({
	extend: focusRing,
	base: "px-5 py-2 text-sm text-center transition rounded-lg border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default",
	variants: {
		variant: {
			primary:
				"bg-primary-600 hover:bg-primary-700 pressed:bg-primary-800 text-white",
			secondary:
				"bg-secondary-100 hover:bg-secondary-200 pressed:bg-secondary-300 text-secondary-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100",
			destructive:
				"bg-danger-700 hover:bg-danger-800 pressed:bg-danger-900 text-white",
			icon: "border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent",
		},
		isDisabled: {
			true: "bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export function Button(props: ButtonProps) {
	return (
		<RACButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, variant: props.variant, className })
			)}
		/>
	);
}
