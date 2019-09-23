const withImages = require("next-images");

module.exports = withImages({
  inlineImageLimit: false,
  webpack(config, options) {
    return config;
  },
  useFileSystemPublicRoutes: false
});
