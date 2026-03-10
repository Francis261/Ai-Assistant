# AutomaticPrefetchPlugin

Source: https://devdocs.io/webpack~5/plugins/automatic-prefetch-plugin

The AutomaticPrefetchPlugin discovers all modules from the previous compilation upfront while watching for changes, trying to improve the incremental build times. Compared to PrefetchPlugin which discovers a single module upfront.

webpack.config.js

```
module.exports = {
  // ...
  plugins: [new webpack.AutomaticPrefetchPlugin()],
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/automatic-prefetch-plugin
