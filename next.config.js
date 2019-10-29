const withImages = require("next-images");

module.exports = withImages({
  inlineImageLimit: false,
  useFileSystemPublicRoutes: false,
  webpack: config => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries["main.js"]) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };
    return config;
  }
});
