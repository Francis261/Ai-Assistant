# source-map-loader

Source: https://devdocs.io/webpack~5/loaders/source-map-loader

Extracts source maps from existing source files (from their sourceMappingURL).

## Getting Started

To begin, you'll need to install source-map-loader:

```
npm i -D source-map-loader
```

or

```
yarn add -D source-map-loader
```

or

```
pnpm add -D source-map-loader
```

Then add the plugin to your webpack config. For example:

file.js

```
import css from "file.css";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
```

The source-map-loader extracts existing source maps from all JavaScript entries. This includes both inline source maps as well as those linked via URL. All source map data is passed to webpack for processing as per a chosen source map style specified by the devtool option in webpack.config.js. This loader is especially useful when using 3rd-party libraries having their own source maps. If not extracted and processed into the source map of the webpack bundle, browsers may misinterpret source map data. source-map-loader allows webpack to maintain source map data continuity across libraries so ease of debugging is preserved. The source-map-loader will extract from any JavaScript file, including those in the node_modules directory. Be mindful in setting include and exclude rule conditions to maximize bundling performance.

And run webpack via your preferred method.

## Options

### filterSourceMappingUrl

Type: Function Default: undefined

Allows you to specify the behavior of the loader for SourceMappingURL comment.

The function must return one of the values:

- true or 'consume' - consume the source map and remove SourceMappingURL comment (default behavior)
- false or 'remove' - do not consume the source map and remove SourceMappingURL comment
- skip - do not consume the source map and do not remove SourceMappingURL comment

Example configuration:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader",
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                if (/broker-source-map-url\.js$/i.test(url)) {
                  return false;
                }

                if (/keep-source-mapping-url\.js$/i.test(resourcePath)) {
                  return "skip";
                }

                return true;
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Examples

### Ignoring Warnings

To ignore warnings, you can use the following configuration:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],
};
```

More information about the ignoreWarnings option can be found here

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/source-map-loader
