# less-loader

Source: https://devdocs.io/webpack~5/loaders/less-loader

A Less loader for webpack. Compiles Less to CSS.

## Getting Started

To begin, you'll need to install less and less-loader:

```
npm install less less-loader --save-dev
```

or

```
yarn add -D less less-loader
```

or

```
pnpm add -D less less-loader
```

Then add the loader to your webpack config. For example:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
};
```

And run webpack via your preferred method.

## Options

- lessOptions
- additionalData
- sourceMap
- webpackImporter
- implementation
- lessLogAsWarnOrErr

### lessOptions

Type:

```
type lessOptions = import('less').options | ((loaderContext: LoaderContext) => import('less').options})
```

Default: { relativeUrls: true }

You can pass any Less specific options to the less-loader through the lessOptions property in the loader options. See the Less documentation for all available options in dash-case. Since we're passing these options to Less programmatically, you need to pass them in camelCase here:

#### object

Use an object to pass options through to Less.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

#### function

Allows setting the options passed through to Less based off of the loader context.

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: (loaderContext) => {
                // More information about available properties https://webpack.js.org/api/loaders/
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);

                if (relativePath === "styles/foo.less") {
                  return {
                    paths: ["absolute/path/c", "absolute/path/d"],
                  };
                }

                return {
                  paths: ["absolute/path/a", "absolute/path/b"],
                };
              },
            },
          },
        ],
      },
    ],
  },
};
```

### additionalData

Type:

```
type additionalData =
  | string
  | ((content: string, loaderContext: LoaderContext) => string);
```

Default: undefined

Prepends/Appends Less code to the actual entry file. In this case, the less-loader will not override the source but just prepend the entry's content.

This is especially useful when some of your Less variables depend on the environment:

Since you're injecting code, this will break the source mappings in your entry file. Often there's a simpler solution than this, like multiple Less entry files.

#### string

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              additionalData: `@env: ${process.env.NODE_ENV};`,
            },
          },
        ],
      },
    ],
  },
};
```

#### function

##### Sync

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              additionalData: (content, loaderContext) => {
                // More information about available properties https://webpack.js.org/api/loaders/
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);

                if (relativePath === "styles/foo.less") {
                  return "@value: 100px;" + content;
                }

                return "@value: 200px;" + content;
              },
            },
          },
        ],
      },
    ],
  },
};
```

##### Async

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              additionalData: async (content, loaderContext) => {
                // More information about available properties https://webpack.js.org/api/loaders/
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);

                if (relativePath === "styles/foo.less") {
                  return "@value: 100px;" + content;
                }

                return "@value: 200px;" + content;
              },
            },
          },
        ],
      },
    ],
  },
};
```

### sourceMap

Type:

```
type sourceMap = boolean;
```

Default: depends on the compiler.devtool value

By default generation of source maps depends on the devtool option. All values enable source map generation except eval and false value.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
```

### webpackImporter

Type:

```
type webpackImporter = boolean;
```

Default: true

Enables/Disables the default webpack importer.

This can improve performance in some cases. Use it with caution because aliases and @import from node_modules will not work.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              webpackImporter: false,
            },
          },
        ],
      },
    ],
  },
};
```

### implementation

Type:

```
type implementation = object | string;
```

less-loader compatible with Less 3 and 4 versions

The special implementation option determines which implementation of Less to use. Overrides the locally installed peerDependency version of less.

This option is only really useful for downstream tooling authors to ease the Less 3-to-4 transition.

#### object

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              implementation: require("less"),
            },
          },
        ],
      },
    ],
  },
};
```

#### string

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              implementation: require.resolve("less"),
            },
          },
        ],
      },
    ],
  },
};
```

### lessLogAsWarnOrErr

Type:

```
type lessLogAsWarnOrErr = boolean;
```

Default: false

Less warnings and errors will be webpack warnings and errors, not just logs.

warning.less

```
div {
  &:extend(.body1);
}
```

If lessLogAsWarnOrErr is set to false it will be just a log and webpack will compile successfully, but if you set this option to true webpack will compile fail with a warning.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessLogAsWarnOrErr: true,
            },
          },
        ],
      },
    ],
  },
};
```

## Examples

### Normal usage

Chain the less-loader with the css-loader and the style-loader to immediately apply all styles to the DOM.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
    ],
  },
};
```

Unfortunately, Less doesn't map all options 1-by-1 to camelCase. When in doubt, check their executable and search for the dash-case option.

### Source maps

To enable sourcemaps for CSS, you'll need to pass the sourceMap property in the loader's options. If this is not passed, the loader will respect the setting for webpack source maps, set in devtool.

webpack.config.js

```
module.exports = {
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
```

If you want to edit the original Less files inside Chrome, there's a good blog post. The blog post is about Sass but it also works for Less.

### In production

Usually, it's recommended to extract the style sheets into a dedicated file in production using the MiniCssExtractPlugin. This way your styles are not dependent on JavaScript.

### Imports

First we try to use built-in less resolve logic, then webpack resolve logic.

#### Webpack Resolver

webpack provides an advanced mechanism to resolve files. less-loader applies a Less plugin that passes all queries to the webpack resolver if less could not resolve @import. Thus you can import your Less modules from node_modules.

```
@import "bootstrap/less/bootstrap";
```

Using ~ is deprecated and can be removed from your code (we recommend it), but we still support it for historical reasons. Why you can removed it? The loader will first try to resolve @import as relative, if it cannot be resolved, the loader will try to resolve @import inside node_modules.

Default resolver options can be modified by resolve.byDependency:

webpack.config.js

```
module.exports = {
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  resolve: {
    byDependency: {
      // More options can be found here https://webpack.js.org/configuration/resolve/
      less: {
        mainFiles: ["custom"],
      },
    },
  },
};
```

#### Less Resolver

If you specify the paths option, modules will be searched in the given paths. This is less default behavior. paths should be an array with absolute paths:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                paths: [path.resolve(__dirname, "node_modules")],
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Plugins

In order to use plugins, simply set the plugins option like this:

webpack.config.js

```
const CleanCSSPlugin = require('less-plugin-clean-css');

module.exports = {
  ...
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          plugins: [
            new CleanCSSPlugin({ advanced: true }),
          ],
        },
      },
    },
  ...
};
```

[!NOTE]

Access to the loader context inside the custom plugin can be done using the pluginManager.webpackLoaderContext property.

```
module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add("pi", function () {
      // Loader context is available in `pluginManager.webpackLoaderContext`

      return Math.PI;
    });
  },
};
```

### Extracting style sheets

Bundling CSS with webpack has some nice advantages like referencing images and fonts with hashed urls or hot module replacement in development. In production, on the other hand, it's not a good idea to apply your style sheets depending on JS execution. Rendering may be delayed or even a FOUC might be visible. Thus it's often still better to have them as separate files in your final production build.

There are two possibilities to extract a style sheet from the bundle:

- extract-loader (simpler, but specialized on the css-loader's output)
- MiniCssExtractPlugin (more complex, but works in all use-cases)

### CSS modules gotcha

There is a known problem with Less and CSS modules regarding relative file paths in url(...) statements. See this issue for an explanation.

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/less-loader
