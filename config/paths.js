const path = require('path');

const PATHS = {
  root: path.resolve(__dirname, '../'),
  clientBundleEntry: path.resolve(__dirname, '../src/client.jsx'),
  serverBundleEntry: path.resolve(__dirname, '../src/server.jsx'),
  publicDirectory: path.resolve(__dirname, '../dist/public/'),
  ejsTemplate: path.resolve(__dirname, './index.ejs'),
  mainOutputDirectory: path.resolve(__dirname, '../dist/'),
};

module.exports = PATHS;
