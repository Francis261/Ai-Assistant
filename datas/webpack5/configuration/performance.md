# Performance

Source: https://devdocs.io/webpack~5/configuration/performance#performance

These options allows you to control how webpack notifies you of assets and entry points that exceed a specific file limit. This feature was inspired by the idea of webpack Performance Budgets.

## performance

object

Configure how performance hints are shown. For example if you have an asset that is over 250kb, webpack will emit a warning notifying you of this.

### performance.assetFilter

function(assetFilename) => boolean

This property allows webpack to control what files are used to calculate performance hints. The default function is:

```
function assetFilter(assetFilename) {
  return !/\.map$/.test(assetFilename);
}
```

You can override this property by passing your own function in:

```
module.exports = {
  //...
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
  },
};
```

The example above will only give you performance hints based on .js files.

### performance.hints

string = 'warning': 'error' | 'warning' boolean: false

Turns hints on/off. In addition, tells webpack to throw either an error or a warning when hints are found.

Given an asset is created that is over 250kb:

```
module.exports = {
  //...
  performance: {
    hints: false,
  },
};
```

No hint warnings or errors are shown.

```
module.exports = {
  //...
  performance: {
    hints: 'warning',
  },
};
```

A warning will be displayed notifying you of a large asset. We recommend something like this for development environments.

```
module.exports = {
  //...
  performance: {
    hints: 'error',
  },
};
```

An error will be displayed notifying you of a large asset. We recommend using hints: "error" during production builds to help prevent deploying production bundles that are too large, impacting webpage performance.

### performance.maxAssetSize

number = 250000

An asset is any emitted file from webpack. This option controls when webpack emits a performance hint based on individual asset size in bytes.

```
module.exports = {
  //...
  performance: {
    maxAssetSize: 100000,
  },
};
```

### performance.maxEntrypointSize

number = 250000

An entry point represents all assets that would be utilized during initial load time for a specific entry. This option controls when webpack should emit performance hints based on the maximum entry point size in bytes.

```
module.exports = {
  //...
  performance: {
    maxEntrypointSize: 400000,
  },
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/performance
