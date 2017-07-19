const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const common = require('./common.config');

module.exports = {
  context: common.context,

  entry: './webpack/server.jsx',

  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  target: 'node',

  externals: fs.readdirSync('./node_modules').concat([
    'react-dom/server',
  ]).reduce((ext, mod) => {
    ext[mod] = `commonjs ${mod}`;
    return ext;
  }, {}),

  node: {
    __filename: false,
    __dirname: false,
  },

  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.(ttf|eot|woff|woff2|png|svg)$/,
        use: 'url-loader?limit=10000&name=public/static/[name].[ext]',
      },
    ],
  },

  resolve: common.resolve,

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        HOST: JSON.stringify('http://localhost:8080/'),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
