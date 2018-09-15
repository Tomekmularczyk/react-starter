# README #

1. Clone the repo.
2. Remove existing (`rm -rf .git`) and initialize new git repo (`git init`).
3. Change *name* in package.json file.

### Quick summary: ###

* Project is already configured for development and production use (server-sider rendering).
* Code used for server side-rendering is not minified so its possible to debug ssr with Chrome-Node Dev-Tools.
* Production bundle gets minified and split out with vendor dependencies.

#### Run the project:
* `yarn` - install dependencies
* `yarn dev` - start in development mode
* `yarn build` - build project to /dist directory,
* `yarn start` - run server bundle,

#### Other handy commands
* `yarn debug-ssr` - debug (built) project with chrome-dev-tools
* `yarn lint` - check for eslint errors

### Technology stack: ###
* Yarn for managing dependencies
* React and Redux
* React-Router v4
* WebpackDevServer | HotModuleReplacements
* Express and EJS templates for server-side rendering 
* styled-components
* focus-ring polyfill
* @babel/polyfill, @babel/preset-env, @babel/preset-react
* eslint - airbnb + Prettier

