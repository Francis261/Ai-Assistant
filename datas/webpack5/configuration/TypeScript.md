# Configuration Languages

Source: https://devdocs.io/webpack~5/configuration/configuration-languages#typescript

Webpack accepts configuration files written in multiple programming and data languages. The list of supported file extensions can be found in the node-interpret package. Using node-interpret, webpack can handle many different types of configuration files.

## TypeScript

To write the webpack configuration in TypeScript, you would first install the necessary dependencies, i.e., TypeScript and the relevant type definitions from the DefinitelyTyped project:

```
npm install --save-dev typescript ts-node @types/node @types/webpack
# and, if using webpack-dev-server < v4.7.0
npm install --save-dev @types/webpack-dev-server
```

and then proceed to write your configuration:

webpack.config.ts

```
import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
};

export default config;
```

tsconfig.json

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

The above sample assumes version >= 2.7 or newer of TypeScript is used with the new esModuleInterop and allowSyntheticDefaultImports compiler options in your tsconfig.json file.

Note that you'll also need to check your tsconfig.json file. If the module in compilerOptions in tsconfig.json is commonjs, the setting is complete, else webpack will fail with an error. This occurs because ts-node does not support any module syntax other than commonjs.

There are three solutions to this issue:

- Modify tsconfig.json.
- Modify tsconfig.json and add settings for ts-node.
- Install tsconfig-paths.

The first option is to open your tsconfig.json file and look for compilerOptions. Set target to "ES5" and module to "CommonJS" (or completely remove the module option).

The second option is to add settings for ts-node:

You can keep "module": "ESNext" for tsc, and if you use webpack, or another build tool, set an override for ts-node. ts-node config

```
{
  "compilerOptions": {
    "module": "ESNext",
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
}
```

The third option is to install the tsconfig-paths package:

```
npm install --save-dev tsconfig-paths
```

And create a separate TypeScript configuration specifically for your webpack configs:

tsconfig-for-webpack-config.json

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "esModuleInterop": true
  }
}
```

Then set the environment variable process.env.TS_NODE_PROJECT provided by tsconfig-paths like so:

package.json

```
{
  "scripts": {
    "build": "cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack"
  }
}
```

## CoffeeScript

Similarly, to use CoffeeScript, you would first install the necessary dependencies:

```
npm install --save-dev coffeescript
```

and then proceed to write your configuration:

webpack.config.coffee

```
HtmlWebpackPlugin = require('html-webpack-plugin')
webpack = require('webpack')
path = require('path')

config =
  mode: 'production'
  entry: './path/to/my/entry/file.js'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'my-first-webpack.bundle.js'
  module: rules: [ {
    test: /\.(js|jsx)$/
    use: 'babel-loader'
  } ]
  plugins: [
    new HtmlWebpackPlugin(template: './src/index.html')
  ]

module.exports = config
```

## Babel and JSX

In the example below JSX (React JavaScript Markup) and Babel are used, to create a JSON configuration that webpack can understand.

Courtesy of Jason Miller

First, install the necessary dependencies:

```
npm install --save-dev babel-register jsxobj babel-preset-es2015
```

.babelrc

```
{
  "presets": ["es2015"]
}
```

webpack.config.babel.js

```
import jsxobj from 'jsxobj';

// example of an imported plugin
const CustomPlugin = (config) => ({
  ...config,
  name: 'custom-plugin',
});

export default (
  <webpack target="web" watch mode="production">
    <entry path="src/index.js" />
    <resolve>
      <alias
        {...{
          react: 'preact-compat',
          'react-dom': 'preact-compat',
        }}
      />
    </resolve>
    <plugins>
      <CustomPlugin foo="bar" />
    </plugins>
  </webpack>
);
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/configuration-languages
