const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),

  output: {
    path: path.resolve(__dirname, '../dist/public/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    alias: {
      common: path.resolve(__dirname, '../src/App/_common'),
      static: path.resolve(__dirname, '../static'),
      data: path.resolve(__dirname, '../src/data'),
    },
    extensions: ['.js', '.jsx'],
  },
};
