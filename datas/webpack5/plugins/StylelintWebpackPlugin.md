# StylelintWebpackPlugin

Source: https://devdocs.io/webpack~5/plugins/stylelint-webpack-plugin

This version of stylelint-webpack-plugin only works with webpack 5. For the webpack 4, see the 2.x branch.

This plugin uses stylelint that helps you avoid errors and enforce conventions in your styles.

## Getting Started

To begin, you'll need to install stylelint-webpack-plugin:

```
npm install stylelint-webpack-plugin --save-dev
```

or

```
yarn add -D stylelint-webpack-plugin
```

or

```
pnpm add -D stylelint-webpack-plugin
```

[!NOTE]

You also need to install stylelint >= 13 from npm, if you haven't already:

```
npm install stylelint --save-dev
```

or

```
yarn add -D stylelint
```

or

```
pnpm add -D stylelint
```

[!NOTE]

If you are using Stylelint 13 rather than 14+, you might also need to install @types/stylelint as a dev dependency if getting stylelint related type errors.

Then add the plugin to your webpack config. For example:

```
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new StylelintPlugin(options)],
  // ...
};
```

## Options

See stylelint's options for the complete list of options available. These options are passed through to the stylelint directly.

### cache

- Type:

```
type cache = boolean;
```

- Default: true

The cache is enabled by default to decrease execution time.

### cacheLocation

- Type:

```
type cacheLocation = string;
```

- Default: node_modules/.cache/stylelint-webpack-plugin/.stylelintcache

Specify the path to the cache location. Can be a file or a directory.

### configFile

- Type:

```
type context = string;
```

- Default: undefined

Specify the config file location to be used by stylelint.

Note:

By default this is handled by stylelint.

### context

- Type:

```
type context = string;
```

- Default: compiler.context

A string indicating the root of your files.

### exclude

- Type:

```
type exclude = string | Array<string>;
```

- Default: ['node_modules', compiler.options.output.path]

Specify the files and/or directories to exclude. Must be relative to options.context.

### extensions

- Type:

```
type extensions = string | Array<string>;
```

- Default: ['css', 'scss', 'sass']

Specify extensions that should be checked.

### files

- Type:

```
type files = string | Array<string>;
```

- Default: null

Specify directories, files, or globs. Must be relative to options.context. Directories are traversed recursively looking for files matching options.extensions. File and glob patterns ignore options.extensions.

### fix

- Type:

```
type fix = boolean;
```

- Default: false

If true, stylelint will fix as many errors as possible. The fixes are made to the actual source files. All unfixed errors will be reported. See Autofixing errors docs.

### formatter

- Type:

```
type formatter = string | (
  results: Array<import('stylelint').LintResult>
) => string
```

- Default: 'string'

Specify the formatter that you would like to use to format your results. See formatter option.

### lintDirtyModulesOnly

- Type:

```
type lintDirtyModulesOnly = boolean;
```

- Default: false

Lint only changed files, skip lint on start.

### stylelintPath

- Type:

```
type stylelintPath = string;
```

- Default: stylelint

Path to stylelint instance that will be used for linting.

### threads

- Type:

```
type threads = boolean | number;
```

- Default: false

Set to true for an auto-selected pool size based on number of cpus. Set to a number greater than 1 to set an explicit pool size. Set to false, 1, or less to disable and only run in main process.

### Errors and Warning

By default the plugin will auto adjust error reporting depending on stylelint errors/warnings counts. You can still force this behavior by using emitError or emitWarning options:

#### emitError

- Type:

```
type emitError = boolean;
```

- Default: true

The errors found will always be emitted, to disable set to false.

#### emitWarning

- Type:

```
type emitWarning = boolean;
```

- Default: true

The warnings found will always be emitted, to disable set to false.

#### failOnError

- Type:

```
type failOnError = boolean;
```

- Default: true

Will cause the module build to fail if there are any errors, to disable set to false.

#### failOnWarning

- Type:

```
type failOnWarning = boolean;
```

- Default: false

Will cause the module build to fail if there are any warnings, if set to true.

#### quiet

- Type:

```
type quiet = boolean;
```

- Default: false

Will process and report errors only and ignore warnings, if set to true.

#### outputReport

- Type:

```
type outputReport =
  | boolean
  | {
      filePath?: string | undefined;
      formatter?:
        | (
            | string
            | ((results: Array<import('stylelint').LintResult>) => string)
          )
        | undefined;
    };
```

- Default: false

Write the output of the errors to a file, for example a json file for use for reporting. The filePath is relative to the webpack config: output.path. You can pass in a different formatter for the output file, if none is passed in the default/configured formatter will be used.

```
{
  filePath: 'path/to/file';
  formatter: 'json';
}
```

## Changelog

Changelog

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/stylelint-webpack-plugin
