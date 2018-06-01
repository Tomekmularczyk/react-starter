/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const PATHS = require('./constants/paths');
const parts = require('./webpack.parts');

const productionConfig = merge([
  parts.setProductionMode(),
  parts.setEntries({
    client: [
      'babel-polyfill',
      'wicg-focus-ring',
      PATHS.clientBundleEntry,
    ],
  }),
  parts.setOutput(PATHS.publicDirectory, true),
  parts.cleanDirectory(PATHS.mainOutputDirectory, PATHS.root),
  parts.resolveDependencies(),
  parts.generateGitRevision(),
  parts.loadStaticAssets('static/'),
  parts.generateServerEjsTemplate(PATHS.ejsTemplate),
  parts.transpileJavaScript(),
  parts.copy([
    { from: './static', to: './static' },
  ]),
]);

module.exports = productionConfig;
