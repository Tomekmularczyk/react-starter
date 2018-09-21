/* eslint-disable import/no-extraneous-dependencies */
const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

const productionConfig = merge([
  parts.setProductionMode(),
  parts.setEntries({
    client: ["@babel/polyfill", PATHS.clientBundleEntry],
  }),
  parts.createVendorChunk(["@babel/polyfill|react|react-dom"]),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.cleanDirectory(PATHS.mainOutputDirectory, PATHS.root),
  parts.resolveDependencies(),
  parts.generateGitRevision(),
  parts.loadStaticAssets("static/"),
  parts.useHTMLTemplate(PATHS.htmlTemplate),
  parts.transpileJavaScript(),
  parts.copy([{ from: "./static", to: "./static" }])
]);

module.exports = productionConfig;
