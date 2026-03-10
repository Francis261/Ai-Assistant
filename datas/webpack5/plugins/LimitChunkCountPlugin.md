# LimitChunkCountPlugin

Source: https://devdocs.io/webpack~5/plugins/limit-chunk-count-plugin

While writing your code, you may have already added many code split points to load stuff on demand. After compiling you might notice that some chunks are too small - creating larger HTTP overhead. LimitChunkCountPlugin can post-process your chunks by merging them.

```
new webpack.optimize.LimitChunkCountPlugin({
  // Options...
});
```

## Options

The following options are supported:

### maxChunks

number

Limit the maximum number of chunks using a value greater than or equal to 1. Using 1 will prevent any additional chunks from being added as the entry/main chunk is also included in the count.

webpack.config.js

```
const webpack = require('webpack');
module.exports = {
  // ...
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5,
    }),
  ],
};
```

### minChunkSize

Keeping chunk size above the specified limit is no longer a feature of this plugin. Use MinChunkSizePlugin instead.

## Usage via CLI

This plugin and it's options can also be invoked via the CLI:

```
webpack --optimize-max-chunks 15
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/limit-chunk-count-plugin
