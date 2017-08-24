const webpack = require('webpack');
const PATHS = require('./paths');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const prodConfig = merge([
  parts.setEntries({
    client: PATHS.clientBundleEntry,
  }),
  parts.setOutput(PATHS.publicDirectory),
  parts.cleanDirectory(PATHS.mainOutputDirectory),
  parts.resolveProjectDependencies,
  parts.attachGitRevision,
  parts.loadStaticAssets('static/'),
  parts.generateServerEjsTemplate(PATHS.ejsTemplate),
  parts.transpileJavaScript,
  parts.minifyJavaScript,
  parts.generateSourceMaps('cheap-module-source-map'),
  parts.defineEnvironmentalVariables({
    NODE_ENV: JSON.stringify('production'),
    HOST: JSON.stringify('http://test-app.com/'),
  }),
  parts.copy([
    { from: './static', to: './static' },
  ]),
  parts.setExtraPlugins([
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]),
]);

module.exports = prodConfig;
