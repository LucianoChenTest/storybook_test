// const findStories = () => ["../src/components/**/*.stories.js"];
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.js",
  ],
  // stories: async (list) => {
  //   console.log({list})
  //   return [...list, ...findStories()];
  // },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
