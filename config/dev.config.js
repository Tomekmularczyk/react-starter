const webpack = require('webpack');
const PATHS = require('./paths');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const devConfig = merge([
  parts.setEntries({
    client: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      PATHS.clientBundleEntry,
    ],
  }),
  parts.setOutput(PATHS.publicDirectory),
  parts.resolveProjectDependencies,
  parts.setDevServer,
  parts.generateDevHTML('./config/index.ejs'),
  parts.lintJavaScript,
  parts.transpileJavaScript,
  parts.generateSourceMaps('cheap-module-eval-source-map'),
  parts.loadStaticAssets('static/'),
  parts.defineEnvironmentalVariables({
    HOST: JSON.stringify('http://localhost:8080/'),
  }),
  parts.setExtraPlugins([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]),
]);

module.exports = devConfig;
