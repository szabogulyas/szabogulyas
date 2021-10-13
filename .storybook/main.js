module.exports = {
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "components": [
    "../src/**/maincontent/*.stories.mdx",
    "../src/**/maincontent/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/chartdata/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/rechart/*.stories.@(js|jsx|ts|tsx)"
  ],
  "mainapi": [
    "../src/App.stories.@(js|jsx|ts|tsx)"
  ],
}