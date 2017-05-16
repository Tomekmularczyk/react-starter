const fs = require('fs');
const prodConfig = require('./prod.config');

module.exports = {
  entry: './webpack/server.js',

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  externals: fs.readdirSync('./node_modules').concat([
    'react-dom/server'
  ]).reduce((ext, mod) => {
    ext[mod] = 'commonjs ' + mod;
    return ext
  }, {}),

  node: {
    __filename: false,
    __dirname: false
  },

  module: prodConfig.module,
  resolve: prodConfig.resolve,
};