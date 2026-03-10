# EvalSourceMapDevToolPlugin

Source: https://devdocs.io/webpack~5/plugins/eval-source-map-dev-tool-plugin

This plugin enables more fine grained control of source map generation. It is also enabled automatically by certain settings of the devtool configuration option.

```
new webpack.EvalSourceMapDevToolPlugin(options);
```

## Options

The following options are supported:

- test (string|RegExp|array): Include source maps for modules based on their extension (defaults to .js and .css).
- include (string|RegExp|array): Include source maps for module paths that match the given value.
- exclude (string|RegExp|array): Exclude modules that match the given value from source map generation.
- append (string|function): Appends the given value to the original asset. Usually the #sourceMappingURL comment. [url] is replaced with a URL to the source map file. Starting from version 5.84.0, webpack allows the append option to be a function that accepts path data and an asset info object as arguments, and returns a string. (pathData: PathData, assetInfo?: AssetInfo) => string;
- moduleFilenameTemplate (string): See output.devtoolModuleFilenameTemplate.
- module (boolean): Indicates whether loaders should generate source maps (defaults to true).
- columns (boolean): Indicates whether column mappings should be used (defaults to true).
- protocol (string): Allows user to override default protocol (webpack-internal://)

test (string|RegExp|array): Include source maps for modules based on their extension (defaults to .js and .css).

include (string|RegExp|array): Include source maps for module paths that match the given value.

exclude (string|RegExp|array): Exclude modules that match the given value from source map generation.

append (string|function): Appends the given value to the original asset. Usually the #sourceMappingURL comment. [url] is replaced with a URL to the source map file.

Starting from version 5.84.0, webpack allows the append option to be a function that accepts path data and an asset info object as arguments, and returns a string.

```
(pathData: PathData, assetInfo?: AssetInfo) => string;
```

moduleFilenameTemplate (string): See output.devtoolModuleFilenameTemplate.

module (boolean): Indicates whether loaders should generate source maps (defaults to true).

columns (boolean): Indicates whether column mappings should be used (defaults to true).

protocol (string): Allows user to override default protocol (webpack-internal://)

## Examples

The following examples demonstrate some common use cases for this plugin.

### Basic Use Case

You can use the following code to replace the configuration option devtool: eval-source-map with an equivalent custom plugin configuration:

```
module.exports = {
  // ...
  devtool: false,
  plugins: [new webpack.EvalSourceMapDevToolPlugin({})],
};
```

### Exclude Vendor Maps

The following code would exclude source maps for any modules in the vendor.js bundle:

```
new webpack.EvalSourceMapDevToolPlugin({
  exclude: ['vendor.js'],
});
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/eval-source-map-dev-tool-plugin
