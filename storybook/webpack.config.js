const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
        // app components stories goes here
        path.resolve(__dirname, "../src"),
        // storybook directory
        path.resolve(__dirname, "./stories")
    ],
    loader: require.resolve("ts-loader")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx", ".js");

  return defaultConfig;
};
