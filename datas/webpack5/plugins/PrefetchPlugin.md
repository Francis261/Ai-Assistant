# PrefetchPlugin

Source: https://devdocs.io/webpack~5/plugins/prefetch-plugin

Prefetch normal module requests, causing them to be resolved and built before the first import or require of that module occurs. Using this plugin can boost performance. Try to profile the build first to determine clever prefetching points.

```
new webpack.PrefetchPlugin([context], request);
```

## Options

- context: An absolute path to a directory
- request: A request string for a normal module

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/prefetch-plugin
