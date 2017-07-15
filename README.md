# README #

starter project project

### Quick summary: ###

* Project is already configured for development and production use (server-sider rendering).
* Code used for server side-rendering is not minified so its possible to debug ssr with Chrome-Node Dev-Tools.
* Client bundle is minified but can generate source-maps by uncommenting `devtool` in production config.

Run the project:
1. `yarn` - install dependencies
2. `yarn dev` - start in development mode
3. `yarn production` - build project to /dist directory and run it on node server,
4. `yarn debug-ssr` - run (builded) project with chrome-dev-tools debugging option

### Technology stack: ###
* Yarn for managing dependencies
* React
* React-Router v4
* Redux with redux-logger
* Webpack | WebpackDevServer | HotModuleReplacements
* HtmlWebpackPlugin for automated generating of HTML and hashing resources
* Express and EJS templates for server-side rendering 
* styled-jsx-postcss together with 'precss' plugin and 'autoprefixer'
* babel
    * babel-runtime and babel-plugin-transform-runtime (instead of polyfill)
    * preset env | stage-0
    * 'class' and 'for' attributes in jsx
    * should support latest EcmaScript features
* eslint - airbnb extension