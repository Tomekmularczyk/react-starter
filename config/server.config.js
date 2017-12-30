const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('./paths');
const parts = require('./webpack.parts');

const serverConfig = merge([
  parts.targetNode,
  parts.setEntries({
    server: PATHS.serverBundleEntry,
  }),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.resolveProjectDependencies,
  parts.transpileJavaScript,
  parts.loadStaticAssets('static/'),
  parts.generateSourceMaps('source-map'),
  parts.skipExternalLibrariesForServerBundle,
  parts.generateGitRevision,
  parts.defineEnvironmentalVariables({
    NODE_ENV: JSON.stringify('production'),
  }),
  parts.concatenateModulesForProduction,
  parts.setExtraPlugins([
    new webpack.NamedModulesPlugin(),
  ]),
]);

module.exports = serverConfig;
