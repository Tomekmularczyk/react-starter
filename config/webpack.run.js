const devConfig = require('./webpack.configs').devConfig;
const productionConfig = require('./webpack.configs').productionConfig;
const serverConfig = require('./webpack.configs').serverConfig;

module.exports = (env) => {
  if (env.development) {
    console.log('Using webpack DEVELOPMENT config');
    return devConfig;
  }

  if (env.production) {
    console.log('Using webpack PRODUCTION config');
    return productionConfig;
  }

  if (env.server) {
    console.log('Using webpack SERVER config');
    return serverConfig;
  }

  throw new Error('Unknown env configuration passed');
};
