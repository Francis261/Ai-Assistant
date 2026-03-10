# remark-loader

Source: https://devdocs.io/webpack~5/loaders/remark-loader

Load markdown through remark.

## Usage

Simply add the loader to your configuration, and pass options.

```
import md from "markdown-file.md";

console.log(md);
```

webpack.config.js

```
import RemarkHTML from "remark-html";

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                plugins: [RemarkHTML],
              },
            },
          },
        ],
      },
    ],
  },
};
```

Here's the full list of remark plugins.

We no longer support any react specific features. Please see the wonderful MDX project if you're interested in mixing JSX with Markdown.

## Options

- remarkOptions
- removeFrontMatter

### remarkOptions

Remark options

Type:

```
type remarkOptions = {
  plugins: Array<string | Array>;
  settings: Object;
  data: Object;
};
```

- plugins
- settings
- data

#### plugins

Allows to connect remark plugins Type:

```
type plugins = Array<string | Array>;
```

Default: []

Allows to connect remark plugins

##### string

webpack.config.js

```
import RemarkFrontmatter from "remark-frontmatter";

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                plugins: [RemarkFrontmatter],
              },
            },
          },
        ],
      },
    ],
  },
};
```

##### array

If need to specify options for the plugin, can pass the plugin using an array, where the second argument will be options.

webpack.config.js

```
import RemarkFrontmatter from "remark-frontmatter";
import RemarkBookmarks from "remark-bookmarks";

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                plugins: [
                  RemarkFrontmatter,
                  [
                    RemarkBookmarks,
                    {
                      bookmarks: {
                        npm: "https://npmjs.com/package/remark-bookmarks",
                      },
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
```

#### settings

Remark settings Type:

```
type settings = Object;
```

Default: undefined

Pass remark-stringify options and remark-parse options options to the remark.

webpack.config.js

```
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                settings: {
                  bullet: "+",
                  listItemIndent: "1",
                },
              },
            },
          },
        ],
      },
    ],
  },
};
```

#### data

Information available to all plugins Type:

```
type data = Object;
```

Default: undefined

Configure the remark with information available to all plugins. Information is stored in an in-memory key-value store.

webpack.config.js

```
function examplePluginUsingData() {
  console.log(this.data);
  // { alpha: 'bravo', charlie: 'delta' }
}

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                plugins: [examplePluginUsingData],
                data: {
                  alpha: "bravo",
                  charlie: "delta",
                },
              },
            },
          },
        ],
      },
    ],
  },
};
```

### removeFrontMatter

Remove removeFrontMatter

Type:

```
type removeFrontMatter = boolean;
```

Default: true

By default, the frontMatter is removed. To override this behavior, set removeFrontMatter to false and add remark-frontmatter to plugins.

webpack.config.js

```
import RemarkFrontmatter from "remark-frontmatter";

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
            options: {
              removeFrontMatter: false,
              remarkOptions: {
                plugins: [RemarkFrontmatter],
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Inspiration

This project was inspired the following open source work:

- react-markdown-loader
- marksy

## Examples

### Markdown to HTML

To get html, need to add remark-html to the remark plugins and add html-loader to the webpack.config

```
import md from "markdown-file.md";
console.log(md);
```

webpack.config.js

```
import RemarkHTML from "remark-html";

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                plugins: [RemarkHTML],
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Markdown to Markdown

index.js

```
import md from "markdown-file.md";
console.log(md);
```

webpack.config.js

```
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "remark-loader",
          },
        ],
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
 https://webpack.js.org/loaders/remark-loader
