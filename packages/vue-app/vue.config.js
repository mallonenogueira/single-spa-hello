module.exports = {
  chainWebpack: (config) => {
    config.externals(["@mallone/state-management", "single-spa"]);
  },
};
