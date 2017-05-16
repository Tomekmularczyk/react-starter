const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: ['babel-polyfill', './src'],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: "url-loader?limit=10000&name=fonts/[name].[ext]"
      }
    ],
  },

  devtool: 'inline-source-map',

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },

  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './webpack/index.html',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        HOST: JSON.stringify('http://localhost:8080/')
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};