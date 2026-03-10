# Authoring Libraries

Source: https://devdocs.io/webpack~5/guides/author-libraries

Aside from applications, webpack can also be used to bundle JavaScript libraries. The following guide is meant for library authors looking to streamline their bundling strategy.

## Authoring a Library

Let's assume that we are writing a small library, webpack-numbers, that allows users to convert the numbers 1 through 5 from their numeric representation to a textual one and vice-versa, e.g. 2 to 'two'.

The basic project structure would look like this:

project

```
+  |- webpack.config.js
+  |- package.json
+  |- /src
+    |- index.js
+    |- ref.json
```

Initialize the project with npm, then install webpack, webpack-cli and lodash:

```
npm init -y
npm install --save-dev webpack webpack-cli lodash
```

We install lodash as devDependencies instead of dependencies because we don't want to bundle it into our library, or our library could be easily bloated.

src/ref.json

```
[
  {
    "num": 1,
    "word": "One"
  },
  {
    "num": 2,
    "word": "Two"
  },
  {
    "num": 3,
    "word": "Three"
  },
  {
    "num": 4,
    "word": "Four"
  },
  {
    "num": 5,
    "word": "Five"
  },
  {
    "num": 0,
    "word": "Zero"
  }
]
```

src/index.js

```
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
```

## Webpack Configuration

Let's start with this basic webpack configuration:

webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
  },
};
```

In the above example, we're telling webpack to bundle src/index.js into dist/webpack-numbers.js.

## Expose the Library

So far everything should be the same as bundling an application, and here comes the different part – we need to expose exports from the entry point through output.library option.

webpack.config.js

```
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
+     library: "webpackNumbers",
    },
  };
```

We exposed the entry point as webpackNumbers so users can use it through script tag:

```
<script src="https://example.org/webpack-numbers.js"></script>
<script>
  window.webpackNumbers.wordToNum('Five');
</script>
```

However it only works when it's referenced through script tag, it can't be used in other environments like CommonJS, AMD, Node.js, etc.

As a library author, we want it to be compatible in different environments, i.e., users should be able to consume the bundled library in multiple ways listed below:

- CommonJS module require: const webpackNumbers = require('webpack-numbers');
// ...
webpackNumbers.wordToNum('Two');
- AMD module require: require(['webpackNumbers'], function (webpackNumbers) {
 // ...
 webpackNumbers.wordToNum('Two');
});
- script tag: <!DOCTYPE html>
<html>
 ...
 <script src="https://example.org/webpack-numbers.js"></script>
 <script>
 // ...
 // Global variable
 webpackNumbers.wordToNum('Five');
 // Property in the window object
 window.webpackNumbers.wordToNum('Five');
 // ...
 </script>
</html>

CommonJS module require:

```
const webpackNumbers = require('webpack-numbers');
// ...
webpackNumbers.wordToNum('Two');
```

AMD module require:

```
require(['webpackNumbers'], function (webpackNumbers) {
  // ...
  webpackNumbers.wordToNum('Two');
});
```

script tag:

```
<!DOCTYPE html>
<html>
  ...
  <script src="https://example.org/webpack-numbers.js"></script>
  <script>
    // ...
    // Global variable
    webpackNumbers.wordToNum('Five');
    // Property in the window object
    window.webpackNumbers.wordToNum('Five');
    // ...
  </script>
</html>
```

Let's update the output.library option with its type set to 'umd':

```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'webpack-numbers.js',
-    library: 'webpackNumbers',
+    globalObject: 'this',
+    library: {
+      name: 'webpackNumbers',
+      type: 'umd',
+    },
   },
 };
```

Now webpack will bundle a library that can work with CommonJS, AMD, and script tag.

## Externalize Lodash

Now, if you run npx webpack, you will find that a largish bundle is created. If you inspect the file, you'll see that lodash has been bundled along with your code. In this case, we'd prefer to treat lodash as a peer dependency. Meaning that the consumer should already have lodash installed. Hence you would want to give up control of this external library to the consumer of your library.

This can be done using the externals configuration:

webpack.config.js

```
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      library: {
        name: "webpackNumbers",
        type: "umd"
      },
    },
+   externals: {
+     lodash: {
+       commonjs: 'lodash',
+       commonjs2: 'lodash',
+       amd: 'lodash',
+       root: '_',
+     },
+   },
  };
```

This means that your library expects a dependency named lodash to be available in the consumer's environment.

### External Limitations

For libraries that use several files from a dependency:

```
import A from 'library/one';
import B from 'library/two';

// ...
```

You won't be able to exclude them from the bundle by specifying library in the externals. You'll either need to exclude them one by one or by using a regular expression.

```
module.exports = {
  //...
  externals: [
    'library/one',
    'library/two',
    // Everything that starts with "library/"
    /^library\/.+$/,
  ],
};
```

## Final Steps

Optimize your output for production by following the steps mentioned in the production guide. Let's also add the path to your generated bundle as the package's main field in with the package.json

package.json

```
{
  ...
  "main": "dist/webpack-numbers.js",
  ...
}
```

Or, to add it as a standard module as per this guide:

```
{
  ...
  "module": "src/index.js",
  ...
}
```

The key main refers to the standard from package.json, and module to a proposal to allow the JavaScript ecosystem upgrade to use ES2015 modules without breaking backwards compatibility.

Now you can publish it as an npm package and find it at unpkg.com to distribute it to your users.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/author-libraries
