# Production

Source: https://devdocs.io/webpack~5/guides/production

In this guide, we'll dive into some of the best practices and utilities for building a production site or application.

## Setup

The goals of development and production builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

While we will separate the production and development specific bits out, note that we'll still maintain a "common" configuration to keep things DRY. In order to merge these configurations together, we'll use a utility called webpack-merge. With the "common" configuration in place, we won't have to duplicate code within the environment-specific configurations.

Let's start by installing webpack-merge and splitting out the bits we've already worked on in previous guides:

```
npm install --save-dev webpack-merge
```

project

```
  webpack-demo
  |- package.json
  |- package-lock.json
- |- webpack.config.js
+ |- webpack.common.js
+ |- webpack.dev.js
+ |- webpack.prod.js
  |- /dist
  |- /src
    |- index.js
    |- math.js
  |- /node_modules
```

webpack.common.js

```
+ const path = require('path');
+ const HtmlWebpackPlugin = require('html-webpack-plugin');
+
+ module.exports = {
+   entry: {
+     app: './src/index.js',
+   },
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'Production',
+     }),
+   ],
+   output: {
+     filename: '[name].bundle.js',
+     path: path.resolve(__dirname, 'dist'),
+     clean: true,
+   },
+ };
```

webpack.dev.js

```
+ const { merge } = require('webpack-merge');
+ const common = require('./webpack.common.js');
+
+ module.exports = merge(common, {
+   mode: 'development',
+   devtool: 'inline-source-map',
+   devServer: {
+     static: './dist',
+   },
+ });
```

webpack.prod.js

```
+ const { merge } = require('webpack-merge');
+ const common = require('./webpack.common.js');
+
+ module.exports = merge(common, {
+   mode: 'production',
+ });
```

In webpack.common.js, we now have setup our entry and output configuration and we've included any plugins that are required for both environments. In webpack.dev.js, we've set mode to development. Also, we've added the recommended devtool for that environment (strong source mapping), as well as our devServer configuration. Finally, in webpack.prod.js,mode is set to production which loads TerserPlugin, which was first introduced by the tree shaking guide.

Note the use of merge() calls in the environment-specific configurations to include our common configuration in webpack.dev.js and webpack.prod.js. The webpack-merge tool offers a variety of advanced features for merging but for our use case we won't need any of that.

## NPM Scripts

Now, let's modify our npm scripts to use the new configuration files. For the start script, which runs webpack-dev-server, we will use webpack.dev.js, and for the build script, which runs webpack to create a production build, we will use webpack.prod.js:

package.json

```
  {
    "name": "development",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "scripts": {
-     "start": "webpack serve --open",
+     "start": "webpack serve --open --config webpack.dev.js",
-     "build": "webpack"
+     "build": "webpack --config webpack.prod.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "css-loader": "^0.28.4",
      "csv-loader": "^2.1.1",
      "express": "^4.15.3",
      "file-loader": "^0.11.2",
      "html-webpack-plugin": "^2.29.0",
      "style-loader": "^0.18.2",
      "webpack": "^4.30.0",
      "webpack-dev-middleware": "^1.12.0",
      "webpack-dev-server": "^2.9.1",
      "webpack-merge": "^4.1.0",
      "xml-loader": "^1.2.1"
    }
  }
```

Feel free to run those scripts and see how the output changes as we continue adding to our production configuration.

## Specify the Mode

Many libraries will key off the process.env.NODE_ENV variable to determine what should be included in the library. For example, when process.env.NODE_ENV is not set to 'production' some libraries may add additional logging and testing to make debugging easier. However, with process.env.NODE_ENV set to 'production' they might drop or add significant portions of code to optimize how things run for your actual users. Since webpack v4, specifying mode automatically configures process.env.NODE_ENV for you through DefinePlugin:

webpack.prod.js

```
  const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    mode: 'production',
  });
```

If you're using a library like react, you should actually see a significant drop in bundle size after adding DefinePlugin. Also, note that any of our local /src code can key off of this as well, so the following check would be valid:

src/index.js

```
  import { cube } from './math.js';
+
+ if (process.env.NODE_ENV !== 'production') {
+   console.log('Looks like we are in development mode!');
+ }

  function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
```

## Minification

Webpack v4+ will minify your code by default in production mode.

Note that while the TerserPlugin is a great place to start for minification and being used by default, there are other options out there:

- ClosureWebpackPlugin

If you decide to try another minification plugin, make sure your new choice also drops dead code as described in the tree shaking guide and provide it as the optimization.minimizer.

## Source Mapping

We encourage you to have source maps enabled in production, as they are useful for debugging as well as running benchmark tests. That said, you should choose one with a fairly quick build speed that's recommended for production use (see devtool). For this guide, we'll use the source-map option in the production as opposed to the inline-source-map we used in the development:

webpack.prod.js

```
  const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    mode: 'production',
+   devtool: 'source-map',
  });
```

## Minimize CSS

It is crucial to minimize your CSS for production. Please see the Minimizing for Production section.

## CLI Alternatives

Many of the options described above can be set as command line arguments. For example, optimization.minimize can be set with --optimization-minimize, and mode can be set with --mode. Run npx webpack --help=verbose for a full list of CLI arguments.

While these shorthand methods are useful, we recommend setting these options in a webpack configuration file for more configurability.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/production
