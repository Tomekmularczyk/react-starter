const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('./paths');
const parts = require('./webpack.parts');

const devConfig = merge([
  parts.setEntries({
    client: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'wicg-focus-ring',
      PATHS.clientBundleEntry,
    ],
  }),
  parts.setOutput(PATHS.publicDirectory),
  parts.resolveProjectDependencies,
  parts.setDevServer,
  parts.lintJavaScript,
  parts.transpileJavaScript,
  parts.generateSourceMaps('cheap-module-eval-source-map'),
  parts.loadStaticAssets('static/'),
  parts.generateDevHTML(PATHS.ejsTemplate),
  parts.setExtraPlugins([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]),
]);

const productionConfig = merge([
  parts.setEntries({
    client: [
      'wicg-focus-ring',
      PATHS.clientBundleEntry,
    ],
    vendor: ['react', 'react-dom', 'redux'],
  }),
  parts.setOutput(PATHS.publicDirectory, true),
  parts.cleanDirectory(PATHS.mainOutputDirectory),
  parts.resolveProjectDependencies,
  parts.generateGitRevision,
  parts.loadStaticAssets('static/'),
  parts.generateServerEjsTemplate(PATHS.ejsTemplate),
  parts.transpileJavaScript,
  parts.minifyJavaScript,
  parts.generateSourceMaps('cheap-module-source-map'),
  parts.extractVendorModules('vendor'),
  parts.defineEnvironmentalVariables({
    NODE_ENV: JSON.stringify('production'),
  }),
  parts.copy([
    { from: './static', to: './static' },
  ]),
  parts.concatenateModulesForProduction,
]);

const serverConfig = merge([
  parts.targetNode,
  parts.setEntries({
    server: PATHS.serverBundleEntry,
  }),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.resolveProjectDependencies,
  parts.transpileJavaScript,
  parts.loadStaticAssets('public/static/'),
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

exports.devConfig = devConfig;
exports.productionConfig = productionConfig;
exports.serverConfig = serverConfig;
// return default config for eslint-plugin-resolver-webpack
module.exports.default = devConfig;
