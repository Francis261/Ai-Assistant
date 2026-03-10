# Command Line Interface

Source: https://devdocs.io/webpack~5/api/cli

For proper usage and easier distribution of this configuration, webpack can be configured with webpack.config.js. Any parameters sent to the CLI will map to a corresponding parameter in the configuration file.

Read the installation guide if you don't already have webpack and CLI installed.

## Commands

webpack-cli offers a variety of commands to make working with webpack easier. By default webpack ships with

### Build

Run webpack (default command, can be omitted).

```
npx webpack build [options]
```

example

```
npx webpack build --config ./webpack.config.js --stats verbose
```

### Init

Used to initialize a new webpack project.

```
npx webpack init [generation-path] [options]
```

example

```
npx webpack init ./my-app --force --template=default
```

#### Generation Path

Location of where to generate the configuration. Defaults to process.cwd().

#### Options

-t, --template

string = 'default'

Name of template to generate.

-f, --force

boolean

To generate a project without questions. When enabled, the default answer for each question will be used.

### Loader

Scaffold a loader.

```
npx webpack loader [output-path] [options]
```

example

```
npx webpack loader ./my-loader --template=default
```

#### Output Path

Path to the output directory, e.g. ./loader-name.

#### Options

-t, --template

string = 'default'

Type of template.

### Plugin

Scaffold a plugin.

```
npx webpack plugin [output-path] [options]
```

example

```
npx webpack plugin ./my-plugin --template=default
```

#### Output Path

Path to the output directory, e.g. ./plugin-name.

#### Options

-t, --template

string = 'default'

Type of template.

### Info

Outputs information about your system.

```
npx webpack info [options]
```

example

```
npx webpack info --output json --addition-package postcss
```

#### Options for info

-a, --additional-package

string

Adds additional packages to the output.

example

```
npx webpack info --additional-package postcss
```

-o, --output

string : 'json' | 'markdown'

To get the output in a specified format.

example

```
npx webpack info --output markdown
```

### Configtest

Validate a webpack configuration.

```
npx webpack configtest [config-path]
```

example

```
npx webpack configtest ./webpack.config.js
```

#### Config Path

Path to your webpack configuration file. Defaults to ./webpack.config.js.

### Serve

Run the webpack dev server.

```
npx webpack serve [options]
```

example

```
npx webpack serve --static --open
```

### Watch

Run webpack and watch for files changes.

```
npx webpack watch [options]
```

example

```
npx webpack watch --mode development
```

## Flags

By default webpack ships with the following flags:

### Negated Flags

### Core Flags

Starting CLI v4 and webpack v5, CLI imports the entire configuration schema from webpack core to allow tuning almost every configuration option from the command line.

Here's the list of all the core flags supported by webpack v5 with CLI v4 - link

For example if you want to enable performance hints in your project you'd use this option in configuration, with core flags you can do -

```
npx webpack --performance-hints warning
```

## Usage

### With configuration file

```
npx webpack [--config webpack.config.js]
```

See configuration for the options in the configuration file.

### Without configuration file

```
npx webpack --entry <entry> --output-path <output-path>
```

example

```
npx webpack --entry ./first.js --entry ./second.js --output-path /build
```

#### entry

A filename or a set of named filenames which act as the entry point to build your project. You can pass multiple entries (every entry is loaded on startup). Following are the multiple ways of specifying entry file(s) via CLI -

```
npx webpack --entry-reset ./first-entry.js
```

```
npx webpack --entry-reset --entry ./first-entry.js
```

```
npx webpack --entry-reset ./first-entry.js ./other-entry.js
```

```
npx webpack --entry-reset --entry ./first-entry.js ./other-entry.js
```

#### output-path

A path for the bundled file to be saved in. It will be mapped to the configuration options output.path.

Example

If your project structure is as follows -

```
.
├── dist
├── index.html
└── src
    ├── index.js
    ├── index2.js
    └── others.js
```

```
npx webpack ./src/index.js --output-path dist
```

This will bundle your source code with entry as index.js, and the output bundle file will have a path of dist.

```
asset main.js 142 bytes [compared for emit] [minimized] (name: main)
./src/index.js 30 bytes [built] [code generated]
./src/others.js 1 bytes [built] [code generated]
webpack 5.1.0 compiled successfully in 187 ms
```

```
npx webpack ./src/index.js ./src/others2.js --output-path dist/
```

This will form the bundle with both the files as separate entry points.

```
asset main.js 142 bytes [compared for emit] [minimized] (name: main)
./src/index.js 30 bytes [built] [code generated]
./src/others2.js 1 bytes [built] [code generated]
./src/others.js 1 bytes [built] [code generated]
webpack 5.1.0 compiled successfully in 198 ms
```

## Default Configurations

CLI will look for some default configurations in the path of your project, here are the config files picked up by CLI.

This is the lookup priority in increasing order

example - config file lookup will be in order of .webpack/webpackfile > .webpack/webpack.config.js > webpack.config.js

```
'webpack.config',
'.webpack/webpack.config',
'.webpack/webpackfile',
```

## Common Options

### help

List basic commands and flags available on the cli

Both webpack help [command] [option] and webpack [command] --help are valid to get help:

```
npx webpack --help

# or

npx webpack help
```

List all supported commands and flags by cli

```
npx webpack --help=verbose
```

See help for a specific command or option

```
npx webpack help --mode
```

### version

Show version of installed packages and sub-packages

To inspect the version of webpack and webpack-cli you are using, run the command:

```
npx webpack --version

# or

npx webpack version
```

This will output the following result:

```
webpack 5.31.2
webpack-cli 4.6.0
```

It will output the version of webpack-dev-server as well if you have it installed:

```
webpack 5.31.2
webpack-cli 4.6.0
webpack-dev-server 3.11.2
```

To inspect the version of any webpack-cli sub-package (like @webpack-cli/info), run command similar to the following:

```
npx webpack info --version
```

This will output the following result:

```
@webpack-cli/info 1.2.3
webpack 5.31.2
webpack-cli 4.6.0
webpack-dev-server 3.11.2
```

### config

Build source using a configuration file

Specify a different configuration file other than webpack.config.js, which is one of the defaults.

```
npx webpack --config example.config.js
```

### config-name

In case your configuration file exports multiple configurations, you can use --config-name to specify which configuration to run.

Consider the following webpack.config.js:

```
module.exports = [
  {
    output: {
      filename: './dist-first.js',
    },
    name: 'first',
    entry: './src/first.js',
    mode: 'development',
  },
  {
    output: {
      filename: './dist-second.js',
    },
    name: 'second',
    entry: './src/second.js',
    mode: 'development',
  },
  {
    output: {
      filename: './dist-third.js',
    },
    name: 'third',
    entry: './src/third.js',
    mode: 'none',
    stats: 'verbose',
  },
];
```

To run only the second configuration:

```
npx webpack --config-name second
```

You can also pass multiple values:

```
npx webpack --config-name first --config-name second
```

### merge

You can merge two or more different webpack configurations with the help of --merge:

```
npx webpack --config ./first.js --config ./second.js --merge
```

### extends

You can extend existing webpack configurations with the help of --extends:

```
npx webpack --extends ./base.webpack.config.js
```

Read more about it in extending configurations.

### json

Print result of webpack as JSON

```
npx webpack --json
```

If you want to store stats as json instead of printing it, you can use -

```
npx webpack --json stats.json
```

In every other case, webpack prints out a set of stats showing bundle, chunk and timing details. Using this option, the output can be a JSON object. This response is accepted by webpack's analyse tool, or chrisbateman's webpack-visualizer, or th0r's webpack-bundle-analyzer. The analyse tool will take in the JSON and provide all the details of the build in graphical form.

## Environment Options

When the webpack configuration exports a function, an "environment" may be passed to it.

### env

```
npx webpack --env production    # env.production = true
```

The --env argument accepts multiple values:

In addition to the customized env showed above, there are some built-in ones under env to be used inside your webpack configuration:

Note that you can not access those built-in environment variables inside the bundled code.

```
module.exports = (env, argv) => {
  return {
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
  };
};
```

### node-env

You can use --node-env option to set process.env.NODE_ENV, which is available to both user code and webpack configuration:

```
npx webpack --node-env production   # process.env.NODE_ENV = 'production'
```

### define-process-env-node-env

For webpack-cli v5+.

An alias for --node-env to set process.env.NODE_ENV:

```
npx webpack --define-process-env-node-env production   # process.env.NODE_ENV = 'production'
```

When the mode option is not specified in the configuration, you can use the --define-process-env-node-env option to set the mode. For example, using --define-process-env-node-env production will set both process.env.NODE_ENV and mode to 'production'.

If your configuration exports a function, the value of --define-process-env-node-env is assigned to mode after the function returns. This means that mode will not be available in the function arguments (env and argv). However, the value of --define-process-env-node-env is accessible as argv.nodeEnv within the function and can be used accordingly.

```
module.exports = (env, argv) => {
  console.log(argv.defineProcessEnvNodeEnv); // 'production' if --define-process-env-node-env production is used
  return {
    // your configuration
  };
};
```

## Configuration Options

## Analyzing Bundle

You can also use webpack-bundle-analyzer to analyze your output bundles emitted by webpack. You can use --analyze flag to invoke it via CLI.

```
npx webpack --analyze
```

## Progress

To check the progress of any webpack compilation you can use the --progress flag.

```
npx webpack --progress
```

To collect profile data for progress steps you can pass profile as value to --progress flag.

```
npx webpack --progress=profile
```

## Pass CLI arguments to Node.js

To pass arguments directly to Node.js process, you can use the NODE_OPTIONS option.

For example, to increase the memory limit of Node.js process to 4 GB

```
NODE_OPTIONS="--max-old-space-size=4096" webpack
```

Also, you can pass multiple options to Node.js process

```
NODE_OPTIONS="--max-old-space-size=4096 -r /path/to/preload/file.js" webpack
```

## Exit codes and their meanings

## CLI Environment Variables

```
WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG=true npx webpack --config ./webpack.config.esm
```

### WEBPACK_PACKAGE

Use a custom webpack version in CLI. Considering the following content in your package.json:

```
{
  "webpack": "^4.0.0",
  "webpack-5": "npm:webpack@^5.32.0",
  "webpack-cli": "^4.5.0"
}
```

To use webpack v4.0.0:

```
npx webpack
```

To use webpack v5.32.0:

```
WEBPACK_PACKAGE=webpack-5 npx webpack
```

## Troubleshooting

### TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for ./webpack.config.ts

You might encounter this error in the case of using native ESM in TypeScript (i.e. type: "module" in package.json).

webpack-cli supports configuration in both CommonJS and ESM format, at first it tries to load a configuration using require(), once it fails with an error code of 'ERR_REQUIRE_ESM' (a special code for this case) it would try to load the configuration using import(). However, the import() method won't work with ts-node without loader hooks enabled (described at TypeStrong/ts-node#1007).

To fix the error above use the following command:

```
NODE_OPTIONS="--loader ts-node/esm" npx webpack --entry ./src/index.js --mode production
```

For more information, see our documentation on writing a webpack configuration in TypeScript.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/cli
