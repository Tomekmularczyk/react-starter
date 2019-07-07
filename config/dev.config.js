const webpack = require("webpack");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

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

module.exports = devConfig;
