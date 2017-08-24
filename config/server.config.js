const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('./paths');
const parts = require('./webpack.parts');

const serverConfig = merge([
  {
    target: 'node',
    node: {
      __filename: false,
      __dirname: false,
    },
  },
  parts.setEntries({
    server: PATHS.serverBundleEntry,
  }),
  parts.setOutput(PATHS.mainOutputDirectory),
  parts.resolveProjectDependencies,
  parts.transpileJavaScript,
  parts.loadStaticAssets('public/static/'),
  parts.generateSourceMaps('source-map'),
  parts.skipExternalLibrariesOnSSR,
  parts.attachGitRevision,
  parts.defineEnvironmentalVariables({
    NODE_ENV: JSON.stringify('production'),
    HOST: JSON.stringify('http://localhost:8080/'),
  }),
  parts.setExtraPlugins([
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]),
]);

module.exports = serverConfig;
