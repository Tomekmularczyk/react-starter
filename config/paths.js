const path = require("path");

const root = path.resolve(__dirname, "../");
const PATHS = {
  root,
  clientBundleEntry: path.join(root, "src/client.tsx"),
  htmlTemplate: path.join(root, "config/index.html"),
  mainOutputDirectory: path.join(root, "dist/")
};

module.exports = PATHS;
