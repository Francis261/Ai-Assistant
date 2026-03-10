# JsonMinimizerWebpackPlugin

Source: https://devdocs.io/webpack~5/plugins/json-minimizer-webpack-plugin

This plugin uses JSON.stringify() to minify your JSON.

## Getting Started

To begin, you'll need to install json-minimizer-webpack-plugin:

```
npm install json-minimizer-webpack-plugin --save-dev
```

or

```
yarn add -D json-minimizer-webpack-plugin
```

or

```
pnpm add -D json-minimizer-webpack-plugin
```

Then add the plugin to your webpack configuration. For example:

webpack.config.js

```
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "./src/*.json",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new JsonMinimizerPlugin(),
    ],
  },
};
```

And run webpack via your preferred method.

## Options

- test
- include
- exclude
- minimizerOptions

### test

Type:

```
type test = string | RegExp | Array<string | RegExp>;
```

Default: /\.json(\?.*)?$/i

Test to match files against.

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin({
        test: /\.foo\.json/i,
      }),
    ],
  },
};
```

### include

Type:

```
type include = string | RegExp | Array<string | RegExp>;
```

Default: undefined

Files to include.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin({
        include: /\/includes/,
      }),
    ],
  },
};
```

### exclude

Type:

```
type exclude = string | RegExp | Array<string | RegExp>;
```

Default: undefined

Files to exclude.

webpack.config.js

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin({
        exclude: /\/excludes/,
      }),
    ],
  },
};
```

### minimizerOptions

Type:

```
type minimizerOptions = {
  space?: null | string | number;
  replacer?: null | Function | Array<string | number>;
};
```

Default: { replacer: null, space: null }

JSON.stringify() options.

```
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin({
        minimizerOptions: {
          space: "\t",
        },
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
 https://webpack.js.org/plugins/json-minimizer-webpack-plugin
