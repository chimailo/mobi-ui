import { clsx, type ClassValue } from "clsx";
import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const focusRing = tv({
	base: "focused:outline-none outline-0",
	variants: {
		isFocusVisible: {
			true: "ring-primary-600 ring-2 ring-offset-2",
		},
	},
});

export function composeTailwindRenderProps<T>(
	className: string | ((v: T) => string) | undefined,
	tw: string
): string | ((v: T) => string) {
	return composeRenderProps(className, (className) => twMerge(tw, className));
}
