import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true, // Enables SWC support
      },
    },
  },
  staticDirs: ["../public"],
  managerHead: (head) => `
    ${head}
    <link rel="icon" href="/favicon.ico" />
  `,
  previewHead: (head) => `
    ${head}
    <link rel="icon" href="/favicon.ico" />
  `,
};
export default config;
