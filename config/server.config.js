const webpack = require('webpack');
const merge = require('webpack-merge');
const { PATHS, MODULE_ALIASES } = require('./env');
const parts = require('./webpack.parts');

const serverConfig = merge([
  parts.targetNode,
  parts.setEntries({
    server: PATHS.serverBundleEntry,
  }),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.resolveDependencies(MODULE_ALIASES),
  parts.transpileJavaScript,
  parts.loadStaticAssets('static/'),
  parts.generateSourceMaps('source-map'),
  parts.skipExternalLibrariesForServerBundle,
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
