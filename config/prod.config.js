const merge = require('webpack-merge');
const PATHS = require('./constants/paths');
const parts = require('./webpack.parts');

const productionConfig = merge([
  parts.setProductionMode(),
  parts.setEntries({
    client: [
      'wicg-focus-ring',
      PATHS.clientBundleEntry,
    ],
  }),
  parts.extractVendorModules(/babel-polyfill|react|react-dom|redux/),
  parts.setOutput(PATHS.publicDirectory, true),
  parts.cleanDirectory(PATHS.mainOutputDirectory, PATHS.root),
  parts.resolveDependencies(),
  parts.generateGitRevision(),
  parts.loadStaticAssets('static/'),
  parts.generateServerEjsTemplate(PATHS.ejsTemplate),
  parts.transpileJavaScript(),
  parts.defineEnvironmentalVariables({
    NODE_ENV: 'production',
  }),
  parts.copy([
    { from: './static', to: './static' },
  ]),
]);

module.exports = productionConfig;
