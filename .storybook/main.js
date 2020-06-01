module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
