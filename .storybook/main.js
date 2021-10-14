module.exports = {
  "stories": [
    "../src/App.stories.@(js|jsx|ts|tsx)",
    "../src/components/maincontent/heading.stories.tsx",
    "../src/components/rechart/rechart.stories.tsx"
  ],
  "components": [
    "../src/components/maincontent/heading.stories.tsx",
    "../src/components/rechart/rechart.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
}