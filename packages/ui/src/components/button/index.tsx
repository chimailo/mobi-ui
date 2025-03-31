import {
	composeRenderProps,
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { type VariantProps } from "tailwind-variants";

import { variants } from "./variants";

interface ButtonProps extends RACButtonProps, VariantProps<typeof variants> {}

export function Button(props: ButtonProps) {
	const { className, variant, color, size, icon, round, ...rest } = props;

	return (
		<RACButton
			{...rest}
			className={composeRenderProps(className, (className, renderProps) =>
				variants({
					...renderProps,
					variant,
					color,
					size,
					icon,
					round,
					className,
				})
			)}
		/>
	);
}
