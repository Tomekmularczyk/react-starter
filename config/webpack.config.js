const webpack = require("webpack");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const parts = require("./webpack.parts");

const devConfig = merge([
  parts.setDevMode(),
  parts.setEntries({
    client: PATHS.clientBundleEntry
  }),
  parts.setOutput(PATHS.publicDirectory),
  parts.resolveDependencies(),
  parts.setDevServer(),
  parts.transpileJavaScript(),
  parts.loadStaticAssets("static/"),
  parts.generateDevHTML(PATHS.ejsTemplate),
  parts.setExtraPlugins([new webpack.HotModuleReplacementPlugin()])
]);

const vendor = ["react", "react-dom"];
const prodConfig = merge([
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

const serverConfig = merge([
  parts.setProductionMode(),
  parts.targetNode(),
  parts.setEntries({
    server: PATHS.serverBundleEntry
  }),
  parts.setOutput(PATHS.mainOutputDirectory, true),
  parts.resolveDependencies(),
  parts.transpileJavaScript(),
  parts.loadStaticAssets("static/"),
  parts.generateSourceMaps("source-map"),
  parts.skipNodeModulesOnServer(),
  parts.generateGitRevision(),
  parts.setExtraPlugins([new webpack.NamedModulesPlugin()])
]);

module.exports = { devConfig, prodConfig, serverConfig };
