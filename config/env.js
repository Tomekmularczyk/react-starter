const path = require('path');

const root = path.resolve(__dirname, '../');
const PATHS = {
  root,
  clientBundleEntry: path.join(root, 'src/client.jsx'),
  serverBundleEntry: path.join(root, 'src/server.jsx'),
  publicDirectory: path.join(root, 'dist/public/'),
  ejsTemplate: path.join(root, 'config/index.ejs'),
  mainOutputDirectory: path.join(root, 'dist/'),
};

const MODULE_ALIASES = {
  static: path.join(PATHS.root, '/static'),
  data: path.join(PATHS.root, '/src/data'),
};

module.exports.PATHS = PATHS;
module.exports.MODULE_ALIASES = MODULE_ALIASES;
