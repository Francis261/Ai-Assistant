# MinChunkSizePlugin

Source: https://devdocs.io/webpack~5/plugins/min-chunk-size-plugin

Keep chunk size above the specified limit by merging chunks that are smaller than the minChunkSize.

```
new webpack.optimize.MinChunkSizePlugin({
  minChunkSize: 10000, // Minimum number of characters
});
```

## Usage via CLI

This plugin and it's options can also be invoked via the CLI:

```
webpack --optimize-min-chunk-size 10000
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/min-chunk-size-plugin
