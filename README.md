# README #

1. Clone the repo.
2. Remove existing (`rm -rf .git`) and initialize new git repo (`git init`).
3. Change *name* in package.json file.

### Quick summary: ###

* Project is already configured for development and production use (server-sider rendering).
* Code used for server side-rendering is not minified so its possible to debug ssr with Chrome-Node Dev-Tools.
* Production bundle gets minified and split out with vendor dependencies.

Run the project:
1. `yarn` - install dependencies
2. `yarn dev` - start in development mode
3. `yarn build` - build project to /dist directory,
5. `yarn start-server` - run server bundle,
4. `yarn debug-ssr` - run (builded) project with chrome-dev-tools debugging option

### Technology stack: ###
* Yarn for managing dependencies
* React and Redux
* React-Router v4
* WebpackDevServer | HotModuleReplacements
* Express and EJS templates for server-side rendering 
* styled-jsx-postcss together with 'precss' plugin and 'autoprefixer'
* focus-ring polyfill
* babel
    * babel-runtime
    * supports latest EcmaScript features and stage-2 preset.
    * 'class' attributes in jsx
* eslint - airbnb extension