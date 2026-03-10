# InstallWebpackPlugin

Source: https://devdocs.io/webpack~5/plugins/install-webpack-plugin

Speed up development by automatically installing & saving dependencies with Webpack.

It is inefficient to Ctrl-C your build script & server just to install a dependency you didn't know you needed until now.

Instead, use require or import how you normally would and installation will happen automatically to install & save missing dependencies while you work!

```
$ npm install --save-dev install-webpack-plugin
```

# Usage

In your webpack.config.js:

```
plugins: [
  new InstallPlugin()
],
```

This is equivalent to:

```
plugins: [
  new InstallPlugin({
    dependencies: {
      peer: true,
    },
    packageManager: {
      type: this.getDefaultPackageManager(),
      options: {
        dev: false,
        quiet: false,
      },
    },
    prompt: true,
  });
],
```

# Options

## dependencies

Type: Object

Dependencies related options.

### peer

Type: Boolean

Default: true

Install missing peer dependencies.

```
plugins: [
  new InstallPlugin({
    dependencies: {
      peer: true,
    }
  }),
],
```

## packageManager

Type: 'npm' | 'yarn' | 'pnpm' | Object | Function

Package manager to use for installing dependencies.

```
plugins: [
  new InstallPlugin({
      packageManager: 'yarn'
    },
  }),
],
```

You can provide a Function to the packageManager to make it dynamic:

```
plugins: [
  new InstallPlugin({
    packageManager: function(module, path) {
      return [
        "babel-preset-react-hmre",
        "webpack-dev-middleware",
        "webpack-hot-middleware",
      ].indexOf(module) !== -1;
    },
  }),
],
```

### type

Type: 'npm' | 'yarn' | 'pnpm'

Name of package manager to use for installing dependencies.

### options

Type: Object

Package manager related options.

### arguments

Type: Array

Provide custom arguments to use with package manager.

```
plugins: [
  new InstallPlugin({
      packageManager: {
        type: 'npm',
        options: {
          arguments: ['--ignore-scripts']
        }
      }
    },
  }),
],
```

### dev

Type: Boolean

Default: false

Install as development dependencies.

```
plugins: [
  new InstallPlugin({
      packageManager: {
        type: 'npm',
        options: {
          dev: true,
        }
      }
    },
  }),
],
```

### quiet

Type: Boolean

Default: false

Reduce the amount of console logging.

```
plugins: [
  new InstallPlugin({
      packageManager: {
        type: 'npm',
        options: {
          quiet: true,
        }
      }
    },
  }),
],
```

## prompt

Type: Boolean

Default: true

Show a prompt to confirm installation.

```
plugins: [
  new InstallPlugin({
      prompt: true,
    },
  }),
],
```

# Demo

# Features

- Works with webpack ^v5.0.0.
- Auto-installs .babelrc plugins & presets.
- Supports both ES5 & ES6 Modules. (e.g. require, import)
- Supports Namespaced packages. (e.g. @cycle/dom)
- Supports Dot-delimited packages. (e.g. lodash.capitalize)
- Supports CSS imports. (e.g. @import "~bootstrap")
- Supports webpack loaders. (e.g. babel-loader, file-loader, etc.)
- Supports inline webpack loaders. (e.g. require("bundle?lazy!./App")
- Auto-installs missing peerDependencies. (e.g. @cycle/core will automatically install rx@*)
- Supports webpack's resolve.alias & resolve.root configuration. (e.g. require("react") can alias to react-lite)

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/install-webpack-plugin
