const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devConfig = require('./dev.config');

module.exports = {
  context: devConfig.context,
  entry: devConfig.entry,
  output: devConfig.output,
  module: devConfig.module,
  resolve: devConfig.resolve,
  devServer: devConfig.devServer,

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/index.ejs',
      filename: 'index.ejs',
      inject: 'body',
      hash: true,
      production: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        HOST: JSON.stringify('http://dev.imeshup.com/')
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true
      }
    }),
    new CopyWebpackPlugin([
      { from: './static', to: './static' }
    ])
  ]
};