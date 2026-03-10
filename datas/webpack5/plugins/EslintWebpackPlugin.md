# EslintWebpackPlugin

Source: https://devdocs.io/webpack~5/plugins/eslint-webpack-plugin

This version of eslint-webpack-plugin only works with webpack 5. For the webpack 4, see the 2.x branch.

This plugin uses eslint to find and fix problems in your JavaScript code

## Getting Started

To begin, you'll need to install eslint-webpack-plugin:

```
npm install eslint-webpack-plugin --save-dev
```

or

```
yarn add -D eslint-webpack-plugin
```

or

```
pnpm add -D eslint-webpack-plugin
```

[!NOTE]

You also need to install eslint >= 8 from npm, if you haven't already:

```
npm install eslint --save-dev
```

or

```
yarn add -D eslint
```

or

```
pnpm add -D eslint
```

Then add the plugin to your webpack config. For example:

```
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

## Options

You can pass eslint options.

[!NOTE]

The config option you provide will be passed to the ESLint class. This is a different set of options than what you'd specify in package.json or .eslintrc. See the eslint docs for more details.

[!WARNING]

In eslint-webpack-plugin version 1 the options were passed to the now deprecated CLIEngine.

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

- Default: node_modules/.cache/eslint-webpack-plugin/.eslintcache

Specify the path to the cache location. Can be a file or a directory.

### configType

- Type:

```
type configType = 'flat' | 'eslintrc';
```

- Default: eslintrc

Specify the type of configuration to use with ESLint.

- eslintrc is the classic configuration format available in most ESLint versions.
- flat is the new format introduced in ESLint 8.21.0.

The new configuration format is explained in its own documentation.

This configuration format being considered as experimental, it is not exported in the main ESLint module in ESLint 8. You need to set your eslintPath to eslint/use-at-your-own-risk for this config format to work.

### context

- Type:

```
type context = string;
```

- Default: compiler.context

A string indicating the root of your files.

### eslintPath

- Type:

```
type eslintPath = string;
```

- Default: eslint

Path to eslint instance that will be used for linting. If the eslintPath is a folder like a official eslint, or specify a formatter option. now you don't have to install eslint.

### extensions

- Type:

```
type extensions = string | Array<string>;
```

- Default: 'js'

Specify extensions that should be checked.

### exclude

- Type:

```
type exclude = string | Array<string>;
```

- Default: 'node_modules'

Specify the files and/or directories to exclude. Must be relative to options.context.

### resourceQueryExclude

- Type:

```
type resourceQueryExclude = RegExp | Array<RegExp>;
```

- Default: []

Specify the resource query to exclude.

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

Will enable ESLint autofix feature.

Be careful: this option will change source files.

### formatter

- Type:

```
type formatter = string| (
  results:  Array<import('eslint').ESLint.LintResult>,
  data?: import('eslint').ESLint.LintResultData | undefined
) => string
```

- Default: 'stylish'

Accepts a function that will have one argument: an array of eslint messages (object). The function must return the output as a string. You can use official eslint formatters.

### lintDirtyModulesOnly

- Type:

```
type lintDirtyModulesOnly = boolean;
```

- Default: false

Lint only changed files, skip lint on start.

### threads

- Type:

```
type threads = boolean | number;
```

- Default: false

Will run lint tasks across a thread pool. The pool size is automatic unless you specify a number.

### Errors and Warning

By default the plugin will auto adjust error reporting depending on eslint errors/warnings counts. You can still force this behavior by using emitError or emitWarning options:

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
            | ((
                results: Array<import('eslint').ESLint.LintResult>,
                data?: import('eslint').ESLint.LintResultData | undefined,
              ) => string)
          )
        | undefined;
    };
```

- Default: false

Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI.

The filePath is an absolute path or relative to the webpack config: output.path. You can pass in a different formatter for the output file, if none is passed in the default/configured formatter will be used.

## Changelog

Changelog

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/eslint-webpack-plugin
