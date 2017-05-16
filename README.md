# README #

iMeshup project

### Quick summary: ###

Project is already configured for development and production use (server-sider rendering)


### Technology stack: ###
* Yarn for managing dependencies
* React
* React-Router v4 (if there happens to be a problem, possible downgrade)
* Webpack | WebpackDevServer | HotModuleReplacements
* HtmlWebpackPlugin for automated generating of HTML and hashing resources
* Express and EJS templates for server-side rendering
* styled-jsx for styling components
* babel
    * babel-runtime and babel-plugin-transform-runtime (instead of polyfill)
    * preset env | stage-0
    * class and for attributes in jsx
    * should support latest EcmaScript features
* eslint - create-react-app config extension
* flow integration