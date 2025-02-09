const path = require("path");
module.exports = {
  webpack: {
    entry: path.resolve(__dirname, "src/index.tsx"),
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  }
};
