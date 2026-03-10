# node-loader

Source: https://devdocs.io/webpack~5/loaders/node-loader

A Node.js add-ons loader.

Allows to connect native node modules with .node extension.

⚠ node-loader only works on the node/async-node/electron-main/electron-renderer/electron-preload targets.

## Getting Started

To begin, you'll need to install node-loader:

```
npm install node-loader --save-dev
```

or

```
yarn add -D node-loader
```

or

```
pnpm add -D node-loader
```

Setup the target option to node/async-node/electron-main/electron-renderer/electron-preload value and do not mock the __dirname global variable.

webpack.config.js

```
module.exports = {
  resolve: {
    extensions: ["...", ".node"],
  },
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
};
```

### Inline

index.js

```
import node from "node-loader!./file.node";
```

And run webpack via your preferred method.

### Configuration

index.js

```
import node from "file.node";
```

Then add the loader to your webpack config. For example:

webpack.config.js

```
module.exports = {
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
};
```

And run webpack via your preferred method.

## Options

### flags

Type: Number Default: undefined

The flags argument is an integer that allows to specify dlopen behavior. See the process.dlopen documentation for details.

index.js

```
import node from "file.node";
```

webpack.config.js

```
const os = require("os");

module.exports = {
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
        options: {
          flags: os.constants.dlopen.RTLD_NOW,
        },
      },
    ],
  },
};
```

### name

Type: String|Function Default: '[contenthash].[ext]'

Specifies a custom filename template for the target file(s).

#### String

webpack.config.js

```
module.exports = {
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
};
```

#### Function

webpack.config.js

```
module.exports = {
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
        options: {
          name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`

            if (process.env.NODE_ENV === "development") {
              return "[path][name].[ext]";
            }

            return "[contenthash].[ext]";
          },
        },
      },
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
 https://webpack.js.org/loaders/node-loader
