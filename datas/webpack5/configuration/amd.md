# Other Options

Source: https://devdocs.io/webpack~5/configuration/other-options#amd

These are the remaining configuration options supported by webpack.

## amd

object boolean: false

Set the value of require.amd or define.amd. Setting amd to false will disable webpack's AMD support.

webpack.config.js

```
module.exports = {
  //...
  amd: {
    jQuery: true,
  },
};
```

Certain popular modules written for AMD, most notably jQuery versions 1.7.0 to 1.9.1, will only register as an AMD module if the loader indicates it has taken special allowances for multiple versions being included on a page.

The allowances were the ability to restrict registrations to a specific version or to support different sandboxes with different defined modules.

This option allows you to set the key your module looks for to a truthy value. As it happens, the AMD support in webpack ignores the defined name anyways.

## bail

boolean = false

Fail out on the first error instead of tolerating it. By default webpack will log these errors in red in the terminal, as well as the browser console when using HMR, but continue bundling. To enable it:

webpack.config.js

```
module.exports = {
  //...
  bail: true,
};
```

This will force webpack to exit its bundling process.

## dependencies

[string]

A list of name defining all sibling configurations it depends on. Dependent configurations need to be compiled first.

In watch mode dependencies will invalidate the compiler when:

1. the dependency has changed
2. a dependency is currently compiling or invalid

Remember that current configuration will not compile until its dependencies are done.

webpack.config.js

```
module.exports = [
  {
    name: 'client',
    target: 'web',
    // …
  },
  {
    name: 'server',
    target: 'node',
    dependencies: ['client'],
  },
];
```

## ignoreWarnings

[RegExp, function (WebpackError, Compilation) => boolean, {module?: RegExp, file?: RegExp, message?: RegExp}]

Tells webpack to ignore specific warnings. This can be done with a RegExp, a custom function to select warnings based on the raw warning instance which is getting WebpackError and Compilation as arguments and returns a boolean, an object with the following properties:

- file : A RegExp to select the origin file for the warning.
- message : A RegExp to select the warning message.
- module : A RegExp to select the origin module for the warning.

ignoreWarnings must be an array of any or all of the above.

```
module.exports = {
  //...
  ignoreWarnings: [
    {
      module: /module2\.js\?[34]/, // A RegExp
    },
    {
      module: /[13]/,
      message: /homepage/,
    },
    /warning from compiler/,
    (warning) => true,
  ],
};
```

## loader

object

Expose custom values into the loader context.

For example, you can define a new variable in the loader context:

webpack.config.js

```
module.exports = {
  // ...
  loader: {
    answer: 42,
  },
};
```

Then use this.answer to get its value in the loader:

custom-loader.js

```
module.exports = function (source) {
  // ...
  console.log(this.answer); // will log `42` here
  return source;
};
```

## name

string

Name of the configuration. Used when loading multiple configurations.

webpack.config.js

```
module.exports = {
  //...
  name: 'admin-app',
};
```

## parallelism

number = 100

Limit the number of parallel processed modules. Can be used to fine tune performance or to get more reliable profiling results.

## profile

boolean

Capture a "profile" of the application, including statistics and hints, which can then be dissected using the Analyze tool. It will also log out a summary of module timings.

## recordsInputPath

string

Specify the file from which to read the last set of records. This can be used to rename a records file. See the example below.

## recordsOutputPath

string

Specify where the records should be written. The following example shows how you might use this option in combination with recordsInputPath to rename a records file:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  recordsInputPath: path.join(__dirname, 'records.json'),
  recordsOutputPath: path.join(__dirname, 'newRecords.json'),
};
```

## recordsPath

string

Use this option to generate a JSON file containing webpack "records" – pieces of data used to store module identifiers across multiple builds. You can use this file to track how modules change between builds. To generate one, specify a location:

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  recordsPath: path.join(__dirname, 'records.json'),
};
```

Records are particularly useful if you have a complex setup that leverages Code Splitting. The data can be used to ensure the split bundles are achieving the caching behavior you need.

## snapshot

object

snapshot options decide how the file system snapshots are created and invalidated.

webpack.config.js

```
const path = require('path');
module.exports = {
  // ...
  snapshot: {
    managedPaths: [path.resolve(__dirname, '../node_modules')],
    immutablePaths: [],
    unmanagedPaths: [],
    buildDependencies: {
      hash: true,
      timestamp: true,
    },
    module: {
      timestamp: true,
    },
    resolve: {
      timestamp: true,
    },
    resolveBuildDependencies: {
      hash: true,
      timestamp: true,
    },
  },
};
```

### buildDependencies

object = { hash boolean = true, timestamp boolean = true }

Snapshots for build dependencies when using the persistent cache.

- hash: Compare content hashes to determine invalidation (more expensive than timestamp, but changes less often).
- timestamp: Compare timestamps to determine invalidation.

Both hash and timestamp are optional.

- { hash: true }: Good for CI caching with a fresh checkout which doesn't keep timestamps and uses hashes.
- { timestamp: true }: Good for local development caching.
- { timestamp: true, hash: true }: Good for both cases mentioned above. Timestamps are compared first, which is cheap because webpack doesn't need to read files to compute their hashes. Content hashes will be compared only when timestamps are the same, which leads to a small performance hit for the initial build.

### immutablePaths

(RegExp | string)[]

An array of paths that are managed by a package manager and contain a version or a hash in their paths so that all files are immutable.

Make sure to wrap the path in a capture group if you use regular expressions.

### managedPaths

(RegExp | string)[]

An array of paths that are managed by a package manager and can be trusted to not be modified otherwise.

Make sure you wrap the path in a capture group if you are using regular expressions so webpack can extract the path, for example, here's a RegExp webpack internally uses to match the node_modules directory:

```
/^(.+?[\\/]node_modules)[\\/]/
```

A common use case for managedPaths would be to exclude some folders from node_modules, e.g. you want webpack to know that files in the node_modules/@azure/msal-browser folder are expected to change, which can be done with a regular expression like the one below:

```
module.exports = {
  snapshot: {
    managedPaths: [
      /^(.+?[\\/]node_modules[\\/](?!(@azure[\\/]msal-browser))(@.+?[\\/])?.+?)[\\/]/,
    ],
  },
};
```

### unmanagedPaths

(RegExp | string)[]

An array of paths that are not managed by a package manager and the contents are subject to change.

Make sure to wrap the path in a capture group if you use regular expressions.

### module

object = {hash boolean = true, timestamp boolean = true}

Snapshots for building modules.

- hash: Compare content hashes to determine invalidation (more expensive than timestamp, but changes less often).
- timestamp: Compare timestamps to determine invalidation.

### resolve

object = {hash boolean = true, timestamp boolean = true}

Snapshots for resolving of requests.

- hash: Compare content hashes to determine invalidation (more expensive than timestamp, but changes less often).
- timestamp: Compare timestamps to determine invalidation.

### resolveBuildDependencies

object = {hash boolean = true, timestamp boolean = true}

Snapshots for resolving of build dependencies when using the persistent cache.

- hash: Compare content hashes to determine invalidation (more expensive than timestamp, but changes less often).
- timestamp: Compare timestamps to determine invalidation.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/other-options
