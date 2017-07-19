const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./common.config');

module.exports = {
  context: common.context,

  entry: './src',

  output: common.output,

  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.(ttf|eot|woff|woff2|png|svg)$/,
        use: 'url-loader?limit=10000&name=static/[name].[ext]',
      },
    ],
  },

  resolve: common.resolve,

  // devtool: 'source-map', //uncomment to generate source maps for production

  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/index.ejs',
      filename: 'index.ejs',
      inject: 'body',
      hash: true,
      production: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        HOST: JSON.stringify('http://dev.imeshup.com/'),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
      },
    }),
    new CopyWebpackPlugin([
      { from: './static', to: './static' },
    ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
