const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

const vendor = ["react", "react-dom"];

const productionConfig = merge([
  parts.setProductionMode(),
  parts.setEntries({
    client: PATHS.clientBundleEntry
  }),
  parts.setOutput(PATHS.publicDirectory, true),
  parts.createVendorChunk(vendor),
  parts.cleanDirectory(PATHS.mainOutputDirectory, PATHS.root),
  parts.resolveDependencies(),
  parts.generateGitRevision(),
  parts.loadStaticAssets("static/"),
  parts.generateServerEjsTemplate(PATHS.ejsTemplate),
  parts.transpileJavaScript(),
  parts.copy([{ from: "./static", to: "./static" }])
]);

module.exports = productionConfig;
