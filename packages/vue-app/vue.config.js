module.exports = {
  filenameHashing: false,
  chainWebpack: (config) => {
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.entryPoints.delete("app");
    config.externals(["@mallone/state-management", "single-spa"]);
  },
  configureWebpack: {
    entry: {
      vue_app: "./src/main.js",
    },
  },
};
