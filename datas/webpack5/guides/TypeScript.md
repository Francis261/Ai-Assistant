# TypeScript

Source: https://devdocs.io/webpack~5/guides/typescript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. In this guide we will learn how to integrate TypeScript with webpack.

## Basic Setup

First install the TypeScript compiler and loader by running:

```
npm install --save-dev typescript ts-loader
```

Now we'll modify the directory structure & the configuration files:

project

```
  webpack-demo
  |- package.json
  |- package-lock.json
+ |- tsconfig.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
    |- index.js
+   |- index.ts
  |- /node_modules
```

tsconfig.json

Let's set up a configuration to support JSX and compile TypeScript down to ES5...

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

See TypeScript's documentation to learn more about tsconfig.json configuration options.

To learn more about webpack configuration, see the configuration concepts.

Now let's configure webpack to handle TypeScript:

webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

This will direct webpack to enter through ./index.ts, load all .ts and .tsx files through the ts-loader, and output a bundle.js file in our current directory.

Now lets change the import of lodash in our ./index.ts due to the fact that there is no default export present in lodash definitions.

./index.ts

```
- import _ from 'lodash';
+ import * as _ from 'lodash';

  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
```

## Loader

ts-loader

We use ts-loader in this guide as it makes enabling additional webpack features, such as importing other web assets, a bit easier.

Note that if you're already using babel-loader to transpile your code, you can use @babel/preset-typescript and let Babel handle both your JavaScript and TypeScript files instead of using an additional loader. Keep in mind that, contrary to ts-loader, the underlying @babel/plugin-transform-typescript plugin does not perform any type checking.

## Source Maps

To learn more about source maps, see the development guide.

To enable source maps, we must configure TypeScript to output inline source maps to our compiled JavaScript files. The following line must be added to our TypeScript configuration:

tsconfig.json

```
  {
    "compilerOptions": {
      "outDir": "./dist/",
+     "sourceMap": true,
      "noImplicitAny": true,
      "module": "commonjs",
      "target": "es5",
      "jsx": "react",
      "allowJs": true,
      "moduleResolution": "node",
    }
  }
```

Now we need to tell webpack to extract these source maps and include in our final bundle:

webpack.config.js

```
  const path = require('path');

  module.exports = {
    entry: './src/index.ts',
+   devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
```

See the devtool documentation for more information.

## Client types

It's possible to use webpack specific features in your TypeScript code, such as import.meta.webpack. And webpack provides types for them as well, add a TypeScript reference directive to declare it:

```
/// <reference types="webpack/module" />
console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error
```

## Using Third Party Libraries

When installing third party libraries from npm, it is important to remember to install the typing definition for that library.

For example, if we want to install lodash we can run the following command to get the typings for it:

```
npm install --save-dev @types/lodash
```

If the npm package already includes its declaration typings in the package bundle, downloading the corresponding @types package is not needed. For more information see the TypeScript changelog blog.

## Importing Other Assets

To use non-code assets with TypeScript, we need to defer the type for these imports. This requires a custom.d.ts file which signifies custom definitions for TypeScript in our project. Let's set up a declaration for .svg files:

custom.d.ts

```
declare module '*.svg' {
  const content: any;
  export default content;
}
```

Here we declare a new module for SVGs by specifying any import that ends in .svg and defining the module's content as any. We could be more explicit about it being a url by defining the type as string. The same concept applies to other assets including CSS, SCSS, JSON and more.

## Build Performance

See the Build Performance guide on build tooling.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/typescript
