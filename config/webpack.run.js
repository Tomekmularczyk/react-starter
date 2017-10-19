const { devConfig, productionConfig, serverConfig } = require('./webpack.configs');

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
