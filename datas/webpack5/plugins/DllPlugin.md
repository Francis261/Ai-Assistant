# DllPlugin

Source: https://devdocs.io/webpack~5/plugins/dll-plugin

The DllPlugin and DllReferencePlugin provide means to split bundles in a way that can drastically improve build time performance. The term "DLL" stands for Dynamic-link library which was originally introduced by Microsoft.

## DllPlugin

This plugin is used in a separate webpack configuration exclusively to create a dll-only-bundle. It creates a manifest.json file, which is used by the DllReferencePlugin to map dependencies.

- context (optional): context of requests in the manifest file (defaults to the webpack context.)
- format (boolean = false): If true, manifest json file (output) will be formatted.
- name: name of the exposed dll function (TemplatePaths: [fullhash], [chunkhash], [contenthash], & [name] )
- path: absolute path to the manifest json file (output)
- entryOnly (boolean = true): if true, only entry points will be exposed
- type: type of the dll bundle

```
new webpack.DllPlugin(options);
```

Creates a manifest.json which is written to the given path. It contains mappings from require and import requests to module ids. It is used by the DllReferencePlugin.

Combine this plugin with output.library option to expose (aka, put into the global scope) the dll function.

## DllReferencePlugin

This plugin is used in the primary webpack config, it references the dll-only-bundle(s) to require pre-built dependencies.

- context: (absolute path) context of requests in the manifest (or content property)
- extensions: Extensions used to resolve modules in the dll bundle (only used when using 'scope').
- manifest : an object containing content and name or a string to the absolute path of the JSON manifest to be loaded upon compilation
- content (optional): the mappings from request to module id (defaults to manifest.content)
- name (optional): an identifier where the dll is exposed (defaults to manifest.name) (see also externals)
- scope (optional): prefix which is used for accessing the content of the dll
- sourceType (optional): how the dll is exposed (libraryTarget)

```
new webpack.DllReferencePlugin(options);
```

References a dll manifest file to map dependency names to module ids, then requires them as needed using the internal __webpack_require__ function.

### Modes

This plugin can be used in two different modes, scoped and mapped.

#### Scoped Mode

The content of the dll is accessible under a module prefix. i.e. with scope = 'xyz' a file abc in the dll can be access via require('xyz/abc').

#### Mapped Mode

The content of the dll is mapped to the current directory. If a required file matches a file in the dll (after resolving), then the file from the dll is used instead.

Because this happens after resolving every file in the dll bundle, the same paths must be available for the consumer of the dll bundle. i.e. if the dll contains lodash and the file abc, require('lodash') and require('./abc') will be used from the dll, rather than building them into the main bundle.

## Usage

webpack.vendor.config.js

```
const path = require('path');

new webpack.DllPlugin({
  context: __dirname,
  name: '[name]_[fullhash]',
  path: path.join(__dirname, 'manifest.json'),
});
```

webpack.app.config.js

```
new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: require('./manifest.json'),
  scope: 'xyz',
  sourceType: 'commonjs2',
});
```

## Examples

Vendor and User

Two separate example folders. Demonstrates scope and context.

## References

### Source

- DllPlugin source
- DllReferencePlugin source
- DllEntryPlugin source
- DllModuleFactory source
- ManifestPlugin source

### Tests

- DllPlugin creation test
- DllPlugin without scope test
- DllReferencePlugin use Dll test

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/dll-plugin
