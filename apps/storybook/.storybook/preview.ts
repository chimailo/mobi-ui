import type { Preview } from "@storybook/react";

import "../../../packages/ui/dist/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark", "midnight-blue"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || "light";
      const background =
        selectedTheme === "midnight-blue"
          ? "oklch(0.208 0.042 265.755)"
          : selectedTheme === "dark"
            ? "oklch(0.21 0.006 285.885)"
            : "oklch(1 0 0)";
      const foreground =
        selectedTheme === "midnight-blue"
          ? "oklch(0.967 0.003 264.542)"
          : selectedTheme === "dark"
            ? "oklch(0.141 0.005 285.823)"
            : "oklch(0.145 0 0)";

      document.body.dataset.theme = selectedTheme;
      document.body.style.backgroundColor = background;
      document.body.style.color = foreground;
      return story(context);
    },
  ],
};

export default preview;
