import { tv } from "tailwind-variants";

import { focusRing } from "@/lib/utils";

export const variants = tv({
	extend: focusRing,
	base: "inline-flex items-center justify-center whitespace-nowrap rounded text-sm/6 font-medium ring-offset-background reduced-motion:transition-none transition-colors duration-500 pressed:scale-99 cursor-pointer disabled:pointer-events-none disabled:opacity-50",
	variants: {
		variant: {
			filled: "",
			outlined: "border",
			text: "",
		},
		color: {
			primary: "",
			secondary: "",
			danger: "",
			success: "",
			neutral: "",
		},
		size: {
			xs: "px-1.5 py-1 text-xs",
			sm: "px-2.5 py-1 text-[13px]/6",
			md: "px-4 py-1.5",
			lg: "px-[22px] py-2 text-base/6",
			xl: "px-7 py-2.5 text-lg",
		},
		icon: {
			false: "",
			true: "p-0",
		},
		round: {
			false: "",
			true: "rounded-full",
		},
	},
	compoundVariants: [
		{
			color: "primary",
			variant: "filled",
			class: "bg-primary hover:bg-primary-hover text-primary-foreground",
		},
		{
			color: "primary",
			variant: "outlined",
			class: "border-primary text-primary hover:bg-primary/5",
		},
		{
			color: "primary",
			variant: "text",
			class: "hover:bg-primary/10 text-primary",
		},
		{
			color: "secondary",
			variant: "filled",
			class: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
		},
		{
			color: "secondary",
			variant: "outlined",
			class: "border-secondary text-secondary hover:bg-secondary/5",
		},
		{
			color: "secondary",
			variant: "text",
			class: "hover:bg-secondary/10 text-secondary",
		},
		{
			color: "danger",
			variant: "filled",
			class: "bg-danger text-danger-foreground hover:bg-danger-hover",
		},
		{
			color: "danger",
			variant: "outlined",
			class: "border-danger text-danger hover:bg-danger/5",
		},
		{
			color: "danger",
			variant: "text",
			class: "text-danger hover:bg-danger/10 pressed:bg-danger/15",
		},
		{
			color: "success",
			variant: "filled",
			class: "bg-success text-success-foreground hover:bg-success-hover",
		},
		{
			color: "success",
			variant: "outlined",
			class: "border-success text-success hover:bg-success/5",
		},
		{
			color: "success",
			variant: "text",
			class: "text-success hover:bg-success/10 pressed:bg-success/15",
		},
		{
			color: "neutral",
			variant: "filled",
			class: "bg-neutral text-neutral-foreground hover:bg-neutral-hover",
		},
		{
			color: "neutral",
			variant: "outlined",
			class: "border-neutral text-neutral hover:bg-neutral/5",
		},
		{
			color: "neutral",
			variant: "text",
			class: "text-neutral hover:bg-neutral/10 pressed:bg-neutral/15",
		},
		{ icon: true, size: "xs", class: "size-6 [&_svg]:size-4" },
		{ icon: true, size: "sm", class: "size-8 [&_svg]:size-5" },
		{ icon: true, size: "md", class: "size-9 [&_svg]:size-6" },
		{ icon: true, size: "lg", class: "size-10 [&_svg]:size-6" },
		{ icon: true, size: "xl", class: "size-12 [&_svg]:size-8" },
	],
	defaultVariants: {
		variant: "filled",
		size: "md",
		color: "primary",
		icon: false,
		round: false,
	},
});
