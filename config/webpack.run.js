const { devConfig, serverConfig, prodConfig } = require("./webpack.config");

module.exports = env => {
  if (env.development) {
    console.log("Using webpack DEVELOPMENT config");
    return devConfig;
  }

  if (env.production) {
    console.log("Using webpack PRODUCTION config");
    return prodConfig;
  }

  if (env.server) {
    console.log("Using webpack SERVER config");
    return serverConfig;
  }

  throw new Error("Unknown env configuration passed");
};
