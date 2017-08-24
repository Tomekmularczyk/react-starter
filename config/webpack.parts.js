const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');


exports.resolveProjectDependencies = {
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    alias: {
      common: path.resolve(__dirname, '../src/app/_common'),
      static: path.resolve(__dirname, '../static'),
      data: path.resolve(__dirname, '../src/data'),
    },
    extensions: ['.js', '.jsx'],
  },
};

exports.lintJavaScript = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            cache: true,
          },
        },
      },
    ],
  },
};

exports.transpileJavaScript = {
  module: {
    rules: [
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
};

exports.loadStaticAssets = directory => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2|jpg|jpeg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: `${directory}[name].[hash].[ext]`,
          },
        },
      },
    ],
  },
});

exports.generateSourceMaps = type => ({
  devtool: type,
});

exports.cleanDirectory = directory => ({
  plugins: [
    new CleanWebpackPlugin([directory]),
  ],
});

exports.attachGitRevision = {
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
};
