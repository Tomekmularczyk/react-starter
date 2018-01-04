const path = require('path');

const root = path.resolve(__dirname, '../../');
const PATHS = {
  root,
  clientBundleEntry: path.join(root, 'src/client.jsx'),
  serverBundleEntry: path.join(root, 'src/server/server.js'),
  publicDirectory: path.join(root, 'dist/public/'),
  ejsTemplate: path.join(root, 'config/index.ejs'),
  mainOutputDirectory: path.join(root, 'dist/'),
};

module.exports = PATHS;
