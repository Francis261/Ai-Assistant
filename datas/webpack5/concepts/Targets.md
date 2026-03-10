# Targets

Source: https://devdocs.io/webpack~5/concepts/targets

Because JavaScript can be written for both server and browser, webpack offers multiple deployment targets that you can set in your webpack configuration.

## Usage

To set the target property, you set the target value in your webpack config:

webpack.config.js

```
module.exports = {
  target: 'node',
};
```

In the example above, using node webpack will compile for usage in a Node.js-like environment (uses Node.js require to load chunks and not touch any built in modules like fs or path).

Each target has a variety of deployment/environment specific additions, support to fit its needs. See what targets are available.

## Multiple Targets

Although webpack does not support multiple strings being passed into the target property, you can create an isomorphic library by bundling two separate configurations:

webpack.config.js

```
const path = require('path');
const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js',
  },
  //…
};

const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
  },
  //…
};

module.exports = [serverConfig, clientConfig];
```

The example above will create a lib.js and lib.node.js file in your dist folder.

## Resources

As seen from the options above, there are multiple deployment targets that you can choose from. Below is a list of examples and resources that you can refer to.

- compare-webpack-target-bundles: A great resource for testing and viewing different webpack targets. Also great for bug reporting.
- Boilerplate of Electron-React Application: A good example of a build process for electron's main process and renderer process.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/concepts/targets
