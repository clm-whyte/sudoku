module.exports = {
  stories: ["../src/components/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
};
