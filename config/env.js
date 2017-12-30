const path = require('path');

const PATHS = {
  root: path.resolve(__dirname, '../'),
  clientBundleEntry: path.resolve(__dirname, '../src/client.jsx'),
  serverBundleEntry: path.resolve(__dirname, '../src/server.jsx'),
  publicDirectory: path.resolve(__dirname, '../dist/public/'),
  ejsTemplate: path.resolve(__dirname, './index.ejs'),
  mainOutputDirectory: path.resolve(__dirname, '../dist/'),
};

const MODULE_ALIASES = {
  static: path.join(PATHS.root, '/static'),
  data: path.join(PATHS.root, '/src/data'),
};

module.exports.PATHS = PATHS;
module.exports.MODULE_ALIASES = MODULE_ALIASES;
