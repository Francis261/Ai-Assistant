# CssMinimizerWebpackPlugin

Source: https://devdocs.io/webpack~5/plugins/css-minimizer-webpack-plugin

This plugin uses cssnano to optimize and minify your CSS.

Just like optimize-css-assets-webpack-plugin but more accurate with source maps and assets using query string, allows caching and works in parallel mode.

## Getting Started

To begin, you'll need to install css-minimizer-webpack-plugin:

```
npm install css-minimizer-webpack-plugin --save-dev
```

or

```
yarn add -D css-minimizer-webpack-plugin
```

or

```
pnpm add -D css-minimizer-webpack-plugin
```

Then add the plugin to your webpack configuration. For example:

webpack.config.js

```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

This will enable CSS optimization only in production mode.

If you want to run it also in development set the optimization.minimize option to true:

webpack.config.js

```
// [...]
module.exports = {
  optimization: {
    // [...]
    minimize: true,
  },
};
```

And run webpack via your preferred method.

## Note about source maps

Works only with source-map, inline-source-map, hidden-source-map and nosources-source-map values for the devtool option.

Why? Because CSS support only these source map types.

The plugin respect the devtool and using the SourceMapDevToolPlugin plugin. Using supported devtool values enable source map generation. Using SourceMapDevToolPlugin with enabled the columns option enables source map generation.

Use source maps to map error message locations to modules (this slows down the compilation). If you use your own minify function please read the minify section for handling source maps correctly.

## Options

### test

Type: String|RegExp|Array<String|RegExp> - default: /\.css(\?.*)?$/i

Test to match files against.

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      }),
    ],
  },
};
```

### include

Type: String|RegExp|Array<String|RegExp> Default: undefined

Files to include.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        include: /\/includes/,
      }),
    ],
  },
};
```

### exclude

Type: String|RegExp|Array<String|RegExp> Default: undefined

Files to exclude.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        exclude: /\/excludes/,
      }),
    ],
  },
};
```

### parallel

Type: Boolean|Number Default: true

Use multi-process parallel running to improve the build speed. Default number of concurrent runs: os.cpus().length - 1.

ℹ️ Parallelization can speed up your build significantly and is therefore highly recommended. If a parallelization is enabled, the packages in minimizerOptions must be required via strings (packageName or require.resolve(packageName)). Read more in minimizerOptions

#### Boolean

Enable/disable multi-process parallel running.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
};
```

#### Number

Enable multi-process parallel running and set number of concurrent runs.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
};
```

### minify

Type: Function|Array<Function> Default: CssMinimizerPlugin.cssnanoMinify

Allows overriding default minify function. By default, plugin uses cssnano package. Useful for using and testing unpublished versions or forks.

Possible options:

- CssMinimizerPlugin.cssnanoMinify
- CssMinimizerPlugin.cssoMinify
- CssMinimizerPlugin.cleanCssMinify
- CssMinimizerPlugin.esbuildMinify
- CssMinimizerPlugin.lightningCssMinify (previouslyCssMinimizerPlugin.parcelCssMinify, the package was renamed, but we keep it for backward compatibility)
- async (data, inputMap, minimizerOptions) => {return {code: "a{color: red}", map: "...", warnings: [], errors: []}}

[!WARNING]

Always use require inside minify function when parallel option enabled.

#### Function

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          level: {
            1: {
              roundingPrecision: "all=3,px=5",
            },
          },
        },
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
    ],
  },
};
```

#### Array

If an array of functions is passed to the minify option, the minimizerOptions must also be an array. The function index in the minify array corresponds to the options object with the same index in the minimizerOptions array.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: [
          {}, // Options for the first function (CssMinimizerPlugin.cssnanoMinify)
          {}, // Options for the second function (CssMinimizerPlugin.cleanCssMinify)
          {}, // Options for the third function
        ],
        minify: [
          CssMinimizerPlugin.cssnanoMinify,
          CssMinimizerPlugin.cleanCssMinify,
          async (data, inputMap, minimizerOptions) => {
            // To do something
            return {
              code: `a{color: red}`,
              map: `{"version": "3", ...}`,
              warnings: [],
              errors: [],
            };
          },
        ],
      }),
    ],
  },
};
```

### minimizerOptions

Type: Object|Array<Object> Default: { preset: 'default' }

Cssnano optimisations options.

#### Object

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
```

#### Array

The function index in the minify array corresponds to the options object with the same index in the minimizerOptions array. If you use minimizerOptions like object, all minify function accept it.

If a parallelization is enabled, the packages in minimizerOptions must be required via strings (packageName or require.resolve(packageName)). In this case, we shouldn't use require/import.

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: require.resolve("cssnano-preset-simple"),
        },
      }),
    ],
  },
};
```

##### processorOptions (⚠ only cssnano)

Type: Object Default: { from: assetName }

Allows filtering options processoptions for the cssnano. The parser, stringifier and syntax can be either a function or a string indicating the module that will be imported.

[!WARNING]

If a function is passed, the parallel option must be disabled..

```
import sugarss from "sugarss";

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: false,
        minimizerOptions: {
          processorOptions: {
            parser: sugarss,
          },
        },
      }),
    ],
  },
};
```

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          processorOptions: {
            parser: "sugarss",
          },
        },
      }),
    ],
  },
};
```

### warningsFilter

Type: Function<(warning, file, source) -> Boolean> Default: () => true

Allow filtering css-minimizer warnings (By default cssnano). Return true to keep the warning, a falsy value (false/null/undefined) otherwise.

[!WARNING]

The source argument will contain undefined if you don't use source maps.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        warningsFilter: (warning, file, source) => {
          if (/Dropping unreachable code/i.test(warning)) {
            return true;
          }

          if (/file\.css/i.test(file)) {
            return true;
          }

          if (/source\.css/i.test(source)) {
            return true;
          }

          return false;
        },
      }),
    ],
  },
};
```

## Examples

### Use sourcemaps

Don't forget to enable sourceMap options for all loaders.

```
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

### Remove all comments

Remove all comments (including comments starting with /*!).

```
module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};
```

### Using custom minifier csso

webpack.config.js

```
module.exports = {
  // Uncomment if you need source maps
  // devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cssoMinify,
        // Uncomment this line for options
        // minimizerOptions: { restructure: false },
      }),
    ],
  },
};
```

### Using custom minifier clean-css

webpack.config.js

```
module.exports = {
  // Uncomment if you need source maps
  // devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify,
        // Uncomment this line for options
        // minimizerOptions: { compatibility: 'ie11,-properties.merging' },
      }),
    ],
  },
};
```

### Using custom minifier esbuild

webpack.config.js

```
module.exports = {
  // Uncomment if you need source maps
  // devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.esbuildMinify,
      }),
    ],
  },
};
```

### Using custom minifier lightningcss, previously @parcel/css

webpack.config.js

```
module.exports = {
  // Uncomment if you need source maps
  // devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.lightningCssMinify,
        // Uncomment this line for options
        // minimizerOptions: { targets: { ie: 11 }, drafts: { nesting: true } },
      }),
    ],
  },
};
```

### Using custom minifier swc

webpack.config.js

```
module.exports = {
  // Uncomment if you need source maps
  // devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.swcMinify,
        // Uncomment this line for options
        // minimizerOptions: {},
      }),
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/css-minimizer-webpack-plugin
