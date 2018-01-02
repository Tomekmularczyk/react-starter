const merge = require('webpack-merge');
const PATHS = require('./constants/paths');
const MODULE_ALIASES = require('./constants/module_aliases');
const parts = require('./webpack.parts');

const productionConfig = merge([
  parts.setEntries({
    client: [
      'wicg-focus-ring',
      PATHS.clientBundleEntry,
    ],
    vendor: ['babel-polyfill', 'react', 'react-dom', 'redux'],
  }),
  parts.setOutput(PATHS.publicDirectory, true),
  parts.cleanDirectory(PATHS.mainOutputDirectory, PATHS.root),
  parts.resolveDependencies(MODULE_ALIASES),
  parts.generateGitRevision,
  parts.loadStaticAssets('static/'),
  parts.generateServerEjsTemplate(PATHS.ejsTemplate),
  parts.transpileJavaScript,
  parts.minifyJavaScript,
  parts.generateSourceMaps('source-map'),
  parts.extractVendorModules('vendor'),
  parts.defineEnvironmentalVariables({
    NODE_ENV: 'production',
  }),
  parts.copy([
    { from: './static', to: './static' },
  ]),
  parts.concatenateModulesForProduction,
]);

module.exports = productionConfig;
