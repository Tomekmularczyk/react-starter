const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

const vendor = ["react", "react-dom"];

const productionConfig = merge([
  parts.setProductionMode(),
  parts.setEntries({
    client: PATHS.clientBundleEntry
  }),
  parts.createVendorChunk(vendor),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.cleanDirectory(),
  parts.resolveDependencies(),
  parts.generateGitRevision(),
  parts.loadStaticAssets("static/"),
  parts.useHTMLTemplate(PATHS.htmlTemplate),
  parts.transpileJavaScript(),
  parts.copy([{ from: "./static", to: "./static" }])
]);

module.exports = productionConfig;
