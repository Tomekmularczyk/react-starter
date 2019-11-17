/**
 * Available commands:
 * "node run.js -dev" - runs app in development mode
 * "node run.js -build" - builds the app in production mode
 */

const spawn = require("cross-spawn");
const PATHS = require("./paths");
const path = require("path");

const webpackFile = require.resolve(`./webpack.run.js`);

const [task] = process.argv.slice(2);

switch (task) {
  case "-dev": {
    result = spawn.sync(
      "webpack-dev-server",
      ["--config", webpackFile, "--progress", "--env.development"],
      { stdio: "inherit" }
    );
    break;
  }
  case "-build": {
    result = spawn.sync(
      "webpack",
      ["--config", webpackFile, "--progress", "--env.production"],
      { stdio: "inherit" }
    );
    result = spawn.sync(
      "webpack",
      ["--config", webpackFile, "--progress", "--env.server"],
      { stdio: "inherit" }
    );
    break;
  }
}

if (result.signal) {
  process.exit(1);
}

process.exit(result.status);
