/* eslint-disable no-console */
const devConfig = require("./dev.config");
const prodConfig = require("./prod.config");

module.exports = env => {
  if (env.development) {
    console.log("Using webpack DEVELOPMENT config");
    return devConfig;
  }

  if (env.production) {
    console.log("Using webpack PRODUCTION config");
    return prodConfig;
  }

  throw new Error("Unknown env configuration passed");
};
