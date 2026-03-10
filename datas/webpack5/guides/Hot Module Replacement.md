# Hot Module Replacement

Source: https://devdocs.io/webpack~5/guides/hot-module-replacement

Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. It allows all kinds of modules to be updated at runtime without the need for a full refresh. This page focuses on implementation while the concepts page gives more details on how it works and why it's useful.

## Enabling HMR

This feature is great for productivity. All we need to do is update our webpack-dev-server configuration, and use webpack's built-in HMR plugin. We'll also remove the entry point for print.js as it will now be consumed by the index.js module.

Since webpack-dev-server v4.0.0, Hot Module Replacement is enabled by default.

webpack.config.js

```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
       app: './src/index.js',
-      print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
+     hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

you can also provide manual entry points for HMR:

webpack.config.js

```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const webpack = require("webpack");

  module.exports = {
    entry: {
       app: './src/index.js',
-      print: './src/print.js',
+      // Runtime code for hot module replacement
+      hot: 'webpack/hot/dev-server.js',
+      // Dev server client for web socket transport, hot and live reload logic
+      client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
+     // Dev server client for web socket transport, hot and live reload logic
+     hot: false,
+     client: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
+     // Plugin for hot module replacement
+     new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

Now let's update the index.js file so that when a change inside print.js is detected we tell webpack to accept the updated module.

index.js

```
  import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());
+
+ if (module.hot) {
+   module.hot.accept('./print.js', function() {
+     console.log('Accepting the updated printMe module!');
+     printMe();
+   })
+ }
```

Start changing the console.log statement in print.js, and you should see the following output in the browser console (don't worry about that button.onclick = printMe output for now, we will also update that part later).

print.js

```
  export default function printMe() {
-   console.log('I get called from print.js!');
+   console.log('Updating print.js...');
  }
```

console

```
[HMR] Waiting for update signal from WDS...
main.js:4395 [WDS] Hot Module Replacement enabled.
+ 2main.js:4395 [WDS] App updated. Recompiling...
+ main.js:4395 [WDS] App hot update...
+ main.js:4330 [HMR] Checking for updates on the server...
+ main.js:10024 Accepting the updated printMe module!
+ 0.4b8ee77….hot-update.js:10 Updating print.js...
+ main.js:4330 [HMR] Updated modules:
+ main.js:4330 [HMR]  - 20
```

## Via the Node.js API

When using Webpack Dev Server with the Node.js API, don't put the dev server options on the webpack configuration object. Instead, pass them as a second parameter upon creation. For example:

new WebpackDevServer(options, compiler)

To enable HMR, you also need to modify your webpack configuration object to include the HMR entry points. Here's a small example of how that might look:

dev-server.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = {
  mode: 'development',
  entry: [
    // Runtime code for hot module replacement
    'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Your entry
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  plugins: [
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
const compiler = webpack(config);

// `hot` and `client` options are disabled because we added them manually
const server = new webpackDevServer({ hot: false, client: false }, compiler);

(async () => {
  await server.start();
  console.log('dev server is running');
})();
```

See the full documentation of webpack-dev-server Node.js API.

## Gotchas

Hot Module Replacement can be tricky. To show this, let's go back to our working example. If you go ahead and click the button on the example page, you will realize the console is printing the old printMe function.

This is happening because the button's onclick event handler is still bound to the original printMe function.

To make this work with HMR we need to update that binding to the new printMe function using module.hot.accept:

index.js

```
  import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick event is bind to the original printMe function

    element.appendChild(btn);

    return element;
  }

- document.body.appendChild(component());
+ let element = component(); // Store the element to re-render on print.js changes
+ document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
-     printMe();
+     document.body.removeChild(element);
+     element = component(); // Re-render the "component" to update the click handler
+     document.body.appendChild(element);
    })
  }
```

This is only one example, but there are many others that can easily trip people up. Luckily, there are a lot of loaders out there (some of which are mentioned below) that will make hot module replacement much easier.

## HMR with Stylesheets

Hot Module Replacement with CSS is actually fairly straightforward with the help of the style-loader. This loader uses module.hot.accept behind the scenes to patch <style> tags when CSS dependencies are updated.

First let's install both loaders with the following command:

```
npm install --save-dev style-loader css-loader
```

Now let's update the configuration file to make use of the loader.

webpack.config.js

```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: ['style-loader', 'css-loader'],
+       },
+     ],
+   },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

Hot loading stylesheets can be done by importing them into a module:

project

```
  webpack-demo
  | - package.json
  | - webpack.config.js
  | - /dist
    | - bundle.js
  | - /src
    | - index.js
    | - print.js
+   | - styles.css
```

styles.css

```
body {
  background: blue;
}
```

index.js

```
  import _ from 'lodash';
  import printMe from './print.js';
+ import './styles.css';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick event is bind to the original printMe function

    element.appendChild(btn);

    return element;
  }

  let element = component();
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
  }
```

Change the style on body to background: red; and you should immediately see the page's background color change without a full refresh.

styles.css

```
  body {
-   background: blue;
+   background: red;
  }
```

## Other Code and Frameworks

There are many other loaders and examples out in the community to make HMR interact smoothly with a variety of frameworks and libraries...

- React Hot Loader: Tweak react components in real time.
- Vue Loader: This loader supports HMR for vue components out of the box.
- Elm Hot webpack Loader: Supports HMR for the Elm programming language.
- Angular HMR: No loader necessary! HMR support is built in the Angular CLI, add the --hmr flag to you ng serve command.
- Svelte Loader: This loader supports HMR for Svelte components out of the box.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/hot-module-replacement
