const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");
const webpack = require("webpack");

const vendor = ["react", "react-dom"];
const prodConfig = merge([
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

const devConfig = merge([
  parts.setDevMode(),
  parts.setEntries({
    client: PATHS.clientBundleEntry
  }),
  parts.setOutput(PATHS.mainOutputDirectory),
  parts.resolveDependencies(),
  parts.setDevServer(),
  parts.transpileJavaScript(),
  parts.loadStaticAssets("static/"),
  parts.useHTMLTemplate(PATHS.htmlTemplate),
  parts.setExtraPlugins([new webpack.HotModuleReplacementPlugin()])
]);

module.exports = { devConfig, prodConfig };
