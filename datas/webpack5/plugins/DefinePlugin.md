# DefinePlugin

Source: https://devdocs.io/webpack~5/plugins/define-plugin

The DefinePlugin replaces variables in your code with other values or expressions at compile time. This can be useful for allowing different behavior between development builds and production builds. If you perform logging in your development build but not in the production build you might use a global constant to determine whether logging takes place. That's where DefinePlugin shines, set it and forget it rules for development and production builds.

```
new webpack.DefinePlugin({
  // Definitions...
});
```

## Usage

Each key passed into DefinePlugin is an identifier or multiple identifiers joined with ..

- If the value is a string it will be used as a code fragment.
- If the value isn't a string, it will be stringified (including functions).
- If the value is an object all keys are defined the same way.
- If you prefix typeof to the key, it's only defined for typeof calls.

The values will be inlined into the code allowing a minification pass to remove the redundant conditional.

```
new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  VERSION: JSON.stringify('5fa3b9'),
  BROWSER_SUPPORTS_HTML5: true,
  TWO: '1+1',
  'typeof window': JSON.stringify('object'),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});
```

```
console.log('Running App version ' + VERSION);
if (!BROWSER_SUPPORTS_HTML5) require('html5shiv');
```

```
if (!PRODUCTION) {
  console.log('Debug info');
}

if (PRODUCTION) {
  console.log('Production log');
}
```

After passing through webpack with no minification results in:

```
if (!true) {
  console.log('Debug info');
}
if (true) {
  console.log('Production log');
}
```

and then after a minification pass results in:

```
console.log('Production log');
```

## Feature Flags

Enable/disable features in production/development build using feature flags.

```
new webpack.DefinePlugin({
  NICE_FEATURE: JSON.stringify(true),
  EXPERIMENTAL_FEATURE: JSON.stringify(false),
});
```

## Service URLs

Use a different service URL in production/development builds:

```
new webpack.DefinePlugin({
  SERVICE_URL: JSON.stringify('https://dev.example.com'),
});
```

## Runtime values via runtimeValue

function (getterFunction, [string] | true | object) => getterFunction()

It is possible to define variables with values that rely on files and will be re-evaluated when such files change in the file system. This means webpack will rebuild when such watched files change.

There're two arguments for webpack.DefinePlugin.runtimeValue function:

- The first argument is a function(module, key, version) that should return the value to be assigned to the definition.
- The second argument could either be an array of file paths to watch for or a true to flag the module as uncacheable. Since 5.26.0, it can also take an object argument with the following properties:
  - fileDependencies?: string[] A list of files the function depends on.
  - contextDependencies?: string[] A list of directories the function depends on.
  - missingDependencies?: string[] A list of not existing files the function depends on.
  - buildDependencies?: string[] A list of build dependencies the function depends on.
  - version?: string | () => string A version of the function.

The first argument is a function(module, key, version) that should return the value to be assigned to the definition.

The second argument could either be an array of file paths to watch for or a true to flag the module as uncacheable. Since 5.26.0, it can also take an object argument with the following properties:

- fileDependencies?: string[] A list of files the function depends on.
- contextDependencies?: string[] A list of directories the function depends on.
- missingDependencies?: string[] A list of not existing files the function depends on.
- buildDependencies?: string[] A list of build dependencies the function depends on.
- version?: string | () => string A version of the function.

```
const fileDep = path.resolve(__dirname, 'sample.txt');

new webpack.DefinePlugin({
  BUILT_AT: webpack.DefinePlugin.runtimeValue(Date.now, {
    fileDependencies: [fileDep],
  }),
});
```

The value of BUILT_AT would be the time at which the 'sample.txt' was last updated in the file system, e.g. 1597953013291.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/define-plugin
