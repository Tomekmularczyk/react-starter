# react-starter [![Prettier][prettier]][prettier] #

1. Clone the repo.
2. Remove existing (`rm -rf .git`) and initialize new git repo (`git init`).
3. Change *name* in package.json file.

### Quick summary: ###

* Project is configured for client only development (for server-side-rendering solution go to [master](https://github.com/Tomekmularczyk/react-starter/tree/master) branch).
* Production bundle gets minified and split out with vendor dependencies.

#### Run the project:
* `yarn` - install dependencies
* `yarn dev` - start in development mode
* `yarn build` - build the project,
* `yarn serve` - serve the builded project,

#### Test
* `yarn lint` - check for eslint errors

### Technology stack: ###
* [Redux](https://redux.js.org/) and [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* [@Reach/router](https://reach.tech/router)
* [Webpack](https://webpack.js.org/) with [react-hot-loader](http://gaearon.github.io/react-hot-loader/)
* [styled-components](https://www.styled-components.com/)
* [focus-ring](https://github.com/WICG/focus-visible) polyfill
* [Babel](https://babeljs.io/) with @babel/polyfill, @babel/preset-env and @babel/preset-react
* [eslint](https://eslint.org/) - [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) + [Prettier](https://prettier.io/)

[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square