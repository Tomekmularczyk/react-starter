/* eslint-disable import/no-extraneous-dependencies */
const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

const productionConfig = merge([
  parts.setProductionMode(),
  parts.setEntries({
    client: PATHS.clientBundleEntry,
    vendor: ["@babel/polyfill"]
  }),
  parts.createVendorChunk("vendor"),
  parts.setOutput(PATHS.mainOutputDirectory),
  parts.cleanDirectory(PATHS.mainOutputDirectory, PATHS.root),
  parts.resolveDependencies(),
  parts.generateGitRevision(),
  parts.loadStaticAssets("static/"),
  parts.useHTMLTemplate(PATHS.htmlTemplate),
  parts.transpileJavaScript(),
  parts.copy([{ from: "./static", to: "./static" }])
]);

module.exports = productionConfig;
