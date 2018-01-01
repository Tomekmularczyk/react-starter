const path = require('path');
const PATHS = require('./paths');

const MODULE_ALIASES = {
  static: path.join(PATHS.root, '/static'),
  data: path.join(PATHS.root, '/src/data'),
};

module.exports = MODULE_ALIASES;
