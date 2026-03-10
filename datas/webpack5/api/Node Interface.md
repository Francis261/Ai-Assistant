# Node Interface

Source: https://devdocs.io/webpack~5/api/node

Webpack provides a Node.js API which can be used directly in Node.js runtime.

The Node.js API is useful in scenarios in which you need to customize the build or development process since all the reporting and error handling must be done manually and webpack only does the compiling part. For this reason the stats configuration options will not have any effect in the webpack() call.

## Installation

To start using the webpack Node.js API, first install webpack if you haven’t yet:

```
npm install --save-dev webpack
```

Then require the webpack module in your Node.js script:

```
const webpack = require('webpack');
```

Or if you prefer ES2015:

```
import webpack from 'webpack';
```

## webpack()

The imported webpack function is fed a webpack Configuration Object and runs the webpack compiler if a callback function is provided:

```
const webpack = require('webpack');

webpack({}, (err, stats) => {
  if (err || stats.hasErrors()) {
    // ...
  }
  // Done processing
});
```

## Compiler Instance

If you don’t pass the webpack runner function a callback, it will return a webpack Compiler instance. This instance can be used to manually trigger the webpack runner or have it build and watch for changes, much like the CLI. The Compiler instance provides the following methods:

- .run(callback)
- .watch(watchOptions, handler)

Typically, only one master Compiler instance is created, although child compilers can be created in order to delegate specific tasks. The Compiler is ultimately a function which performs bare minimum functionality to keep a lifecycle running. It delegates all the loading, bundling, and writing work to registered plugins.

The hooks property on a Compiler instance is used to register a plugin to any hook event in the Compiler's lifecycle. The WebpackOptionsDefaulter and WebpackOptionsApply utilities are used by webpack to configure its Compiler instance with all the built-in plugins.

The run method is then used to kickstart all compilation work. Upon completion, the given callback function is executed. The final logging of stats and errors should be done in this callback function.

## Run

Calling the run method on the Compiler instance is much like the quick run method mentioned above:

```
const webpack = require('webpack');

const compiler = webpack({
  // ...
});

compiler.run((err, stats) => {
  // ...

  compiler.close((closeErr) => {
    // ...
  });
});
```

## Watching

Calling the watch method triggers the webpack runner, but then watches for changes (much like CLI: webpack --watch), as soon as webpack detects a change, runs again. Returns an instance of Watching.

```
watch(watchOptions, callback);
```

```
const webpack = require('webpack');

const compiler = webpack({
  // ...
});

const watching = compiler.watch(
  {
    // Example
    aggregateTimeout: 300,
    poll: undefined,
  },
  (err, stats) => {
    // Print watch/build result here...
    console.log(stats);
  }
);
```

Watching options are covered in detail here.

### Close Watching

The watch method returns a Watching instance that exposes .close(callback) method. Calling this method will end watching:

```
watching.close((closeErr) => {
  console.log('Watching Ended.');
});
```

### Invalidate Watching

Using watching.invalidate, you can manually invalidate the current compiling round, without stopping the watch process:

```
watching.invalidate();
```

## Stats Object

The stats object that is passed as a second argument of the webpack() callback, is a good source of information about the code compilation process. It includes:

- Errors and Warnings (if any)
- Timings
- Module and Chunk information

The webpack CLI uses this information to display nicely formatted output in your console.

This stats object exposes the following methods:

### stats.hasErrors()

Can be used to check if there were errors while compiling. Returns true or false.

### stats.hasWarnings()

Can be used to check if there were warnings while compiling. Returns true or false.

### stats.toJson(options)

Returns compilation information as a JSON object. options can be either a string (a preset) or an object for more granular control:

```
stats.toJson('minimal');
```

```
stats.toJson({
  assets: false,
  hash: true,
});
```

All available options and presets are described in the stats documentation.

Here’s an example of this function’s output.

### stats.toString(options)

Returns a formatted string of the compilation information (similar to CLI output).

Options are the same as stats.toJson(options) with one addition:

```
stats.toString({
  // Add console colors
  colors: true,
});
```

Here’s an example of stats.toString() usage:

```
const webpack = require('webpack');

webpack(
  {
    // ...
  },
  (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true, // Shows colors in the console
      })
    );
  }
);
```

## MultiCompiler

The MultiCompiler module allows webpack to run multiple configurations in separate compilers. If the options parameter in the webpack's NodeJS api is an array of options, webpack applies separate compilers and calls the callback after all compilers have been executed.

```
var webpack = require('webpack');

webpack(
  [
    { entry: './index1.js', output: { filename: 'bundle1.js' } },
    { entry: './index2.js', output: { filename: 'bundle2.js' } },
  ],
  (err, stats) => {
    process.stdout.write(stats.toString() + '\n');
  }
);
```

## Error Handling

For good error handling, you need to account for these three types of errors:

- Fatal webpack errors (wrong configuration, etc)
- Compilation errors (missing modules, syntax errors, etc)
- Compilation warnings

Here’s an example that does all that:

```
const webpack = require('webpack');

webpack(
  {
    // ...
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    // Log result...
  }
);
```

## Custom File Systems

By default, webpack reads files and writes files to disk using a normal file system. However, it is possible to change the input or output behavior using a different kind of file system (memory, webDAV, etc). To accomplish this, one can change the inputFileSystem or outputFileSystem. For example, you can replace the default outputFileSystem with memfs to write files to memory instead of to disk:

```
const { createFsFromVolume, Volume } = require('memfs');
const webpack = require('webpack');

const fs = createFsFromVolume(new Volume());
const compiler = webpack({
  /* options */
});

compiler.outputFileSystem = fs;
compiler.run((err, stats) => {
  // Read the output later:
  const content = fs.readFileSync('...');
  compiler.close((closeErr) => {
    // ...
  });
});
```

Note that this is what webpack-dev-middleware, used by webpack-dev-server and many other packages, uses to mysteriously hide your files but continue serving them up to the browser!

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/node
