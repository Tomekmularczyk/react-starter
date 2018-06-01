/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('./constants/paths');
const parts = require('./webpack.parts');

const devConfig = merge([
  parts.setDevMode(),
  parts.setEntries({
    client: [
      'babel-polyfill',
      'wicg-focus-ring',
      PATHS.clientBundleEntry,
    ],
  }),
  parts.setOutput(PATHS.publicDirectory),
  parts.resolveDependencies(),
  parts.setDevServer(),
  parts.transpileJavaScript(),
  parts.loadStaticAssets('static/'),
  parts.generateDevHTML(PATHS.ejsTemplate),
  parts.setExtraPlugins([
    new webpack.HotModuleReplacementPlugin(),
  ]),
]);

module.exports = devConfig;
