/* eslint-disable spaced-comment */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PATHS = require('./paths');


/****************************************
 *         D  E  V    S  E  R  V  E  R
 ***************************************/
exports.setDevServer = {
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};

/****************************************
 *         D  E  V  T  O  O  L
 ***************************************/
exports.generateSourceMaps = type => ({
  devtool: type,
});

/****************************************
 *         E  N  T  R  Y
 ***************************************/
exports.setEntries = entries => ({
  entry: { ...entries }, //  require named entries - no arrays
});

/****************************************
 *         E  X  T  E  R  N  A  L  S
 ***************************************/
exports.skipExternalLibrariesForServerBundle = {
  externals: fs.readdirSync('./node_modules').concat([
    'react-dom/server',
  ]).reduce((ext, mod) => {
    ext[mod] = `commonjs ${mod}`;
    return ext;
  }, {}),
};

/****************************************
 *         M  O  D  U  L  E
 ***************************************/
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

exports.loadStaticAssets = relativePath => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2|jpg|jpeg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: `${relativePath}[name].[hash].[ext]`,
          },
        },
      },
    ],
  },
});

/****************************************
 *         O  U  T  P  U  T
 ***************************************/
exports.setOutput = (pathToDirectory, isProduction = false) => {
  // remove [chunkhash] with webpack-dev-server - https://github.com/webpack/webpack/issues/2393
  const filename = isProduction ? '[name].[chunkhash].bundle.js' : '[name].bundle.js';
  return {
    output: {
      filename,
      path: pathToDirectory,
      chunkFilename: '[name].bundle.js',
      publicPath: '/',
    },
  };
};

/****************************************
 *         P  L  U  G  I  N  S
 ***************************************/
exports.cleanDirectory = pathToDirectory => ({
  plugins: [
    new CleanWebpackPlugin([pathToDirectory], { root: PATHS.root, verbose: true }),
  ],
});

exports.generateGitRevision = {
  plugins: [
    new GitRevisionPlugin(),
  ],
};

exports.minifyJavaScript = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      parallel: true,
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
  ],
};

// based on https://webpack.js.org/guides/caching/
exports.extractVendorModules = entryName => ({
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: entryName,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
  ],
});

exports.generateDevHTML = pathToTemplate => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: pathToTemplate,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
});

exports.generateServerEjsTemplate = pathToTemplate => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: pathToTemplate,
      filename: 'index.ejs',
      inject: 'body',
      minify: {
        removeComments: true,
      },
    }),
  ],
});

exports.defineEnvironmentalVariables = variables => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': variables,
    }),
  ],
});

exports.setExtraPlugins = pluginsArray => ({
  plugins: pluginsArray,
});

exports.copy = mappingsArray => ({
  plugins: [
    new CopyWebpackPlugin(mappingsArray),
  ],
});

exports.runWebpackBundleAnalyzer = {
  plugin: [
    new BundleAnalyzerPlugin(),
  ],
};

/****************************************
 *         R  E  S  O  L  V  E
 ***************************************/
exports.resolveProjectDependencies = {
  resolve: {
    modules: [
      path.join(PATHS.root, '/src'),
      'node_modules',
    ],
    alias: {
      static: path.join(PATHS.root, '/static'),
      data: path.join(PATHS.root, '/src/data'),
    },
    extensions: ['.js', '.jsx'],
  },
};

/****************************************
 *         T  A  R  G  E  T
 ***************************************/
exports.targetNode = {
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
};
