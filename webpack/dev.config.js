const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common.config');

module.exports = {
  context: common.context,

  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/client.jsx',
  ],

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

  devtool: 'inline-source-map',

  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/index.ejs',
      filename: 'index.html',
      inject: 'body',
      hash: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        HOST: JSON.stringify('http://localhost:8080/'),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
