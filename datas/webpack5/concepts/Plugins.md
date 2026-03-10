# Plugins

Source: https://devdocs.io/webpack~5/concepts/plugins

Plugins are the backbone of webpack. Webpack itself is built on the same plugin system that you use in your webpack configuration!

They also serve the purpose of doing anything else that a loader cannot do. Webpack provides many such plugins out of the box.

## Anatomy

A webpack plugin is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.

ConsoleLogOnBuildWebpackPlugin.js

```
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('The webpack build process is starting!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

It is recommended that the first parameter of the tap method of the compiler hook should be a camelized version of the plugin name. It is advisable to use a constant for this so it can be reused in all hooks.

## Usage

Since plugins can take arguments/options, you must pass a new instance to the plugins property in your webpack configuration.

Depending on how you are using webpack, there are multiple ways to use plugins.

### Configuration

webpack.config.js

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
```

The ProgressPlugin is used to customize how progress should be reported during compilation, and HtmlWebpackPlugin will generate a HTML file including the my-first-webpack.bundle.js file using a script tag.

### Node API

When using the Node API, you can also pass plugins via the plugins property in the configuration.

some-node-script.js

```
const webpack = require('webpack'); //to access webpack runtime
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {
  // ...
});
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/concepts/plugins
