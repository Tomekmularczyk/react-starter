const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('./constants/paths');
const parts = require('./webpack.parts');

const serverConfig = merge([
  parts.targetNode,
  parts.setEntries({
    server: [
      'babel-polyfill',
      PATHS.serverBundleEntry,
    ],
  }),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.resolveDependencies(),
  parts.transpileJavaScript,
  parts.loadStaticAssets('static/'),
  parts.generateSourceMaps('source-map'),
  parts.skipNodeModulesOnServer,
  parts.generateGitRevision,
  parts.defineEnvironmentalVariables({
    NODE_ENV: 'production',
  }),
  parts.concatenateModulesForProduction,
  parts.setExtraPlugins([
    new webpack.NamedModulesPlugin(),
  ]),
]);

module.exports = serverConfig;
